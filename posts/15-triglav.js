/* Week 15 — Le Triglav (Alpes juliennes, Slovénie). One self-contained post resource:
   article (fr/en), vocab, grammar notes, map location. Registers itself with the engine.
   Felix comes overland from Austria back into Slovenia, a country he already loves (Soča,
   Piran earlier in the trip), and climbs Triglav (2864 m) — the cabled summit ridge with
   iron pegs, a night in a busy hut, and the saying that you are only truly Slovene once
   you've stood up there. Local character: Jure. One earned reflective beat. Grammar focus:
   pronouns Y/EN and DEVOIR vs IL FAUT, plus the keystone, a future note, the de+plural seed.
   Every VERB entry carries FelixBlog.verb(...). Escaping: CLAUDE.md §8. */
FelixBlog.register({
  id:'triglav', no:15, place:'Le Triglav (Alpes juliennes)', country:'Slovénie', flag:'🇸🇮',
  date:'le 16 août 2026', lat:46.3786, lng:13.8369,
  title:'Au sommet du Triglav', titleEn:'On the summit of Triglav',
  level:'mid A2',
  fr:[
    "Salut à tous ! Je suis passé d'Autriche en Slovénie par la route, et tout de suite je me suis senti chez moi. J'avais déjà pagayé sur la Soča et marché dans les ruelles de Piran ; revenir ici, c'était comme retrouver un vieil ami. Cette fois, je venais pour le Triglav, le plus haut sommet du pays. Il est sur le drapeau, et les Slovènes en parlent souvent, avec fierté.",
    "À la vallée, j'ai rencontré Jure. Il a monté le Triglav je ne sais combien de fois, et il connaît chaque sentier par cœur. « Tu sais, m'a-t-il dit en riant, on n'est vraiment slovène qu'après être monté là-haut. » Je lui ai répondu que je n'étais pas slovène. Il a souri : « Pour un Anglais, on fera une exception. » On a bien ri, et on est partis ensemble le lendemain matin.",
    "La montée est longue, et il y a beaucoup de monde sur les sentiers ; en août, tout le pays semble vouloir y monter. On a dormi dans un refuge plein à craquer, sous le sommet. Le soir, on a partagé une soupe et de petites histoires de montagne avec des inconnus. Il faisait froid dehors, mais dedans tout le monde riait.",
    "Le dernier jour, on attaque l'arête. C'est une crête étroite, équipée de câbles et de pieux de fer. On doit s'encorder et faire attention, car la pente tombe des deux côtés. Le rocher ne me fait pas peur, mais ici il faut rester humble : un pas après l'autre, la main sur le câble. Au sommet, le vent était vif. Jure n'a rien dit ; il m'a juste serré l'épaule, et ça suffisait.",
    "On est redescendus lentement, les jambes lourdes et le cœur léger. Demain, je repartirai vers le sud. Les grandes montagnes des Balkans m'attendent — le Durmitor, que j'avais laissé de côté il y a des semaines. J'y pense souvent depuis. La route descend enfin dans la bonne direction. À bientôt !"
  ],
  en:[
    "Hi everyone! I crossed from Austria into Slovenia by road, and right away I felt at home. I had already paddled on the Soča and walked the lanes of Piran; coming back here was like meeting an old friend again. This time I'd come for Triglav, the country's highest peak. It's on the flag, and Slovenes talk about it often, with pride.",
    "Down in the valley, I met Jure. He has climbed Triglav I-don't-know-how-many times, and he knows every trail by heart. «You know», he told me, laughing, «you're only truly Slovene once you've been up there.» I answered that I wasn't Slovene. He smiled: «For an Englishman, we'll make an exception.» We had a good laugh, and we set off together the next morning.",
    "The climb is long, and there are a lot of people on the trails; in August the whole country seems to want to go up there. We slept in a hut packed to bursting, just below the summit. In the evening we shared a soup and small mountain stories with strangers. It was cold outside, but inside everyone was laughing.",
    "On the last day, we take on the ridge. It's a narrow crest, fitted with cables and iron pegs. You have to rope up and pay attention, because the slope drops away on both sides. The rock doesn't scare me, but here you have to stay humble: one step after another, hand on the cable. At the summit the wind was sharp. Jure said nothing; he just squeezed my shoulder, and that was enough.",
    "We came back down slowly, legs heavy and heart light. Tomorrow, I'll set off south again. The big mountains of the Balkans are waiting for me — Durmitor, which I'd set aside weeks ago. I've thought about it often since. The road is finally heading in the right direction. See you soon!"
  ],
  vocab:[
    ['un sommet','a summit, a peak'],['une arête','a ridge, an arête'],
    ['une crête','a crest (the top edge of a ridge)'],['un câble','a cable'],
    ['un pieu','a peg, a stake (pl. des pieux)'],['une pente','a slope'],
    ['un refuge','a mountain hut'],['un drapeau','a flag'],
    ['la fierté','pride'],['vif / vive','sharp, keen, brisk'],
    ['humble','humble'],['plein à craquer','packed to bursting'],
    ['un sentier','a trail, a path'],['par cœur','by heart'],
    ['s\'encorder','to rope up', FelixBlog.verb('s\'encorder',
      ["je m'encorde","tu t'encordes","il/elle s'encorde","nous nous encordons","vous vous encordez","ils/elles s'encordent"],
      ["je me suis encordé(e)","tu t'es encordé(e)","il/elle s'est encordé(e)","nous nous sommes encordé(e)s","vous vous êtes encordé(e)(s)","ils/elles se sont encordé(e)s"],
      ["je m'encordais","tu t'encordais","il/elle s'encordait","nous nous encordions","vous vous encordiez","ils/elles s'encordaient"],
      ["je m'encorderai","tu t'encorderas","il/elle s'encordera","nous nous encorderons","vous vous encorderez","ils/elles s'encorderont"])],
    ['monter','to go up, to climb', FelixBlog.verb('monter',
      ["je monte","tu montes","il/elle monte","nous montons","vous montez","ils/elles montent"],
      ["je suis monté(e)","tu es monté(e)","il/elle est monté(e)","nous sommes monté(e)s","vous êtes monté(e)(s)","ils/elles sont monté(e)s"],
      ["je montais","tu montais","il/elle montait","nous montions","vous montiez","ils/elles montaient"],
      ["je monterai","tu monteras","il/elle montera","nous monterons","vous monterez","ils/elles monteront"])],
    ['redescendre','to go back down', FelixBlog.verb('redescendre',
      ["je redescends","tu redescends","il/elle redescend","nous redescendons","vous redescendez","ils/elles redescendent"],
      ["je suis redescendu(e)","tu es redescendu(e)","il/elle est redescendu(e)","nous sommes redescendu(e)s","vous êtes redescendu(e)(s)","ils/elles sont redescendu(e)s"],
      ["je redescendais","tu redescendais","il/elle redescendait","nous redescendions","vous redescendiez","ils/elles redescendaient"],
      ["je redescendrai","tu redescendras","il/elle redescendra","nous redescendrons","vous redescendrez","ils/elles redescendront"])],
    ['partager','to share', FelixBlog.verb('partager',
      ["je partage","tu partages","il/elle partage","nous partageons","vous partagez","ils/elles partagent"],
      ["j'ai partagé","tu as partagé","il/elle a partagé","nous avons partagé","vous avez partagé","ils/elles ont partagé"],
      ["je partageais","tu partageais","il/elle partageait","nous partagions","vous partagiez","ils/elles partageaient"],
      ["je partagerai","tu partageras","il/elle partagera","nous partagerons","vous partagerez","ils/elles partageront"])],
    ['attendre','to wait (for)', FelixBlog.verb('attendre',
      ["j'attends","tu attends","il/elle attend","nous attendons","vous attendez","ils/elles attendent"],
      ["j'ai attendu","tu as attendu","il/elle a attendu","nous avons attendu","vous avez attendu","ils/elles ont attendu"],
      ["j'attendais","tu attendais","il/elle attendait","nous attendions","vous attendiez","ils/elles attendaient"],
      ["j'attendrai","tu attendras","il/elle attendra","nous attendrons","vous attendrez","ils/elles attendront"])]
  ],
  gram:[
    {h:'The keystone: <em>passé composé</em> vs <em>imparfait</em>',
     p:'<b>Passé composé</b> for the events of the week: <span class="ex">j\'ai rencontré Jure</span>, <span class="ex">on a dormi dans un refuge</span>, <span class="ex">il m\'a serré l\'épaule</span>. <b>Imparfait</b> for the backdrop and description: <span class="ex">il faisait froid dehors</span>, <span class="ex">le vent était vif</span>, <span class="ex">tout le monde riait</span>. One step further back, the <em>plus-que-parfait</em>: <span class="ex">j\'avais déjà pagayé sur la Soča</span>, <span class="ex">le Durmitor, que j\'avais laissé de côté</span>. Each verb below opens its full <em>présent / passé composé / imparfait / futur</em>.'},
    {h:'The pronouns <em>y</em> and <em>en</em>',
     p:'<b>y</b> replaces a place or <em>à</em> + thing: <span class="ex">on n\'est vraiment slovène qu\'après être monté <u>là-haut</u></span> <span class="arrow">→</span> <span class="ex">tout le pays semble vouloir <u>y</u> monter</span>; <span class="ex">j\'<u>y</u> pense souvent</span> (penser <em>à</em>). <b>en</b> replaces <em>de</em> + thing or a quantity: <span class="ex">les Slovènes <u>en</u> parlent souvent</span> (parler <em>du</em> Triglav). And the two together: <span class="ex">il <u>y</u> <u>en</u> a beaucoup</span> <span class="arrow">→</span> there are many of them.'},
    {h:'<em>devoir</em> + infinitive vs <em>il faut</em> + infinitive',
     p:'Both express obligation. <b>devoir</b> is conjugated to a person: <span class="ex">on doit s\'encorder</span> <span class="arrow">→</span> we must rope up; <span class="ex">je dois faire attention</span>. <b>il faut</b> + infinitive is impersonal, the same for everyone: <span class="ex">il faut faire attention</span>, <span class="ex">ici il faut rester humble</span>. Use <em>devoir</em> when you want to name <em>who</em> must; use <em>il faut</em> for a general rule.'},
    {h:'The <em>futur simple</em> — one set of endings',
     p:'Take the infinitive (drop a final <em>-e</em>) and add <span class="ex">-ai, -as, -a, -ons, -ez, -ont</span>: <span class="ex">je repartirai vers le sud</span>, <span class="ex">on fera une exception</span>. A few stems are irregular but the endings never change: <span class="ex">je serai</span> (être), <span class="ex">j\'aurai</span> (avoir), <span class="ex">j\'irai</span> (aller), <span class="ex">je ferai</span> (faire). Open <span class="ex">monter</span> below and read its <em>Futur simple</em> column.'},
    {h:'<em>de</em> before a plural adjective — still seeding',
     p:'A plural adjective in <em>front</em> of its noun turns <em>des</em> into <em>de</em>: <span class="ex">de petites histoires de montagne</span>, <span class="ex">de grandes montagnes</span>, <span class="ex">les grandes montagnes des Balkans</span>. The same reflex you have carried since the Alps — by now it should fire on its own.'}
  ]
});
