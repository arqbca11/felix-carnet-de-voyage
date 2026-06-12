/* Week 2 — Les Dolomites. One self-contained post resource: article (fr/en),
   vocab, grammar notes, and map location. Registers itself with the blog engine.
   Schema & escaping rules: see CLAUDE.md §6 and §8. */
FelixBlog.register({
  id:'dolomites', no:2, place:'Les Dolomites', country:'Italie', flag:'🇮🇹',
  date:'le 17 mai 2026', lat:46.5369, lng:12.1357,
  title:'Grande voie sur la Cima Grande', titleEn:'A big route on the Cima Grande',
  level:'mid A2',
  fr:[
    "Bonjour de l'Italie ! Après les skis, place au rocher. Les Dolomites, c'est un rêve pour tous les grimpeurs : des centaines de mètres de calcaire vertical, jaune et gris, avec des voies ouvertes il y a presque cent ans.",
    "Je grimpe depuis l'adolescence, alors je n'allais pas rester en bas. J'ai retrouvé Marco, un vieil ami italien et excellent grimpeur. Ensemble, nous avons fait une grande voie sur la Cima Grande : dix longueurs, presque cinq cents mètres de haut.",
    "Marco partait devant, puis c'était mon tour. Sur le rocher, je me sens chez moi : je cherche les prises, je place les protections, je respire. Le vide sous mes pieds ne me fait pas peur — il me rend attentif, c'est différent. Au milieu de la voie, on s'est arrêtés sur une petite vire pour manger une pomme. Quelle vue ! Des montagnes partout, et des aigles plus bas que nous.",
    "En haut, on s'est serré la main, comme toujours. Puis on est redescendus vite, parce qu'en montagne, l'après-midi, l'orage arrive souvent. Le soir, on a fêté ça avec une pizza et, bien sûr, une longue discussion sur le meilleur café d'Italie.",
    "Demain, direction la Slovénie. Là-bas, je quitte la verticale pour quelque chose de plus mouillé… À bientôt !"
  ],
  en:[
    "Hello from Italy! After the skis, on to the rock. The Dolomites are a dream for every climber: hundreds of metres of vertical limestone, yellow and grey, with routes first opened almost a hundred years ago.",
    "I've been climbing since my teens, so I wasn't going to stay at the bottom. I met up with Marco, an old Italian friend and an excellent climber. Together we did a big route on the Cima Grande: ten pitches, nearly five hundred metres tall.",
    "Marco led off first, then it was my turn. On rock I feel at home: I look for the holds, I place the protection, I breathe. The drop beneath my feet doesn't scare me — it makes me focused, which is different. Halfway up, we stopped on a little ledge to eat an apple. What a view! Mountains everywhere, and eagles lower than us.",
    "At the top we shook hands, as always. Then we came back down fast, because in the mountains storms often roll in during the afternoon. In the evening we celebrated with a pizza and, of course, a long argument about the best coffee in Italy.",
    "Tomorrow, on to Slovenia. There, I'm trading the vertical for something a bit wetter… See you soon!"
  ],
  vocab:[
    ['le rocher','rock'],['un grimpeur','a climber'],['une voie','a route'],
    ['le calcaire','limestone'],['une longueur','a pitch'],['une prise','a hold'],
    ['une protection','protection (gear)'],['le vide','exposure, the void'],['une vire','a ledge'],
    ['un orage','a thunderstorm'],['redescendre','to come back down'],['fêter','to celebrate']
  ],
  gram:[
    {h:'The <em>imparfait</em> for description & background',
     p:'Paint scenes and ongoing actions with the <b>imparfait</b>: <span class="ex">Marco partait devant</span>, <span class="ex">c\'était mon tour</span>. The <b>passé composé</b> still carries the key moves: <span class="ex">nous avons fait une grande voie</span>, <span class="ex">on s\'est arrêtés pour manger une pomme</span>. (Notice the present too — <span class="ex">je cherche les prises, je respire</span> — used to make the climb feel live.)'},
    {h:'<em>depuis</em> + present, vs <em>il y a</em> (ago)',
     p:'Two ways to place an action in time. <em>depuis</em> + the <b>present</b> = still going on now: <span class="ex">je grimpe depuis l\'adolescence</span> <span class="arrow">→</span> I\'ve been climbing since my teens (and still do). <em>il y a</em> + time = finished, "ago": <span class="ex">des voies ouvertes il y a cent ans</span> <span class="arrow">→</span> routes opened a hundred years ago.'},
    {h:'Past with <em>être</em>: agreement & reflexives',
     p:'A handful of verbs — and all reflexive ones — build the past with <em>être</em>, and the ending agrees with the subject: <span class="ex">on est redescendus</span>, <span class="ex">on s\'est arrêtés</span>. Compare the <em>avoir</em> verbs, which don\'t agree this way: <span class="ex">nous avons fait</span>, <span class="ex">on a fêté</span>.'}
  ]
});
