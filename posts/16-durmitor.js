/* Week 16 — Durmitor (Žabljak, Monténégro). One self-contained post resource:
   article (fr/en), vocab, grammar notes, map location. Registers itself with the
   engine. This pays off the long-parked tease from week 9 ("le Monténégro attendra"):
   after a long overland push south through Croatia and Bosnia, Felix reaches the
   Durmitor massif — Bobotov Kuk over old shepherd paths, the Black Lake, and a day on
   the Tara (a quiet callback to the Soča rafting with Anže, week 3). Local guide Vuk.
   One earned reflective beat (Saint-Exupéry register, §2a); a far-off turn toward home.
   Grammar focus: relative pronouns qui/que/où (+ dont as a transparent B1 stretch) and
   a plus-que-parfait recap; FUTURE note kept in play; de+plural reused. Escaping: §8. */
FelixBlog.register({
  id:'durmitor', no:16, place:"Durmitor (Žabljak)", country:"Monténégro", flag:'🇲🇪',
  date:'le 23 août 2026', lat:43.1547, lng:19.1028,
  title:"Le Monténégro, enfin", titleEn:"Montenegro, at last",
  level:'easy B1',
  fr:[
    "Salut à tous ! Le voyage a été long. De la Croatie jusqu'ici, j'ai roulé pendant deux jours : des bus, un train, puis une vieille route qui montait à travers la Bosnie. Au bout, il y avait Žabljak et le massif du Durmitor. C'est l'endroit que j'avais laissé de côté l'été dernier, quand j'avais pris l'avion pour le nord. Le Monténégro que j'avais mis de côté m'attendait toujours.",
    "Le premier matin, j'ai marché jusqu'au lac Noir. L'eau était sombre et calme, et autour, de grandes forêts de pins montaient vers les sommets. C'est là que j'ai rencontré Vuk, le guide qui connaît ces montagnes par cœur. Il parle peu. Il regarde le ciel, il lit les nuages, et il en dit plus avec un coup d'œil que d'autres avec une longue phrase. « Demain, le sommet », a-t-il dit.",
    "Nous sommes partis tôt pour Bobotov Kuk, le point le plus haut du massif. Le chemin suivait de vieux sentiers de bergers, sur le rocher et la pierre sèche. Plus haut, il fallait poser les mains, mais rien de difficile pour qui aime ça. Au sommet, à deux mille cinq cents mètres, le pays s'ouvrait dans toutes les directions. Vuk a sorti du fromage et du pain, et nous avons mangé sans parler. Parfois, c'est dans le silence partagé qu'on se comprend le mieux.",
    "Le dernier jour, nous sommes descendus vers la Tara, le canyon le plus profond d'Europe, un endroit dont tout le monde parle ici. Nous avons pagayé sur un radeau, dans une eau verte et glacée. Il y avait une petite section vive, des vagues et des rochers, et tout de suite j'ai repensé à la Soča et à Anže, trois ans plus tôt. « Tu pagaies bien », a dit Vuk.",
    "Demain, je quitte le Durmitor. Cet été aura été une longue boucle, et le Monténégro en était la dernière pièce, celle que j'attendais depuis longtemps. Je ne repars pas vers un nouveau sommet : je commence, doucement, à regarder vers l'ouest. Un jour, je rentrerai chez moi, à Chamonix. Pas encore. Mais l'idée marche avec moi maintenant, sur la route. À bientôt !"
  ],
  en:[
    "Hi everyone! The journey was long. From Croatia all the way here, I traveled for two days: buses, a train, then an old road climbing through Bosnia. At the end of it was Žabljak and the Durmitor massif. This is the place I had set aside last summer, when I took the plane north. The Montenegro I had put aside was still waiting for me.",
    "The first morning, I walked to the Black Lake. The water was dark and calm, and all around, great pine forests rose toward the summits. That's where I met Vuk, the guide who knows these mountains by heart. He says little. He looks at the sky, he reads the clouds, and he says more with a glance than others do with a long sentence. «Tomorrow, the summit», he said.",
    "We left early for Bobotov Kuk, the highest point of the massif. The path followed old shepherds' trails, over rock and dry stone. Higher up, you had to use your hands, but nothing hard for anyone who loves that. At the summit, at two thousand five hundred meters, the country opened up in every direction. Vuk took out cheese and bread, and we ate without talking. Sometimes it's in shared silence that you understand each other best.",
    "On the last day, we came down toward the Tara, the deepest canyon in Europe, a place everyone here talks about. We paddled on a raft, in green, icy water. There was a short lively section, waves and rocks, and right away I thought back to the Soča and to Anže, three years earlier. «You paddle well», said Vuk.",
    "Tomorrow, I leave the Durmitor. This summer will have been one long loop, and Montenegro was its last piece, the one I had been waiting for, for a long time. I'm not setting off toward a new summit: I'm starting, slowly, to look west. One day, I'll go home, to Chamonix. Not yet. But the idea walks with me now, on the road. See you soon!"
  ],
  vocab:[
    ['un massif','a massif (a mountain group)'],['un sommet','a summit, a peak'],
    ['un sentier','a trail, a footpath'],['un berger','a shepherd'],
    ['la pierre sèche','dry stone (stacked without mortar)'],
    ['un coup d\'œil','a glance, a quick look'],
    ['un nuage','a cloud'],['un pin','a pine tree'],
    ['un canyon','a canyon, a gorge'],['profond','deep'],
    ['un radeau','a raft'],['une vague','a wave'],
    ['vif / vive','lively, brisk (here: of fast water)'],['glacé','icy, freezing'],
    ['un compliment','a compliment'],
    ['rouler','to drive, to ride (along)', FelixBlog.verb('rouler',
      ["je roule","tu roules","il/elle roule","nous roulons","vous roulez","ils/elles roulent"],
      ["j'ai roulé","tu as roulé","il/elle a roulé","nous avons roulé","vous avez roulé","ils/elles ont roulé"],
      ["je roulais","tu roulais","il/elle roulait","nous roulions","vous rouliez","ils/elles roulaient"],
      ["je roulerai","tu rouleras","il/elle roulera","nous roulerons","vous roulerez","ils/elles rouleront"])],
    ['pagayer','to paddle', FelixBlog.verb('pagayer',
      ["je pagaie","tu pagaies","il/elle pagaie","nous pagayons","vous pagayez","ils/elles pagaient"],
      ["j'ai pagayé","tu as pagayé","il/elle a pagayé","nous avons pagayé","vous avez pagayé","ils/elles ont pagayé"],
      ["je pagayais","tu pagayais","il/elle pagayait","nous pagayions","vous pagayiez","ils/elles pagayaient"],
      ["je pagaierai","tu pagaieras","il/elle pagaiera","nous pagaierons","vous pagaierez","ils/elles pagaieront"])],
    ['gravir','to climb, to ascend (a height)', FelixBlog.verb('gravir',
      ["je gravis","tu gravis","il/elle gravit","nous gravissons","vous gravissez","ils/elles gravissent"],
      ["j'ai gravi","tu as gravi","il/elle a gravi","nous avons gravi","vous avez gravi","ils/elles ont gravi"],
      ["je gravissais","tu gravissais","il/elle gravissait","nous gravissions","vous gravissiez","ils/elles gravissaient"],
      ["je gravirai","tu graviras","il/elle gravira","nous gravirons","vous gravirez","ils/elles graviront"])],
    ['rentrer','to go home, to return', FelixBlog.verb('rentrer',
      ["je rentre","tu rentres","il/elle rentre","nous rentrons","vous rentrez","ils/elles rentrent"],
      ["je suis rentré(e)","tu es rentré(e)","il/elle est rentré(e)","nous sommes rentré(e)s","vous êtes rentré(e)s","ils/elles sont rentré(e)s"],
      ["je rentrais","tu rentrais","il/elle rentrait","nous rentrions","vous rentriez","ils/elles rentraient"],
      ["je rentrerai","tu rentreras","il/elle rentrera","nous rentrerons","vous rentrerez","ils/elles rentreront"])],
    ['attendre','to wait, to wait for', FelixBlog.verb('attendre',
      ["j'attends","tu attends","il/elle attend","nous attendons","vous attendez","ils/elles attendent"],
      ["j'ai attendu","tu as attendu","il/elle a attendu","nous avons attendu","vous avez attendu","ils/elles ont attendu"],
      ["j'attendais","tu attendais","il/elle attendait","nous attendions","vous attendiez","ils/elles attendaient"],
      ["j'attendrai","tu attendras","il/elle attendra","nous attendrons","vous attendrez","ils/elles attendront"])]
  ],
  gram:[
    {h:'The keystone: <em>passé composé</em> vs <em>imparfait</em>',
     p:'<b>Passé composé</b> for the week\'s events: <span class="ex">j\'ai marché jusqu\'au lac Noir</span>, <span class="ex">nous sommes partis tôt</span>, <span class="ex">nous avons pagayé sur un radeau</span>. <b>Imparfait</b> for the backdrop and description: <span class="ex">l\'eau était sombre et calme</span>, <span class="ex">le chemin suivait de vieux sentiers</span>, <span class="ex">il fallait poser les mains</span>. Each verb below has a button (<span class="ex">▾</span>) that opens its full <em>présent / passé composé / imparfait / futur</em>.'},
    {h:'Relative pronouns: <em>qui</em>, <em>que</em>, <em>où</em>',
     p:'They join two ideas into one sentence. <b>qui</b> = subject (does the action): <span class="ex">le guide qui connaît ces montagnes</span>. <b>que</b> = object (receives it): <span class="ex">le sommet que j\'ai gravi</span>, <span class="ex">l\'endroit que j\'avais laissé de côté</span>. <b>où</b> = where (place or time): <span class="ex">le canyon où la rivière coule</span>, <span class="ex">le jour où je suis arrivé</span>. Tip: <em>qui</em> is followed by a verb, <em>que</em> by a subject.'},
    {h:'<em>dont</em> — a relative for "of which / about which" (B1 stretch)',
     p:'When the link needs <em>de</em> (parler <em>de</em>, avoir besoin <em>de</em>), French uses <em>dont</em>: <span class="ex">un endroit dont tout le monde parle</span> <span class="arrow">→</span> a place everyone talks <em>about</em>. Don\'t force it yet — just recognize it: <span class="ex">le sommet dont je rêvais</span> <span class="arrow">→</span> the summit I dreamed <em>of</em>.'},
    {h:'<em>plus-que-parfait</em> — the past before the past',
     p:'<em>avoir</em> or <em>être</em> in the <em>imparfait</em> + past participle, for what had already happened earlier: <span class="ex">l\'endroit que j\'avais laissé de côté</span>, <span class="ex">le Monténégro que j\'avais mis de côté</span>, <span class="ex">quand j\'avais pris l\'avion pour le nord</span>. It sets one event clearly <em>before</em> another past event.'},
    {h:'A look ahead: <em>futur simple</em>, and <em>de</em> before a plural adjective',
     p:'<b>Futur simple</b> — infinitive + <span class="ex">-ai, -as, -a, -ons, -ez, -ont</span>: <span class="ex">je quitte le Durmitor</span> becomes <span class="ex">un jour, je rentrerai chez moi</span>; <span class="ex">l\'idée marche avec moi</span> could be <span class="ex">marchera</span>. Note too the irregular auxiliary stem in <span class="ex">cet été aura été une longue boucle</span> (avoir <span class="arrow">→</span> <em>aura</em>). And the old reflex: a plural adjective before its noun turns <em>des</em> into <em>de</em> <span class="arrow">→</span> <span class="ex">de grandes forêts</span>, <span class="ex">de petits villages</span>, <span class="ex">de vieux sentiers</span>.'}
  ]
});
