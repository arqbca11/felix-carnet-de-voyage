/* Week 11 — Dalsland (Suède, pays des lacs). One self-contained post resource: article
   (fr/en), vocab, grammar notes, and map location. Registers itself with the engine.
   Change of mode after the long trek: canoe + tent, calm water, slow Bouvier register
   ("the pleasure of doing nothing") — see CLAUDE.md §2a. From this week on: richer vocab
   (cover any word a learner might not know), 4–5 grammar notes with the FUTURE tense
   featured, and every VERB entry carries FelixBlog.verb(...) so the notes panel shows its
   full conjugation (présent / passé composé / imparfait / futur). Escaping: CLAUDE.md §8. */
FelixBlog.register({
  id:'dalsland', no:11, place:'Dalsland', country:'Suède', flag:'🇸🇪',
  date:'le 19 juillet 2026', lat:59.0333, lng:12.2167,
  title:'En canoë sur les lacs de Dalsland', titleEn:'By canoe on the lakes of Dalsland',
  level:'easy B1',
  fr:[
    "Salut à tous ! Après la longue marche en Laponie, j'ai pris le train vers le sud, jusqu'au Dalsland, le pays des lacs. J'ai loué un canoë rouge, j'ai mis ma tente et ma nourriture dedans, et je suis parti sur l'eau pour plusieurs jours. Ici, pas besoin d'hôtel : en Suède, on a le droit de camper presque partout, au bord de l'eau, sous les arbres.",
    "Les journées étaient lentes et simples. Je pagayais le matin, sur de grands lacs gris et calmes, puis je m'arrêtais sur une petite île pour déjeuner. Quand un lac se terminait, je portais le canoë sur le dos jusqu'au lac suivant. Le soir, je ne faisais rien, et c'était très bien ainsi : je regardais l'eau, j'écoutais le cri des huards. Après des semaines de sommets et d'efforts, je redécouvrais le plaisir de ne rien faire.",
    "La nature, ici, est partout. Un matin, un élan est sorti de la forêt, juste devant moi : énorme et tranquille, il m'a regardé un instant, puis il est reparti. Les bois étaient pleins de myrtilles ; j'en ai mangé des poignées entières, et mes doigts sont restés bleus tout l'après-midi. L'eau des lacs n'était pas glaciale comme dans le nord, alors je m'y baignais chaque jour.",
    "Un soir, j'ai partagé un feu avec deux Suédois, Erik et sa fille. « Qu'est-ce que tu vas faire après ? » m'a demandé Erik. Sur le moment, je ne savais pas trop. « Je descendrai lentement vers le continent, » j'ai répondu, « et un jour, je rentrerai chez moi. » Mais ça, c'est pour plus tard. Ce soir-là, je voulais seulement dormir au bord de l'eau, et écouter le silence.",
    "La semaine prochaine, je commence à redescendre vers le continent : je prendrai le ferry vers le sud, puis la route. Je ne sais pas encore où je m'arrêterai — et, pour une fois, ça me plaît bien. À bientôt !"
  ],
  en:[
    "Hi everyone! After the long walk in Lapland, I took the train south, to Dalsland, the land of lakes. I rented a red canoe, put my tent and my food inside, and set off on the water for several days. Here you don't need a hotel: in Sweden, you're allowed to camp almost anywhere, by the water, under the trees.",
    "The days were slow and simple. I paddled in the morning, across great grey, calm lakes, then I stopped on a little island for lunch. When one lake ended, I carried the canoe on my back to the next lake. In the evening, I did nothing, and it was just fine that way: I watched the water, I listened to the call of the loons. After weeks of summits and effort, I rediscovered the pleasure of doing nothing.",
    "Nature, here, is everywhere. One morning, a moose came out of the forest, right in front of me: huge and calm, it looked at me for a moment, then walked off again. The woods were full of blueberries; I ate whole handfuls of them, and my fingers stayed blue all afternoon. The lake water wasn't freezing like in the north, so I swam in it every day.",
    "One evening, I shared a fire with two Swedes, Erik and his daughter. «What are you going to do next?» Erik asked me. Just then, I wasn't really sure. «I'll head slowly down toward the continent,» I answered, «and one day, I'll go back home.» But that's for later. That evening, I only wanted to sleep by the water, and listen to the silence.",
    "Next week, I start heading back down toward the continent: I'll take the ferry south, then the road. I don't yet know where I'll stop — and, for once, I rather like that. See you soon!"
  ],
  vocab:[
    ['un canoë','a canoe'],['une tente','a tent'],['la nourriture','food, provisions'],
    ['camper','to camp', FelixBlog.verb('camper',
      ["je campe","tu campes","il/elle campe","nous campons","vous campez","ils/elles campent"],
      ["j'ai campé","tu as campé","il/elle a campé","nous avons campé","vous avez campé","ils/elles ont campé"],
      ["je campais","tu campais","il/elle campait","nous campions","vous campiez","ils/elles campaient"],
      ["je camperai","tu camperas","il/elle campera","nous camperons","vous camperez","ils/elles camperont"])],
    ['pagayer','to paddle', FelixBlog.verb('pagayer',
      ["je pagaie","tu pagaies","il/elle pagaie","nous pagayons","vous pagayez","ils/elles pagaient"],
      ["j'ai pagayé","tu as pagayé","il/elle a pagayé","nous avons pagayé","vous avez pagayé","ils/elles ont pagayé"],
      ["je pagayais","tu pagayais","il/elle pagayait","nous pagayions","vous pagayiez","ils/elles pagayaient"],
      ["je pagaierai","tu pagaieras","il/elle pagaiera","nous pagaierons","vous pagaierez","ils/elles pagaieront"])],
    ['porter','to carry', FelixBlog.verb('porter',
      ["je porte","tu portes","il/elle porte","nous portons","vous portez","ils/elles portent"],
      ["j'ai porté","tu as porté","il/elle a porté","nous avons porté","vous avez porté","ils/elles ont porté"],
      ["je portais","tu portais","il/elle portait","nous portions","vous portiez","ils/elles portaient"],
      ["je porterai","tu porteras","il/elle portera","nous porterons","vous porterez","ils/elles porteront"])],
    ['se baigner','to swim, to take a dip', FelixBlog.verb('se baigner',
      ["je me baigne","tu te baignes","il/elle se baigne","nous nous baignons","vous vous baignez","ils/elles se baignent"],
      ["je me suis baigné(e)","tu t'es baigné(e)","il/elle s'est baigné(e)","nous nous sommes baigné(e)s","vous vous êtes baigné(e)(s)","ils/elles se sont baigné(e)s"],
      ["je me baignais","tu te baignais","il/elle se baignait","nous nous baignions","vous vous baigniez","ils/elles se baignaient"],
      ["je me baignerai","tu te baigneras","il/elle se baignera","nous nous baignerons","vous vous baignerez","ils/elles se baigneront"])],
    ['un élan','a moose, an elk'],['une myrtille','a blueberry'],['une poignée','a handful'],
    ['partager','to share', FelixBlog.verb('partager',
      ["je partage","tu partages","il/elle partage","nous partageons","vous partagez","ils/elles partagent"],
      ["j'ai partagé","tu as partagé","il/elle a partagé","nous avons partagé","vous avez partagé","ils/elles ont partagé"],
      ["je partageais","tu partageais","il/elle partageait","nous partagions","vous partagiez","ils/elles partageaient"],
      ["je partagerai","tu partageras","il/elle partagera","nous partagerons","vous partagerez","ils/elles partageront"])],
    ['un feu','a fire'],['un huard','a loon (bird)'],['le cri','the call, the cry'],
    ['descendre','to go down', FelixBlog.verb('descendre',
      ["je descends","tu descends","il/elle descend","nous descendons","vous descendez","ils/elles descendent"],
      ["je suis descendu(e)","tu es descendu(e)","il/elle est descendu(e)","nous sommes descendu(e)s","vous êtes descendu(e)(s)","ils/elles sont descendu(e)s"],
      ["je descendais","tu descendais","il/elle descendait","nous descendions","vous descendiez","ils/elles descendaient"],
      ["je descendrai","tu descendras","il/elle descendra","nous descendrons","vous descendrez","ils/elles descendront"])],
    ['rentrer','to go (back) home', FelixBlog.verb('rentrer',
      ["je rentre","tu rentres","il/elle rentre","nous rentrons","vous rentrez","ils/elles rentrent"],
      ["je suis rentré(e)","tu es rentré(e)","il/elle est rentré(e)","nous sommes rentré(e)s","vous êtes rentré(e)(s)","ils/elles sont rentré(e)s"],
      ["je rentrais","tu rentrais","il/elle rentrait","nous rentrions","vous rentriez","ils/elles rentraient"],
      ["je rentrerai","tu rentreras","il/elle rentrera","nous rentrerons","vous rentrerez","ils/elles rentreront"])],
    ['au bord de l\'eau','at the water\'s edge'],['avoir le droit de','to be allowed to'],['tranquille','calm, peaceful']
  ],
  gram:[
    {h:'The keystone, on calm water: <em>passé composé</em> vs <em>imparfait</em>',
     p:'<b>Passé composé</b> for the events: <span class="ex">j\'ai loué un canoë</span>, <span class="ex">un élan est sorti de la forêt</span>, <span class="ex">j\'ai partagé un feu</span>. <b>Imparfait</b> for the slow backdrop and habits: <span class="ex">les journées étaient lentes</span>, <span class="ex">je pagayais le matin</span>, <span class="ex">je m\'y baignais chaque jour</span>. New: each verb in the list below has a small button (<span class="ex">▾</span>) that opens its full <em>présent / passé composé / imparfait / futur</em>.'},
    {h:'The <em>futur simple</em> — one tense, the same endings for all',
     p:'Take the infinitive and add <span class="ex">-ai, -as, -a, -ons, -ez, -ont</span>: <span class="ex">je descendrai</span>, <span class="ex">je rentrerai</span>, <span class="ex">je prendrai le ferry</span>. A few stems are irregular, but the endings never change: <span class="ex">je serai</span> (être), <span class="ex">j\'aurai</span> (avoir), <span class="ex">j\'irai</span> (aller), <span class="ex">je ferai</span> (faire). Open any verb below and read the <em>Futur simple</em> column.'},
    {h:'<em>Futur proche</em> vs <em>futur simple</em> — which to use',
     p:'Two ways to point at the future. <b>Futur proche</b> = <em>aller</em> + infinitive, for something near or already planned: <span class="ex">qu\'est-ce que tu vas faire ?</span>, <span class="ex">je vais dormir</span>. <b>Futur simple</b> feels a little more distant or more written: <span class="ex">un jour, je rentrerai chez moi</span>. In everyday speech the <em>futur proche</em> is everywhere — both are correct.'},
    {h:'<em>de</em> before a plural adjective — still seeding',
     p:'A plural adjective in front of its noun turns <em>des</em> into <em>de</em>: <span class="ex">de grands lacs gris et calmes</span>. The same habit you have carried since the Alps (<span class="ex">de grandes montagnes</span>) — by now it should feel automatic.'},
    {h:'The pronoun <em>en</em> — "some / of them"',
     p:'<em>en</em> replaces a noun introduced by <em>du / de la / des</em> (a quantity), so you don\'t repeat it. "I ate handfuls <b>of blueberries</b>" becomes <span class="ex">j\'en ai mangé des poignées</span>; <span class="ex">tu veux des myrtilles ? — oui, j\'en veux</span>. Its cousin <em>y</em> stands for a place: <span class="ex">je m\'y baignais</span> <span class="arrow">→</span> "I swam <b>there</b>".'}
  ]
});
