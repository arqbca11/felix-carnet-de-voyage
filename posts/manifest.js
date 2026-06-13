/* ─────────────────────────────────────────────────────────────────────────
   Felix · Carnet de voyage — POST MANIFEST
   This is the index of all weekly posts, in CHRONOLOGICAL order (oldest → newest).
   The blog shows the LATEST THREE entries = the last three lines of this list.
   The calendar widget reads `date` (ISO yyyy-mm-dd, same day as the post's French
   `date:` field) to show "the latest three articles up to a chosen day".

   To publish a new week:
     1. Add posts/NN-slug.js  (copy an existing one, edit the data — see schema there)
     2. Append ONE line to the array below, at the bottom (newest last) — include `date`.
   Nothing else to touch — the template loads the latest three automatically.
   ───────────────────────────────────────────────────────────────────────── */
window.FELIX_MANIFEST = [
  { id:'chamonix',  file:'posts/01-chamonix.js',  date:'2026-05-10' },
  { id:'dolomites', file:'posts/02-dolomites.js', date:'2026-05-17' },
  { id:'soca',      file:'posts/03-soca.js',      date:'2026-05-24' },
  { id:'piran',     file:'posts/04-piran.js',     date:'2026-05-31' },
  { id:'istrie',    file:'posts/05-istrie.js',    date:'2026-06-07' },
  { id:'paklenica', file:'posts/06-paklenica.js', date:'2026-06-14' },
  { id:'blidinje',  file:'posts/07-blidinje.js',  date:'2026-06-21' },
  { id:'sutjeska',  file:'posts/08-sutjeska.js',  date:'2026-06-28' },
  { id:'lofoten',   file:'posts/09-lofoten.js',   date:'2026-07-05' },
  { id:'abisko',    file:'posts/10-abisko.js',    date:'2026-07-12' },
  { id:'dalsland',  file:'posts/11-dalsland.js',  date:'2026-07-19' },
];
