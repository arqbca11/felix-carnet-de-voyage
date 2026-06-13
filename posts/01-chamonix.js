/* Week 1 — Chamonix. One self-contained post resource: article (fr/en),
   vocab, grammar notes, and map location. Registers itself with the blog engine.
   Schema & escaping rules: see CLAUDE.md §6 and §8. */
FelixBlog.register({
  id:'chamonix', no:1, place:'Chamonix', country:'France', flag:'🇫🇷',
  date:'le 10 mai 2026', lat:45.9237, lng:6.8694,
  title:'Trois jours sur les glaciers', titleEn:'Three days on the glaciers',
  level:'mid A2',
  fr:[
    "Ça y est, je suis parti ! Pour commencer mon voyage, je voulais un endroit qui compte vraiment pour moi : Chamonix. Ma mère est née ici, et c'est mon grand-père qui m'a mis des skis aux pieds, il y a vingt ans. Aujourd'hui, je connais ces montagnes presque par cœur.",
    "En mai, la neige de printemps est parfaite pour le ski de randonnée. J'ai donc fait une traversée de trois jours, de refuge en refuge, sur les glaciers au-dessus de la vallée. Chaque matin, je collais les peaux sous mes skis et je montais pendant des heures, dans le silence total. Sur le glacier, on était encordés, parce qu'il y a des crevasses cachées sous la neige.",
    "Le deuxième jour, vers midi, la pente est devenue raide et glacée. Un skieur de notre groupe a glissé, mais il s'est arrêté tout seul, sans problème. Ce genre de moment, il faut rester calme et continuer. La récompense arrive après : une descente de mille mètres dans une neige douce, sous un grand soleil. Difficile de décrire ce bonheur.",
    "Le soir, au refuge, on mangeait de la soupe et on parlait de nos montagnes préférées. J'aime ces gens : ils ne parlent pas beaucoup, mais ils comprennent. Mon grand-père aurait adoré cette ambiance.",
    "Demain, je range les skis et je pars vers l'Italie — vers le rocher, cette fois. J'ai déjà les doigts qui démangent. À bientôt !"
  ],
  en:[
    "That's it — I've set off! To start my trip, I wanted a place that truly matters to me: Chamonix. My mother was born here, and it was my grandfather who first put skis on my feet, twenty years ago. Today I know these mountains almost by heart.",
    "In May, the spring snow is perfect for ski touring. So I did a three-day traverse, hut to hut, across the glaciers above the valley. Every morning I stuck the skins under my skis and climbed for hours, in total silence. On the glacier we were roped up, because there are hidden crevasses under the snow.",
    "On the second day, around noon, the slope turned steep and icy. A skier in our group slipped, but stopped himself on his own, no problem. In a moment like that, you stay calm and keep going. The reward comes after: a thousand-metre descent through soft snow, under a big sun. Hard to describe that happiness.",
    "In the evening, at the hut, we ate soup and talked about our favourite mountains. I like these people: they don't say much, but they understand. My grandfather would have loved that atmosphere.",
    "Tomorrow I put the skis away and head for Italy — for the rock this time. My fingers are already itching. See you soon!"
  ],
  vocab:[
    ['le ski de randonnée','ski touring'],['les peaux','climbing skins'],['une crevasse','a crevasse'],
    ['encordé(e)','roped up'],['un glacier','a glacier'],['un refuge','a mountain hut'],
    ['une pente','a slope'],['raide','steep'],
    ['glisser','to slip, to slide', FelixBlog.verb('glisser',
      ["je glisse","tu glisses","il/elle glisse","nous glissons","vous glissez","ils/elles glissent"],
      ["j'ai glissé","tu as glissé","il/elle a glissé","nous avons glissé","vous avez glissé","ils/elles ont glissé"],
      ["je glissais","tu glissais","il/elle glissait","nous glissions","vous glissiez","ils/elles glissaient"],
      ["je glisserai","tu glisseras","il/elle glissera","nous glisserons","vous glisserez","ils/elles glisseront"])],
    ['une descente','a descent'],['une récompense','a reward'],['par cœur','by heart']
  ],
  gram:[
    {h:'Past tense: <em>passé composé</em> vs <em>imparfait</em>',
     p:'The A2 keystone. <b>Imparfait</b> = the running backdrop, repeated or ongoing: <span class="ex">chaque matin, je collais les peaux et je montais</span>, <span class="ex">on était encordés</span>, <span class="ex">on mangeait de la soupe</span>. <b>Passé composé</b> = events that happen once and move things along: <span class="ex">j\'ai fait une traversée de trois jours</span>, <span class="ex">la pente est devenue raide</span>, <span class="ex">un skieur a glissé</span>. Backdrop vs. event.'},
    {h:'Spotlighting: <em>c\'est … qui</em> / <em>c\'est … que</em>',
     p:'Put a spotlight on one word. Use <em>qui</em> when it is the <b>doer</b>: <span class="ex">c\'est mon grand-père qui m\'a mis des skis aux pieds</span> (it was my grandfather who…). Use <em>que</em> when it is <b>not</b> the doer: <span class="ex">c\'est ici que ma mère est née</span> (it\'s here that my mother was born).'},
    {h:'<em>il y a</em> = "ago" (+ a "would have")',
     p:'You know <em>il y a</em> = there is / are. With a length of time it also means "ago": <span class="ex">il y a vingt ans</span> <span class="arrow">→</span> twenty years ago. Bonus to notice (not to drill): <span class="ex">mon grand-père aurait adoré</span> = "would have loved" — the <em>conditionnel passé</em>, for things that never happened.'}
  ]
});
