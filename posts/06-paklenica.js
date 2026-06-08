/* Week 6 — Paklenica (Velebit, Croatie). One self-contained post resource: article
   (fr/en), vocab, grammar notes, and map location. Registers itself with the engine.
   Reflective register folds in Saint-Exupéry (effort + comradeship on the rope) and a
   light Bouvier touch (the slow, wordless moment) — see CLAUDE.md §2a. A2 throughout.
   Schema & escaping rules: see CLAUDE.md §6 and §8. */
FelixBlog.register({
  id:'paklenica', no:6, place:'Paklenica', country:'Croatie', flag:'🇭🇷',
  date:'le 14 juin 2026', lat:44.3346, lng:15.4622,
  title:'Anića Kuk, longueur après longueur', titleEn:'Anića Kuk, pitch after pitch',
  fr:[
    "Salut à tous ! J'ai quitté la mer et j'ai roulé vers le sud, le long de la côte, jusqu'au pied du Velebit. Ici, la montagne tombe directement dans l'Adriatique : d'un côté l'eau bleue, de l'autre de grands murs de pierre grise. Le parc de Paklenica, ce sont deux canyons étroits, pleins de voies d'escalade. J'attendais ce moment depuis des semaines : enfin du vrai rocher, et de longues voies.",
    "Les premiers jours, j'ai grimpé des voies courtes pour retrouver mes sensations. Le calcaire de Paklenica est magnifique : dur, gris, plein de petites prises franches. Le vent, lui, est moins gentil — ici, on l'appelle la bura, et il descend de la montagne par rafales froides. Le soir, au camping, tout le monde parlait d'escalade, dans cinq langues à la fois. C'est là que j'ai rencontré Ivana, une grimpeuse croate qui connaît ces parois par cœur.",
    "Le troisième jour, on s'est attaqués à Anića Kuk, la grande paroi du parc : presque trois cents mètres de haut, longueur après longueur. Ivana avait déjà grimpé cette voie plusieurs fois, alors elle partait devant. Sur une grande voie, on ne parle pas beaucoup ; la corde dit le reste : je te tiens, vas-y. Cette confiance silencieuse, entre deux personnes qui partagent le même risque, c'est peut-être ça que je cherche vraiment en montagne.",
    "En haut, le vent s'est arrêté d'un coup. On voyait toute la côte, les îles, et la mer qui brillait très loin en bas. Ivana a sorti deux pommes de son sac et on les a mangées sans rien dire. Mon grand-père disait que la montagne ne donne rien gratuitement, mais qu'elle rend toujours l'effort. Ce jour-là, je l'ai compris encore une fois.",
    "La semaine prochaine, je quitte la Croatie et je pars vers l'est, en Bosnie. Cette fois, je range la corde : j'ai juste envie de marcher, plusieurs jours de suite, sans me presser. À bientôt !"
  ],
  en:[
    "Hi everyone! I left the sea and drove south, along the coast, to the foot of the Velebit. Here the mountain drops straight into the Adriatic: on one side the blue water, on the other big walls of grey stone. Paklenica park is two narrow canyons, full of climbing routes. I'd been waiting for this for weeks: real rock at last, and long routes.",
    "The first few days I climbed short routes to get my feel back. The limestone of Paklenica is beautiful: hard, grey, full of small clean holds. The wind is less kind — here they call it the bura, and it comes down off the mountain in cold gusts. In the evening, at the campsite, everyone was talking about climbing, in five languages at once. That's where I met Ivana, a Croatian climber who knows these walls by heart.",
    "On the third day we took on Anića Kuk, the big wall of the park: almost three hundred metres tall, pitch after pitch. Ivana had already climbed this route several times, so she led. On a big route you don't talk much; the rope says the rest: I've got you, go. That silent trust, between two people who share the same risk — maybe that's what I'm really looking for in the mountains.",
    "At the top, the wind stopped all at once. We could see the whole coast, the islands, and the sea shining far below. Ivana took two apples out of her pack and we ate them without saying a word. My grandfather used to say that the mountain gives nothing for free, but that it always repays the effort. That day, I understood it once again.",
    "Next week, I leave Croatia and head east, into Bosnia. This time I'm putting the rope away: I just want to walk, several days in a row, without rushing. See you soon!"
  ],
  vocab:[
    ['au pied de','at the foot of'],['une paroi','a rock face, a wall'],['un canyon','a canyon'],
    ['une rafale','a gust (of wind)'],['une corde','a rope'],['une grimpeuse','a (female) climber'],
    ['une prise','a hold'],['une longueur','a pitch'],['partager','to share'],
    ['l\'effort','effort'],['une île','an island'],['d\'un coup','all at once, suddenly']
  ],
  gram:[
    {h:'The keystone, on a big wall: <em>imparfait</em> vs <em>passé composé</em>',
     p:'<b>Imparfait</b> for the lasting backdrop: <span class="ex">j\'attendais ce moment depuis des semaines</span>, <span class="ex">elle partait devant</span>, <span class="ex">on voyait toute la côte</span>. <b>Passé composé</b> for the single moves: <span class="ex">on s\'est attaqués à Anića Kuk</span>, <span class="ex">le vent s\'est arrêté d\'un coup</span>, <span class="ex">j\'ai rencontré Ivana</span>. Bonus to notice (not to drill): <span class="ex">Ivana avait déjà grimpé cette voie</span> — the <em>plus-que-parfait</em>, a past <em>before</em> the past ("had already climbed").'},
    {h:'<em>de</em> before a plural adjective — still seeding',
     p:'A plural adjective in front of its noun turns <em>des</em> into <em>de</em>: <span class="ex">de grands murs de pierre grise</span>, <span class="ex">de longues voies</span>, <span class="ex">plein de petites prises</span>. The same habit you have seen since the Alps — by now your ear should start to expect it.'},
    {h:'Past participle agreeing with a <em>preceding</em> direct object',
     p:'With <em>avoir</em>, the participle usually stays put — but when the direct object comes <b>before</b> the verb, it agrees with it. "The apples" (<em>les pommes</em>, feminine plural) sit before the verb here, so: <span class="ex">on les a mangées</span> (note the <em>-es</em>). Compare <span class="ex">je l\'ai compris</span>, where <em>l\'</em> stands for "that" (masculine) and nothing is added. It rhymes with the <em>être</em>-agreement from the Dolomites — same idea, a different trigger.'}
  ]
});
