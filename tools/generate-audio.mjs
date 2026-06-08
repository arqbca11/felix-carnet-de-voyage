#!/usr/bin/env node
/* Pre-generate ElevenLabs MP3s for every paragraph, so the published GitHub Pages
   site can play audio with NO API key in the browser.

   Run it LOCALLY. Your key goes in an env var and is never written to disk or
   committed — only the resulting .mp3 files (which are not secret) get committed.

   Node 18+ (uses global fetch). Run from the repo root.

   List the voices on your account and pick one (or more):
     ELEVENLABS_API_KEY=sk_... node tools/generate-audio.mjs --list

   Estimate the credit cost BEFORE spending anything (no audio generated):
     ELEVENLABS_API_KEY=sk_... node tools/generate-audio.mjs --estimate
     ELEVENLABS_API_KEY=sk_... node tools/generate-audio.mjs --estimate --model eleven_flash_v2_5

   Generate audio for the voice(s) you chose:
     ELEVENLABS_API_KEY=sk_... node tools/generate-audio.mjs --voice <voiceId>
     ELEVENLABS_API_KEY=sk_... node tools/generate-audio.mjs --voice <id1> --voice <id2>

   Useful flags:
     --model <id>    TTS model (default eleven_multilingual_v2; eleven_flash_v2_5 ≈ half the credits)
     --latest <N>    only the N most recent posts (e.g. --latest 3 = just what the page shows)
     --force         re-generate files that already exist (e.g. after editing a post)

   Output:
     audio/<voiceId>/<postId>/<paragraphIndex>.mp3
     audio/voices.json          <- the list the page reads to populate the voice picker
*/
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const KEY = process.env.ELEVENLABS_API_KEY;
if (!KEY) { console.error('✗ Set ELEVENLABS_API_KEY in your environment first.'); process.exit(1); }

const ROOT = process.cwd();
const VOICE_SETTINGS = { stability: 0.5, similarity_boost: 0.75 };
// Approximate billing rate (credits per character) by model, for the cost estimate.
const CREDIT_PER_CHAR = { eleven_multilingual_v2: 1, eleven_flash_v2_5: 0.5, eleven_turbo_v2_5: 0.5 };

// ── args ──
const args = process.argv.slice(2);
const flag = name => args.includes(name);
const val  = name => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };
const force = flag('--force');
const model = val('--model') || 'eleven_multilingual_v2';
const latest = val('--latest') ? parseInt(val('--latest'), 10) : null;
const voiceIds = args.flatMap((a, i) => (a === '--voice' ? [args[i + 1]] : []));
const rate = CREDIT_PER_CHAR[model] ?? 1;

// ── helpers ──
function loadPosts() {
  const POSTS = [];
  const sb = { window: {}, console, FelixBlog: { register: p => POSTS.push(p) } };
  sb.window.FelixBlog = sb.FelixBlog;
  vm.createContext(sb);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'posts/manifest.js'), 'utf8'), sb);
  for (const e of sb.window.FELIX_MANIFEST)
    vm.runInContext(fs.readFileSync(path.join(ROOT, e.file), 'utf8'), sb);
  POSTS.sort((a, b) => a.no - b.no);
  return latest ? POSTS.slice(-latest) : POSTS;
}
async function api(p, opts) { return fetch('https://api.elevenlabs.io/v1' + p, opts); }
async function listVoices() {
  const r = await api('/voices', { headers: { 'xi-api-key': KEY } });
  if (!r.ok) throw new Error('GET /voices failed: ' + r.status);
  return (await r.json()).voices || [];
}
async function remainingCredits() {
  const r = await api('/user/subscription', { headers: { 'xi-api-key': KEY } });
  if (!r.ok) return null;
  const s = await r.json();
  return Math.max(0, (s.character_limit ?? 0) - (s.character_count ?? 0));
}
async function tts(voiceId, text) {
  const r = await api(`/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: { 'xi-api-key': KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, model_id: model, voice_settings: VOICE_SETTINGS }),
  });
  if (!r.ok) { const e = new Error('TTS ' + r.status); e.status = r.status; e.body = await r.text(); throw e; }
  return Buffer.from(await r.arrayBuffer());
}

// ── main ──
const allVoices = await listVoices();
const nameOf = id => (allVoices.find(v => v.voice_id === id) || {}).name || id;

if (flag('--list')) {
  console.log('\nVoices on your account:\n');
  for (const v of allVoices) {
    const labels = v.labels ? Object.values(v.labels).slice(0, 3).join(', ') : '';
    console.log(`  ${v.voice_id}   ${v.name}${labels ? '   (' + labels + ')' : ''}`);
  }
  console.log('\nThen estimate or generate, e.g.:');
  console.log('  node tools/generate-audio.mjs --estimate');
  console.log('  node tools/generate-audio.mjs --voice <voiceId>\n');
  process.exit(0);
}

const POSTS = loadPosts();

// Build the worklist (only paragraphs we actually need to make).
const work = [];
for (const voiceId of (voiceIds.length ? voiceIds : ['<voice>'])) {
  for (const post of POSTS) for (let i = 0; i < post.fr.length; i++) {
    const file = path.join(ROOT, 'audio', voiceId, post.id, `${i}.mp3`);
    if (voiceIds.length && fs.existsSync(file) && !force) continue;
    work.push({ voiceId, post, i, file, chars: post.fr[i].length });
  }
}
const perVoiceChars = POSTS.reduce((n, p) => n + p.fr.join('').length, 0);
const neededChars = voiceIds.length ? work.reduce((n, w) => n + w.chars, 0) : perVoiceChars * 1;
const neededCredits = Math.ceil(neededChars * rate);

console.log(`\nScope: ${POSTS.length} posts · ${POSTS.reduce((n,p)=>n+p.fr.length,0)} paragraphs · ${perVoiceChars} chars/voice`);
console.log(`Model: ${model} (~${rate} credit/char)`);

if (flag('--estimate') || !voiceIds.length) {
  const remaining = await remainingCredits();
  console.log(`\nEstimated cost for ${voiceIds.length || 1} voice(s): ~${neededCredits} credits` +
              (voiceIds.length ? ` (only the ${work.length} missing paragraphs)` : ` (all paragraphs, per voice)`));
  if (remaining != null) console.log(`Credits remaining on your account: ${remaining}`);
  if (!voiceIds.length) console.log('\n(No --voice given, so this was an estimate only. Add --voice <id> to generate.)');
  process.exit(0);
}

// Pre-flight: don't start a run we can't finish.
const remaining = await remainingCredits();
if (remaining != null) {
  console.log(`Credits remaining: ${remaining} · this run needs ~${neededCredits}`);
  if (neededCredits > remaining) {
    console.error(`\n✗ Not enough quota: need ~${neededCredits}, have ${remaining}.`);
    console.error(`  Options: wait for your monthly reset · upgrade your plan ·`);
    console.error(`           use --model eleven_flash_v2_5 (≈ half) · --latest 3 (fewer posts).`);
    process.exit(1);
  }
}

let made = 0;
try {
  for (const w of work) {
    fs.mkdirSync(path.dirname(w.file), { recursive: true });
    process.stdout.write(`  ${nameOf(w.voiceId)} · ${w.post.id} · ¶${w.i + 1} … `);
    fs.writeFileSync(w.file, await tts(w.voiceId, w.post.fr[w.i]));
    made++; console.log('ok');
  }
} catch (e) {
  console.log('FAILED');
  if (e.status === 401 && /quota/i.test(e.body || '')) {
    console.error(`\n✗ Out of ElevenLabs quota mid-run. ${made} file(s) written and kept.`);
    console.error(`  Re-run the SAME command later to resume — existing files are skipped.`);
    console.error(`  Or retry with --model eleven_flash_v2_5 / --latest 3 to fit a smaller budget.`);
    process.exit(1);
  }
  throw e;
}

// Only advertise voices to the page once their files are complete.
const voicesPath = path.join(ROOT, 'audio', 'voices.json');
const existing = fs.existsSync(voicesPath) ? JSON.parse(fs.readFileSync(voicesPath, 'utf8')) : [];
const merged = [...existing.filter(v => !voiceIds.includes(v.id)), ...voiceIds.map(id => ({ id, name: nameOf(id) }))];
fs.writeFileSync(voicesPath, JSON.stringify(merged, null, 2) + '\n');

console.log(`\n✓ Done. ${made} file(s) generated. Voices available to the page: ${merged.map(v => v.name).join(', ')}.`);
