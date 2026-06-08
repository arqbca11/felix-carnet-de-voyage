# Felix — Carnet de voyage 🏔️

### 👉 Read it live: **https://arqbca11.github.io/felix-carnet-de-voyage/**

A French-learning travel blog you read for **comprehensible input**. Follow **Felix**, a British-born,
French-raised outdoorsperson, week by week as he ski-tours, climbs, and paddles his way across Europe —
each post in natural French, with an English translation, vocabulary, grammar notes, an interactive map,
and read-aloud audio.

Built for a learner heading toward **TCF Canada (B2)**, but useful for anyone around **A2–B1** who
learns by reading and listening to lots of varied, real material.

---

## ✨ What you get

- **A weekly post in French** — a real travel-blog voice, not textbook sentences. Named peaks, real
  trails, actual food, people with personality.
- **Side-by-side English** — tap **Traduction (EN)** and the post splits into two columns, French left,
  English right, paragraph-aligned.
- **Vocabulary & grammar notes** — tap **Notes de français** for ~12 key words and 3 focused grammar
  notes tied to that week's text. The running theme is the A2 keystone: *passé composé* vs *imparfait*.
- **Read aloud** — a play button on every paragraph, plus **▶ Lire l'article** to play the whole post
  with the current line highlighted as it's spoken. Adjustable speed.
- **Interactive map** — every stop is a numbered pin joined by the travel route. Click a pin to jump to
  its post; tap **Voir sur la carte** to fly the map to a post's location.
- **The latest three weeks** are shown, newest journey first.

---

## 🚀 Getting started

No installation, no build step, no server.

1. **Download** this project (green **Code → Download ZIP** on GitHub, then unzip — or `git clone`).
2. **Double-click `felix_blog.html`** to open it in any modern browser.

That's it. The map and reading work straight away.

> **Tip:** keep the `posts/` folder next to `felix_blog.html` — that's where the articles live.

### Optional: nicer voices 🎙️

Out of the box, audio uses your **browser's built-in French voice** — no setup needed. For more
natural, expressive narration you can connect a free [ElevenLabs](https://elevenlabs.io) API key:

1. Click **Connecter ElevenLabs** in the reading bar at the top.
2. Paste your API key and hit **Connecter**.
3. Pick a voice with **Changer de voix** (each has a preview button).

Your key stays **in your browser only** (`localStorage`) — it's never uploaded anywhere except directly
to ElevenLabs to generate the audio.

---

## 🗺️ The journey so far

| # | Week | Place | Activity |
|---|------|-------|----------|
| 1 | 10 May 2026 | Chamonix 🇫🇷 | Three-day spring ski-touring traverse on the glaciers |
| 2 | 17 May 2026 | Les Dolomites 🇮🇹 | Multi-pitch rock climb on the Cima Grande |
| 3 | 24 May 2026 | Vallée de la Soča 🇸🇮 | Whitewater rafting |
| 4 | 31 May 2026 | Piran 🇸🇮 | Sea kayaking on the Adriatic coast |

*The page always shows the most recent three weeks.*

---

## ➕ Adding a new week

Each week is a small, self-contained file — you don't touch the main HTML.

1. Copy the most recent file in `posts/` (e.g. `posts/04-piran.js`) to `posts/05-yourslug.js` and edit
   the content: the French paragraphs (`fr`), English translation (`en`), `vocab`, `gram` notes, and the
   map coordinates (`lat`/`lng`).
2. Add one line to `posts/manifest.js`, at the **bottom** (newest last):
   ```js
   { id:'yourslug', file:'posts/05-yourslug.js' },
   ```
3. Reopen `felix_blog.html`. The new week appears automatically — and the oldest week rolls off the
   page, so the latest three are always shown.

The map pins, route line, audio buttons, and translation/notes toggles all generate themselves from
your post data. Full schema and authoring notes are in [`CLAUDE.md`](CLAUDE.md).

---

## 📁 Project structure

```
felix_blog.html      The app — open this. Engine only: layout, map, audio, reading UI.
posts/
  manifest.js        Index of all weeks, oldest → newest. The last three are displayed.
  01-chamonix.js     One file per week: article + translation + vocab + grammar + map location.
  02-dolomites.js
  03-soca.js
  04-piran.js
CLAUDE.md            Author/maintainer guide (writing style, character bible, data schema).
```

The content is kept in separate resource files so the writing stays easy to edit, while
`felix_blog.html` stays a stable template. Posts load with plain `<script>` tags, which is why the
whole thing works when you just open the file locally — no web server required.

---

## 🛠️ Built with

- [Leaflet](https://leafletjs.com/) + [OpenStreetMap](https://www.openstreetmap.org/) for the map
- [ElevenLabs](https://elevenlabs.io) text-to-speech (with the browser's `speechSynthesis` as fallback)
- Google Fonts — *Schibsted Grotesk* & *Newsreader*
- Plain HTML, CSS, and JavaScript. No frameworks, no build tooling.

---

*Un projet pour apprendre le français · à suivre…*
