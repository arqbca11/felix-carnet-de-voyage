/* Week 4 — Piran. One self-contained post resource: article (fr/en),
   vocab, grammar notes, and map location. Registers itself with the blog engine.
   Schema & escaping rules: see CLAUDE.md §6 and §8. */
FelixBlog.register({
  id:'piran', no:4, place:'Piran', country:'Slovénie', flag:'🇸🇮',
  date:'le 31 mai 2026', lat:45.5288, lng:13.5683,
  title:'Piran, enfin la mer', titleEn:'Piran, the sea at last',
  fr:[
    "Bonjour de la mer ! Après une semaine dans les montagnes, j'ai pris le bus jusqu'à Piran. Quel changement : on quitte les vallées étroites pour de longues plages blanches et une lumière éblouissante. La Slovénie n'a qu'une petite côte, à peine cinquante kilomètres, mais Piran y est posée comme un bijou — un petit village vénitien sur un cap, avec de grandes maisons aux volets clos contre le soleil.",
    "J'ai loué un kayak de mer pour quatre jours. Au début, c'était bizarre : la mer ne ressemble pas à la Soča. Sur une rivière, on suit le courant ; sur la mer, on choisit sa direction — mais c'est souvent le vent qui décide. J'ai longé les falaises de Strunjan, puis tourné autour du cap Madona. Quand on glisse sur une eau calme, on n'entend que la pagaie et les goélands.",
    "Près de Piran, il y a de vieilles salines, immenses et plates, où l'on récolte le sel à la main depuis le Moyen Âge. Un solinar — un travailleur du sel — m'a tout expliqué. Il portait un grand chapeau de paille et un râteau en bois. « Le sel, m'a-t-il dit, c'est la mer plus le vent plus le soleil — rien d'autre. » J'ai goûté un cristal directement dans ma main : doux, presque sucré. J'en ai pris un petit sac pour le voyage.",
    "Le soir, je me perdais dans les ruelles de la vieille ville. Tout y était étroit, en pierre claire, avec du linge aux fenêtres. Les vieux jouaient aux cartes sur la place Tartini, et on entendait autant d'italien que de slovène. Un soir, j'ai mangé du poisson grillé avec un pêcheur, Damjan, qui m'a appris trois mots de slovène. J'en oublierai sûrement deux, mais le premier — hvala, « merci » — je ne l'oublierai jamais.",
    "Demain, je rends le kayak et je passe la frontière vers l'Istrie croate. Encore la mer, mais une autre côte, plus sauvage. À bientôt !"
  ],
  en:[
    "Hello from the sea! After a week in the mountains, I took the bus down to Piran. What a change: you trade narrow valleys for long white beaches and a blinding light. Slovenia has only a tiny coast, barely fifty kilometres, but Piran sits on it like a jewel — a little Venetian village on a headland, with tall houses, shutters closed against the sun.",
    "I rented a sea kayak for four days. At first it felt strange: the sea is nothing like the Soča. On a river you follow the current; on the sea you pick your direction — but it's often the wind that decides. I followed the cliffs of Strunjan, then rounded Cape Madona. When you glide over flat water, all you hear is the paddle and the gulls.",
    "Just outside Piran there are old salt pans, vast and flat, where salt has been harvested by hand since the Middle Ages. A solinar — a salt worker — explained the whole thing to me. He wore a big straw hat and carried a wooden rake. 'Salt,' he told me, 'is the sea plus the wind plus the sun — nothing else.' I tasted a crystal straight from my palm: soft, almost sweet. I took a small bag of it along for the road.",
    "In the evening I'd get lost in the alleys of the old town. Everything was narrow, pale stone, washing strung between the windows. The old men played cards on Tartini Square, and you'd hear as much Italian as Slovenian. One evening I had grilled fish with a fisherman, Damjan, who taught me three words of Slovenian. I'll probably forget two, but the first — hvala, 'thank you' — I'll never forget.",
    "Tomorrow I hand back the kayak and cross the border into Croatian Istria. Still the sea, but a wilder coast. See you soon!"
  ],
  vocab:[
    ['la côte','the coast'],['une plage','a beach'],['un kayak de mer','a sea kayak'],
    ['une falaise','a cliff'],['un cap','a cape, a headland'],['un goéland','a (sea)gull'],
    ['une saline','a salt pan'],['récolter','to harvest'],['le Moyen Âge','the Middle Ages'],
    ['une ruelle','a narrow alley'],['un volet','a shutter'],['un pêcheur','a fisherman']
  ],
  gram:[
    {h:'Past again: backdrop vs single moment',
     p:'Same split, fresh angle. <b>Imparfait</b> = the running backdrop, what was happening on repeat: <span class="ex">je me perdais dans les ruelles</span>, <span class="ex">les vieux jouaient aux cartes</span>, <span class="ex">il portait un grand chapeau</span>. <b>Passé composé</b> = a single moment that breaks through: <span class="ex">un soir, j\'ai mangé du poisson grillé avec Damjan</span>, <span class="ex">j\'ai goûté un cristal</span>, <span class="ex">j\'ai pris un petit sac</span>. Backdrop, then snap.'},
    {h:'<em>des</em> becomes <em>de</em> before a plural adjective',
     p:'Small habit, big payoff. When a plural adjective sits <em>before</em> its noun, <em>des</em> drops to <em>de</em>: not <em>des grandes maisons</em> but <span class="ex">de grandes maisons</span>. It\'s seeded all over this post: <span class="ex">de longues plages blanches</span>, <span class="ex">de vieilles salines</span>, <span class="ex">de grandes maisons aux volets clos</span>. (After the noun, <em>des</em> stays put: <span class="ex">des plages blanches</span>.) French speakers do this automatically — start training the ear for it.'},
    {h:'<em>ne … que</em> = "only"',
     p:'Looks like a negation, isn\'t one. <em>ne … que</em> wraps around a verb just like <em>ne … pas</em>, but means <b>only</b>: <span class="ex">la Slovénie n\'a qu\'une petite côte</span> <span class="arrow">→</span> Slovenia has only a small coast. <span class="ex">on n\'entend que la pagaie et les goélands</span> <span class="arrow">→</span> all you hear is the paddle and the gulls. Same word order as <em>ne … pas</em>, completely different meaning.'}
  ]
});
