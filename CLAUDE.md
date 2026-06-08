# CLAUDE.md — Felix · Carnet de voyage

A single-file French-learning web app: a fictional travel blog by **Felix**, read for
comprehensible input. Each weekly post is French text + English translation + vocab/grammar
notes, with an interactive map and text-to-speech. `felix_blog.html` is an engine-only **template**;
each week's content lives in its own `posts/NN-slug.js` resource file, indexed by `posts/manifest.js`.
The page shows the **latest three** weeks. No build step — open the HTML directly (see §5).

> Built for a learner targeting **TCF Canada (CLB 7 / B2)**, currently around **A2**, who learns
> by high-volume varied input. French goes in the *examples*; explanations stay in English.
> Keep explanations concise, no over-explaining, no condescension.

---

## 1. Golden rules (these were learned the hard way — don't regress)

1. **Felix is an experienced outdoorsperson, NOT a beginner tourist.** He does multi-day ski
   touring, leads real multi-pitch rock, joins real whitewater trips. Competence is the baseline.
   Never write him as scared, hesitant, or "daring" to do basic things.
2. **No "new dream every week" formula.** Don't end posts with a bucket-list line. End by turning
   toward the next place (motion, not a checklist). Aspirations can appear, rarely and naturally.
3. **Each post covers a whole WEEK**, not one day. Multi-day activities, routines, several scenes.
   Never a "morning → noon → evening → tomorrow" single-day diary.
4. **Real travel-blog voice, not a children's book.** Concrete, specific detail: named peaks,
   real trails, actual food, named people with personality. Opinions, humor, a point of view.
5. **Realistic geography & pacing.** Stops are a few hours apart, overland, seasonally plausible.
   No teleporting across the continent in a week. Felix references the travel between stops.
6. **Level = solid A2** with occasional natural B1 touches embedded transparently (one "stretch"
   element per post is fine, left for the reader to infer — don't over-gloss it).
7. **Reinforce grammar across posts** (the puzzle-piece effect): reuse key patterns in fresh
   contexts so recognition fires. The keystone is *passé composé vs imparfait*.

---

## 2. Felix — character bible (keep consistent)

- British-born, French-raised; bilingual FR/EN. Early 20s. Has the funds to travel freely.
- His **French mother** is from the Chamonix area; he spent childhood summers there.
- His **grandfather** taught him the mountains (skis, hiking). Now Felix is the strong one —
  grandfather is the *origin* of his skill and shows up as warm memory, never as a crutch.
  His line: *« La peur, ça se respecte, mais ça ne décide pas pour toi. »*
- **Skills:** strong ski tourer (glacier travel, roped, reads snow/conditions), experienced rock
  climber since his teens (multi-pitch, places protection, calm with exposure), experienced
  paddler (has rafted in France and Nepal).
- **Voice:** loves the uphill and the silence; at home on rock; sociable with locals; self-aware
  humor (his Italian is *catastrophique*; "tu pagaies bien pour un Anglais"); a touch reflective.
- **Light recurring threads** (use naturally, NOT every post): collects a small stone from places;
  the grandfather memory. Don't make these formulaic.

### 2a. Reflective register — literary sensibility (flavor, not pastiche)

Felix's *reflective* sentences should quietly draw on two travel writers. This shapes **what he
notices**, not how fancy his French is. The French stays **A2** (short-to-medium sentences,
transparent vocabulary); the sensibility lives in the observation, not the syntax.

- **Nicolas Bouvier** (*L'Usage du monde*) — slow travel; you don't master a journey, it works on
  you (*« on croit qu'on va faire un voyage, mais bientôt c'est le voyage qui vous fait »*). Ordinary
  people and small moments over monuments; unhurried, curious, humane. Use for **why Felix lingers**:
  a café conversation or a guide's story can matter as much as a summit. Especially the slower
  coastal posts.
- **Antoine de Saint-Exupéry** (*Terre des hommes*) — meaning through effort, solitude, and
  comradeship; hardship and the bond between people who share risk reveal what matters; the land
  tests and shapes you. Cleaner, more classical, more rhythmic than Bouvier. Use for the **quiet
  pride after a hard day**, the **wordless understanding** among mountain/river people, landscape as
  something that teaches him about himself.

**Guardrails (do not break):**
1. **One or two reflective sentences per post, max** — always **earned by a concrete scene**, never
   floating philosophy.
2. **Stay Felix:** experienced, understated, a touch dry. No purple prose, no aphorism-dumping, and
   **never quote these authors** directly or name them.
3. **Reinforce, don't replace** the established threads (grandfather, competence, motion toward the
   next place). The sensibility deepens those; it isn't a new gimmick.
4. **Still A2.** If a reflective line needs "fancier" French to work, it's the wrong line — find the
   plainer sentence that carries the same noticing.

---

## 3. Itinerary log (continuity — keep it plausible & overland)

| # | Week | Place | Country | Activity | Coords (lat,lng) |
|---|------|-------|---------|----------|------------------|
| 1 | 10 May 2026 | Chamonix | France 🇫🇷 | 3-day spring ski-touring traverse, hut-to-hut on glaciers | 45.9237, 6.8694 |
| 2 | 17 May 2026 | Les Dolomites (Cortina / Cima Grande) | Italie 🇮🇹 | Multi-pitch rock climb w/ old friend Marco | 46.5369, 12.1357 |
| 3 | 24 May 2026 | Vallée de la Soča (Bovec / Kobarid) | Slovénie 🇸🇮 | Whitewater rafting w/ guide Anže | 46.3375, 13.5526 |
| 4 | 31 May 2026 | Piran | Slovénie 🇸🇮 | Sea kayaking the Adriatic coast; old town + salt pans | 45.5288, 13.5683 |
| 5 | 7 Jun 2026 | Istrie (Poreč → Motovun → Pula / Cap Kamenjak) | Croatie 🇭🇷 | Parenzana cycle path through the hills + sea kayaking the wild south coast | 45.0811, 13.6387 |
| 6 | 14 Jun 2026 | Paklenica (Velebit / Anića Kuk, nr Starigrad) | Croatie 🇭🇷 | Multi-pitch rock on the big wall Anića Kuk w/ Ivana; sport routes; the *bura* wind | 44.3346, 15.4622 |

**Recurring side characters:** Marco (Italian mountain guide, ~50, old friend, equal climber);
Anže (Slovenian rafting guide); Damjan (Piran fisherman); Davor (Istrian truffle hunter, calm, two dogs);
Ivana (Croatian climber, knows the Paklenica walls by heart, leads Anića Kuk).

**Next, teased:** east into **Bosnia** — and a change of mode: Felix puts the rope away to **walk**
several days (a multi-day trek; slow-travel, Bouvier register). Keep the overland hop east realistic.
First post to fold in the §2a reflective sensibility (Saint-Exupéry on the rope; the wordless summit).

---

## 4. Grammar arc (the engine)

Keystone running through every post: **passé composé (events) vs imparfait (backdrop / habitual /
description)**. Layer other A2/B1 points on top, tied to that week's content, and reuse across weeks:

- Recurring micro-pattern: **`de` before a plural adjective** (`de grandes montagnes`, `d'immenses
  tours`, `de petits villages`, `de terribles batailles`) — seed it repeatedly.
- Covered so far: `aller`+inf (near future), reflexive verbs, `c'est…qui / c'est…que`, time/sequence
  signposts, `pendant`, superlative, `même si`, `si…que`, comparatives, verb+infinitive glue words,
  `il y a` = there is **and** "ago", `depuis`+present, être-verb agreement, the **gérondif** (`en riant`),
  `il faut`+inf / imperative, `avant de`+inf, `ne…que` (only), `ne…plus` (no longer), and the
  past participle agreeing with a **preceding direct object** (`on les a mangées`). Stretch seeds left
  transparent: `plus-que-parfait` (`avait préparé`, `avait déjà grimpé`), `conditionnel passé`
  (`aurait adoré`).
- **3 grammar notes per post**, English explanation + French examples wrapped in
  `<span class="ex">…</span>`, with `<span class="arrow">→</span>` for glosses.

---

## 5. Technical architecture

- **Template + resource files.** `felix_blog.html` is an **engine-only template** (CSS, the TTS/map
  JS, DOM-building) — it carries **no article content**. Each week lives in its own resource file:
  - `posts/manifest.js` — the index: `window.FELIX_MANIFEST`, an array of `{id, file}` in
    **chronological order** (oldest → newest). The blog shows the **latest three** = the last three
    entries (`HOW_MANY = 3` in the template; `manifest.slice(-HOW_MANY)`).
  - `posts/NN-slug.js` — one self-contained week: article (`fr`/`en`), `vocab`, `gram`, and map
    location (`lat`/`lng`). Each file calls `FelixBlog.register({...})` to add itself to `POSTS`.
- **No build step; opens directly via `file://`.** Posts load through **dynamically injected
  `<script>` tags** (`loadPosts()`), NOT `fetch()` — `fetch` of local JSON is CORS-blocked on
  `file://`, script tags are not. The manifest is loaded by a static `<script src>` in the head.
- **Load order is async**, so registered posts are sorted by `no` before rendering; `buildFeed()` and
  `initMap()` run only after the latest-three scripts settle. Both feed and map reflect the **same
  three** posts (route line + markers included), so they stay in sync.
- **Fonts (Google):** `Schibsted Grotesk` (UI, headings) + `Newsreader` (French reading body & titles).
- **Map:** Leaflet 1.9.4 from cdnjs, OpenStreetMap tiles. Numbered teardrop pin markers + dashed
  polyline route in the accent color; `fitBounds` on load. Active post ↔ marker highlight sync.
- **TTS:** ElevenLabs. `model_id: 'eleven_multilingual_v2'`, `voice_settings {stability:.5,
  similarity_boost:.75}`. Per-paragraph play buttons + a "Lire l'article" sequential reader that
  auto-advances and highlights the current paragraph. Voice picker (with previews), speed cycle
  `[0.75, 0.9, 1.0, 1.1]`, in-memory `AUDIO_CACHE` keyed `voiceId|text`, background prefetch of the
  next paragraph. **Browser `speechSynthesis` fallback** when no key. Key/voice/speed in `localStorage`.
- **Everything is data-driven from the `POSTS` array** (filled by registration). DOM is built in JS.
  Events via delegation on `#feed` (`data-play`, `data-toggle`, `data-fly`). **No inline `onclick`
  carrying French text.**

### Layout
- Masthead (white, faint topographic SVG lines) → **reading bar** (TTS controls / key entry / voice
  picker) → `.layout` grid.
- `.layout` = `[feed (min 0,1fr)] [map-rail 320px]`, gap 36, centered max-width 1340.
- **Map rail** = a single big sticky box, `height: calc(100vh - 130px)` (max 760, min 500).
- **Posts** are single-column by default. Opening **Traduction** or **Notes** adds `.split` →
  two columns: **French left, EN/notes right**, sharing a full-width header so paragraphs align.
- **Mobile (`max-width:1024px`):** single column; post-side stacks under the article; map becomes a
  full-screen overlay toggled by a floating "🗺 La carte" button.

### Design tokens (`:root`)
```
--bg:#ffffff  --wash:#f6f7f6  --surface:#ffffff
--ink:#15171a  --ink-soft:#3f444b  --muted:#8b9198
--line:#ebece9  --line-2:#dfe1dd
--accent:#1a73ff  --accent-deep:#0b51c9  --accent-wash:#e8f0ff   /* bright blue */
```
Accent literals also appear (keep in sync): polyline `#1a73ff`; shadows `rgba(26,115,255,…)`.

---

## 6. Post resource-file schema (`posts/NN-slug.js`)

One file per week. It registers a single post object (same fields as before):

```js
FelixBlog.register({
  id:'soca',                       // unique slug, used for element IDs + manifest
  no:3,                            // stop number (marker label + meta; also the render sort key)
  place:'Vallée de la Soča',
  country:'Slovénie', flag:'🇸🇮',
  date:'le 24 mai 2026',
  lat:46.3375, lng:13.5526,
  title:'Rafting sur la Soča', titleEn:'Rafting on the Soča',
  fr:[ "...", ... ],               // ~5 paragraphs, ~280–320 words total, solid A2
  en:[ "...", ... ],               // 1:1 paragraph translation (same length array)
  vocab:[ ['mot fr','english gloss'], ... ],   // ~12 entries
  gram:[ {h:'Heading <em>...</em>', p:'Explanation w/ <span class="ex">…</span>'}, ... ] // 3 notes
});
```

And one line in `posts/manifest.js` (chronological, newest last):

```js
{ id:'soca', file:'posts/03-soca.js' },
```

---

## 7. How to add a new week

1. Create `posts/NN-slug.js` (copy the previous week's file) and edit the registered object to
   follow the schema in §6. Match the **golden rules** (§1), keep Felix consistent (§2), and use a
   realistic next stop from §3. Give it the next `no`.
2. Append **one line** to `posts/manifest.js`, at the **bottom** (newest last) — this is what makes
   it one of the latest three shown. Adding a 5th week automatically drops the oldest (week 1) off
   the page; nothing in `felix_blog.html` needs editing.
3. `fr` and `en` arrays must be the **same length** (paragraphs align side by side). Write `vocab`
   (~12) and exactly **3 `gram` notes** tied to that week's text; reinforce the keystone and at least
   one recurring micro-pattern.
4. Run the validation in §10. That's it — the map marker, route line, fly-to, play buttons,
   translation/notes toggles, and layout all generate from the data automatically.

---

## 8. String-escaping gotchas (apostrophes WILL silently break the script)

- `fr` / `en` paragraph strings: use **double quotes** → French apostrophes (`l'eau`, `j'ai`) are safe.
- `vocab` values: double-quote-safe; but a **French key** containing an apostrophe (e.g.
  `tomber à l'eau`) is in a single-quoted array slot → escape it: `'tomber à l\'eau'`.
- `gram` `h` and `p`: **single-quoted** JS strings containing HTML. **Escape every apostrophe** as
  `\'` — both English contractions (`don\'t`, `it\'s`, `there\'s`) and French elisions (`j\'ai`,
  `c\'est`, `l\'altitude`). Use `"double quotes"` inside for quoted English phrases.
- **Never** put French text into an inline `onclick`. Build handlers in JS / use `data-*` attributes.

## 9. Other gotchas

- `localStorage` works in the **downloaded/local** file but may not persist inside a chat preview.
  All access goes through `getLS/setLS` wrapped in `try/catch` — keep it that way.
- Call `map.invalidateSize()` after the map container changes size: after opening the mobile
  overlay, after a fly-to, and on `resize`. (Already wired.)
- OSM tiles load in the user's browser fine; the deliverable is meant to be opened locally — which is
  why posts load via injected `<script>` tags, not `fetch()` (see §5). Keep it that way.
- The `posts/*.js` files are **plain scripts**, not modules — no `import`/`export`, just the
  `FelixBlog.register(...)` call. The registry (`window.FelixBlog`) is defined in the template before
  `loadPosts()` injects any post, so registration always has something to call.

## 10. Build / validate workflow

```bash
# 1) syntax-check the template engine (extract its inline <script>) + every resource file
python3 -c "import re;open('check.js','w').write(re.findall(r'<script>(.*?)</script>',open('felix_blog.html').read(),re.S)[-1])"
node --check check.js && rm check.js && echo "TEMPLATE OK"
for f in posts/manifest.js posts/*.js; do node --check "$f" && echo "  $f OK"; done

# 2) data check: register all posts in a sandbox, assert fr/en align, 3 gram notes, coords present,
#    and print which three weeks would display
node -e '
const fs=require("fs"),vm=require("vm");
const POSTS=[],sb={window:{},console,FelixBlog:{register:p=>POSTS.push(p)}};sb.window.FelixBlog=sb.FelixBlog;
vm.createContext(sb);vm.runInContext(fs.readFileSync("posts/manifest.js","utf8"),sb);
const M=sb.window.FELIX_MANIFEST;M.forEach(e=>vm.runInContext(fs.readFileSync(e.file,"utf8"),sb));
let bad=0;POSTS.forEach(p=>{if(p.fr.length!==p.en.length){console.log("FR/EN MISMATCH",p.id);bad++;}
 if(p.gram.length!==3){console.log("GRAM!=3",p.id);bad++;}
 if(typeof p.lat!=="number"||typeof p.lng!=="number"){console.log("BAD COORDS",p.id);bad++;}});
console.log("Latest three displayed:",M.slice(-3).map(e=>e.id).join(", "));
console.log(bad?("FAILURES: "+bad):"ALL DATA CHECKS PASS");'
```
Always run this after editing a post or the manifest. If `node --check` fails, it's almost always an
unescaped apostrophe in a `gram` string (§8).
