/* Week 7 — Blidinje (Bosnie-Herzégovine). One self-contained post resource: article
   (fr/en), vocab, grammar notes, and map location. Registers itself with the engine.
   Change of mode: the rope is away, Felix just walks. Reflective register leans Bouvier
   (slow travel, ordinary people, time standing still) — see CLAUDE.md §2a. A2 throughout.
   Schema & escaping rules: see CLAUDE.md §6 and §8. */
FelixBlog.register({
  id:'blidinje', no:7, place:'Blidinje', country:'Bosnie-Herzégovine', flag:'🇧🇦',
  date:'le 21 juin 2026', lat:43.6333, lng:17.5167,
  title:'À pied sur le plateau de Blidinje', titleEn:'On foot across the Blidinje plateau',
  level:'mid A2',
  fr:[
    "Salut à tous ! J'ai quitté la côte croate et j'ai pris la route vers l'est, jusqu'en Bosnie-Herzégovine. Cette fois, pas de corde, pas de pagaie : juste mes chaussures et un grand sac. Je voulais marcher, plusieurs jours de suite, sans regarder l'heure. Je suis monté sur le plateau de Blidinje, entre deux montagnes, et là, le monde est devenu très simple : de l'herbe, des pierres, du vent, et le ciel.",
    "Pendant cinq jours, j'ai marché du matin au soir. Ici, on ne grimpe pas, on avance, et c'est très différent. Je partais tôt, quand l'herbe était encore mouillée, et je m'arrêtais souvent, pour rien : pour regarder un troupeau, ou juste pour écouter le silence. Au bout de quelques jours, je ne pensais plus à la fin du chemin. Je marchais, et ça suffisait.",
    "Sur le plateau, j'ai rencontré de vieux bergers. L'un d'eux, Mirko, m'a invité à boire un café près de ses moutons. On ne parlait pas la même langue, mais avec les mains et trois mots, on s'est compris. Il m'a donné du fromage de brebis et un morceau de pain, et il m'a dit qu'il avait toujours vécu là-haut. Cette rencontre m'a marqué autant qu'un sommet.",
    "Plus loin, j'ai trouvé un champ de stećci : de grandes pierres tombales du Moyen Âge, posées dans l'herbe depuis sept cents ans. Personne ne sait vraiment qui dort dessous. J'aime ces endroits où le temps semble s'arrêter. D'habitude, je ramasse un petit caillou dans chaque région ; ici, devant ces pierres, je n'ai rien pris. Certaines pierres, on les laisse où elles sont.",
    "La semaine prochaine, je continue vers l'est, vers le parc national de Sutjeska. Là-bas se trouvent la plus vieille forêt d'Europe et le plus haut sommet de Bosnie. Après tout ce calme, j'ai de nouveau envie de monter. À bientôt !"
  ],
  en:[
    "Hi everyone! I left the Croatian coast and took the road east, into Bosnia and Herzegovina. This time, no rope, no paddle: just my boots and a big pack. I wanted to walk, several days in a row, without watching the clock. I climbed up onto the Blidinje plateau, between two mountains, and there the world became very simple: grass, stones, wind, and the sky.",
    "For five days, I walked from morning to evening. Here you don't climb, you move forward, and it's very different. I set off early, when the grass was still wet, and I stopped often, for no reason: to watch a flock, or just to listen to the silence. After a few days, I stopped thinking about the end of the path. I walked, and that was enough.",
    "On the plateau, I met some old shepherds. One of them, Mirko, invited me to drink a coffee near his sheep. We didn't speak the same language, but with our hands and three words, we understood each other. He gave me some ewe's-milk cheese and a piece of bread, and he told me he had always lived up there. That meeting marked me as much as a summit.",
    "Further on, I found a field of stećci: large medieval gravestones, lying in the grass for seven hundred years. No one really knows who sleeps beneath them. I love these places where time seems to stop. Usually, I pick up a small pebble in each region; here, in front of these stones, I took nothing. Some stones, you leave where they are.",
    "Next week, I keep going east, to Sutjeska National Park. There stand the oldest forest in Europe and the highest peak in Bosnia. After all this calm, I feel like climbing again. See you soon!"
  ],
  vocab:[
    ['un plateau','a high plain, a plateau'],['un berger','a shepherd'],['un troupeau','a flock, a herd'],
    ['un mouton','a sheep'],['le fromage de brebis','ewe\'s-milk cheese'],['une pierre tombale','a gravestone'],
    ['le Moyen Âge','the Middle Ages'],['un caillou','a pebble'],['l\'herbe','grass'],
    ['avancer','to move forward', FelixBlog.verb('avancer',
      ["j'avance","tu avances","il/elle avance","nous avançons","vous avancez","ils/elles avancent"],
      ["j'ai avancé","tu as avancé","il/elle a avancé","nous avons avancé","vous avez avancé","ils/elles ont avancé"],
      ["j'avançais","tu avançais","il/elle avançait","nous avancions","vous avanciez","ils/elles avançaient"],
      ["j'avancerai","tu avanceras","il/elle avancera","nous avancerons","vous avancerez","ils/elles avanceront"])],
    ['mouillé','wet, damp'],
    ['suffire','to be enough', FelixBlog.verb('suffire',
      ["je suffis","tu suffis","il/elle suffit","nous suffisons","vous suffisez","ils/elles suffisent"],
      ["j'ai suffi","tu as suffi","il/elle a suffi","nous avons suffi","vous avez suffi","ils/elles ont suffi"],
      ["je suffisais","tu suffisais","il/elle suffisait","nous suffisions","vous suffisiez","ils/elles suffisaient"],
      ["je suffirai","tu suffiras","il/elle suffira","nous suffirons","vous suffirez","ils/elles suffiront"])]
  ],
  gram:[
    {h:'The keystone again: <em>passé composé</em> vs <em>imparfait</em>, on foot',
     p:'<b>Passé composé</b> drives the events of the week: <span class="ex">j\'ai quitté la côte</span>, <span class="ex">j\'ai rencontré de vieux bergers</span>, <span class="ex">on s\'est compris</span>. <b>Imparfait</b> paints the ongoing backdrop: <span class="ex">je partais tôt</span>, <span class="ex">l\'herbe était encore mouillée</span>, <span class="ex">on ne parlait pas la même langue</span>. The stretch one step further back: <span class="ex">il avait toujours vécu là</span> <span class="arrow">→</span> <em>plus-que-parfait</em> ("had always lived").'},
    {h:'<em>de</em> before a plural adjective — the old habit',
     p:'When a plural adjective comes <b>before</b> its noun, <em>des</em> turns into <em>de</em>: <span class="ex">de vieux bergers</span>, <span class="ex">de grandes pierres tombales</span>. You have met this since the Alps (<span class="ex">de grandes montagnes</span>) — here it is once more, so your ear keeps it.'},
    {h:'The relative pronoun <em>où</em> — not only "where"',
     p:'<em>où</em> links a noun to a place: <span class="ex">ces endroits où le temps semble s\'arrêter</span>, <span class="ex">on les laisse où elles sont</span>. It also works for time: <span class="ex">le jour où je suis arrivé</span> <span class="arrow">→</span> "the day when…". Same small word, place and time.'}
  ]
});
