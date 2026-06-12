/* Week 5 — Istrie (Croatie). One self-contained post resource: article (fr/en),
   vocab, grammar notes, and map location. Registers itself with the blog engine.
   Schema & escaping rules: see CLAUDE.md §6 and §8. */
FelixBlog.register({
  id:'istrie', no:5, place:'Istrie', country:'Croatie', flag:'🇭🇷',
  date:'le 7 juin 2026', lat:45.0811, lng:13.6387,
  title:'L\'Istrie, des collines à la mer', titleEn:'Istria, from the hills to the sea',
  level:'hard A2',
  fr:[
    "Salut à tous ! J'ai passé la frontière et je suis entré en Croatie, en Istrie. Le changement est petit mais réel : les panneaux changent, le café devient un peu plus fort, et la mer reste toujours là, à droite. À Poreč, j'ai loué un vélo pour plusieurs jours. Je voulais suivre la Parenzana, une ancienne voie ferrée devenue une piste cyclable. Le train ne roule plus depuis presque cent ans, mais les tunnels et les ponts, eux, sont toujours là.",
    "Pendant deux jours, j'ai roulé vers l'intérieur, loin de la côte. Le paysage montait doucement : de petits villages en pierre, des vignes, des forêts, et partout cette terre rouge typique de l'Istrie. La Parenzana traverse de vieux tunnels, tout noirs et frais — on entre en plein soleil et on ressort dans le froid. Je montais sans me presser, parce que la vue méritait qu'on s'arrête. Au sommet d'une colline, une ville m'attendait : Motovun.",
    "Motovun est célèbre pour une chose : la truffe. Dans la forêt en bas, des chercheurs cherchent ce champignon avec leurs chiens. J'ai rencontré Davor, un homme calme avec deux petits chiens fous. « Ce n'est pas moi qui trouve la truffe, m'a-t-il dit en riant, c'est le chien. Moi, je creuse. » Le soir, j'ai mangé des pâtes maison avec de la truffe fraîche râpée dessus. Mon grand-père, qui aimait les choses simples et fortes, aurait adoré ça.",
    "Après les collines, je suis redescendu vers la mer. Tout au sud, près de Pula, il y a le cap Kamenjak : pas de sable, pas d'hôtels, juste du rocher blanc et une eau transparente. J'y ai loué un kayak. Sur la mer, je me sens chez moi, comme sur le rocher : on lit le vent, on choisit sa ligne, on avance. J'ai pagayé le long des falaises, j'ai sauté de quelques rochers, et j'ai nagé dans des grottes bleues. À Pula même, il y a un immense amphithéâtre romain, presque intact. Difficile de croire qu'il a deux mille ans.",
    "La semaine prochaine, je continue vers le sud, mais je quitte la mer pour les montagnes. Là-bas, dans le massif du Velebit, il y a de grands murs de calcaire qui appellent les grimpeurs. J'ai déjà sorti la corde du sac. À bientôt !"
  ],
  en:[
    "Hi everyone! I crossed the border and entered Croatia, in Istria. The change is small but real: the signs change, the coffee gets a bit stronger, and the sea is still there, on the right. In Poreč I rented a bike for several days. I wanted to follow the Parenzana, an old railway line turned into a cycle path. The train hasn't run for almost a hundred years, but the tunnels and bridges are still there.",
    "For two days I rode inland, away from the coast. The landscape climbed gently: small stone villages, vineyards, forests, and everywhere that red earth typical of Istria. The Parenzana goes through old tunnels, pitch-black and cool — you go in under full sun and come out in the cold. I climbed without rushing, because the view deserved a stop. At the top of a hill, a town was waiting for me: Motovun.",
    "Motovun is famous for one thing: the truffle. In the forest below, hunters search for this mushroom with their dogs. I met Davor, a calm man with two crazy little dogs. 'It's not me who finds the truffle,' he told me, laughing, 'it's the dog. I just dig.' In the evening I ate homemade pasta with fresh truffle grated over it. My grandfather, who loved simple, strong things, would have loved it.",
    "After the hills, I came back down to the sea. Right at the south, near Pula, there's Cape Kamenjak: no sand, no hotels, just white rock and clear water. I rented a kayak there. On the sea I feel at home, like on rock: you read the wind, you choose your line, you move forward. I paddled along the cliffs, jumped off a few rocks, and swam in blue caves. In Pula itself there's a huge Roman amphitheatre, almost intact. Hard to believe it's two thousand years old.",
    "Next week, I keep going south, but I'm leaving the sea for the mountains. There, in the Velebit massif, there are big limestone walls that call to climbers. I've already taken the rope out of my bag. See you soon!"
  ],
  vocab:[
    ['la frontière','the border'],['une piste cyclable','a cycle path'],['une voie ferrée','a railway line'],
    ['un tunnel','a tunnel'],['une colline','a hill'],['une vigne','a vine, a vineyard'],
    ['la truffe','the truffle'],['un champignon','a mushroom'],['creuser','to dig'],
    ['râpé(e)','grated'],['une grotte','a cave'],['un amphithéâtre','an amphitheatre']
  ],
  gram:[
    {h:'Past tense, again: <em>imparfait</em> backdrop vs <em>passé composé</em> events',
     p:'Still the keystone. <b>Imparfait</b> sets the scene that lasts: <span class="ex">le paysage montait doucement</span>, <span class="ex">je montais sans me presser</span>, <span class="ex">une ville m\'attendait</span>. <b>Passé composé</b> drops in the single events that move the week along: <span class="ex">j\'ai passé la frontière</span>, <span class="ex">j\'ai loué un vélo</span>, <span class="ex">j\'ai rencontré Davor</span>, <span class="ex">je suis redescendu vers la mer</span>. Scene, then snap.'},
    {h:'<em>de</em> before a plural adjective (the recurring habit)',
     p:'When a plural adjective comes <em>before</em> its noun, <em>des</em> shrinks to <em>de</em>: <span class="ex">de petits villages</span>, <span class="ex">de vieux tunnels</span>, <span class="ex">de grands murs de calcaire</span>. But when the adjective stays <em>after</em> the noun, <em>des</em> holds: <span class="ex">des grottes bleues</span>. You have met this in earlier weeks — by now it should be starting to look normal, which is exactly the point.'},
    {h:'<em>ne … plus</em> = "no longer / not anymore"',
     p:'Same frame as <em>ne … pas</em>, one different word: <span class="ex">le train ne roule plus</span> <span class="arrow">→</span> the train no longer runs. It joins a small family you are collecting: <em>ne … pas</em> (not), <em>ne … plus</em> (no longer), <em>ne … que</em> (only — from Piran). And watch the spotlight from week 1 come back, this time in the negative: <span class="ex">ce n\'est pas moi qui trouve la truffe, c\'est le chien</span>.'}
  ]
});
