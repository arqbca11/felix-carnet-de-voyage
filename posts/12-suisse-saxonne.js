/* Week 12 — La Suisse saxonne (Allemagne, Elbsandsteingebirge). One self-contained post
   resource: article (fr/en), vocab, grammar notes, map location. Registers itself with
   the engine. Felix leaves Sweden by ferry and rides south into the continent (resolving
   the week-11 tease) — sandstone-tower climbing with the strict Saxon ethics (no chalk,
   no metal gear, knotted-cord slings): competence intact, but humbled into a new style.
   One earned reflective beat at the Elbe (Saint-Exupéry register, §2a). Richer vocab
   (cover any unknown word), 5 grammar notes with the FUTURE featured, every VERB entry
   carries FelixBlog.verb(...). Escaping: CLAUDE.md §8. */
FelixBlog.register({
  id:'saxe', no:12, place:'La Suisse saxonne', country:'Allemagne', flag:'🇩🇪',
  date:'le 26 juillet 2026', lat:50.9614, lng:14.0733,
  title:'Sur les tours de grès', titleEn:'On the sandstone towers',
  level:'mid A2',
  fr:[
    "Salut à tous ! J'ai quitté la Suède de nuit, en ferry. Au matin, j'étais en Allemagne, et un train m'a descendu vers le sud, jusqu'à Dresde, puis dans la vallée de l'Elbe. Ici, le paysage est différent : une forêt verte et profonde, de petits villages au bord du fleuve, et partout de grandes tours de grès qui montent vers le ciel. On appelle cet endroit « la Suisse saxonne », même si les Alpes sont loin.",
    "À Rathen, j'ai rencontré Lutz. Il a presque soixante-dix ans et il grimpe sur ces tours depuis qu'il est enfant. Tout de suite, il m'a prévenu : ici, les règles sont strictes. Pas de magnésie, pas de coinceurs en métal — le grès est tendre, et le métal l'abîmerait. « Tu vas grimper autrement », m'a-t-il dit en souriant. J'ai déjà grimpé de grandes parois, mais ici, j'écoutais comme un débutant.",
    "Le lendemain, nous avons grimpé une tour fine comme une aiguille. Pour se protéger, on glisse des nœuds de corde dans les fentes du rocher ; les anneaux de fer sont rares et souvent très loin. L'exposition ne me fait pas peur, mais ce style m'a obligé à grimper lentement, à réfléchir avant chaque mouvement. Tout en haut, dans une petite boîte cachée sous une pierre, on signe un livre. C'est une tradition que j'ai trouvée belle.",
    "Le soir, je suis descendu au bord de l'Elbe. Un vieux ferry traversait le fleuve, lentement, comme il le fait sans doute depuis cent ans. Des gens rentraient à vélo, fatigués et contents. Lutz m'avait raconté qu'il venait ici, jeune, pour se sentir libre, quand le pays était encore fermé. Je n'ai rien dit. Mais devant l'eau qui passait, je crois que j'ai compris.",
    "Demain, je reprendrai le train vers le sud. Les montagnes plus hautes ne sont pas loin, et bientôt le grès laissera la place au calcaire. Je ne sais pas encore où je dormirai demain soir, mais la corde est dans le sac et les chaussons sont secs. Ça me suffit. À bientôt !"
  ],
  en:[
    "Hi everyone! I left Sweden by night, on the ferry. By morning I was in Germany, and a train carried me down south, as far as Dresden, then into the valley of the Elbe. Here the landscape is different: a deep green forest, small villages along the river, and everywhere great towers of sandstone rising toward the sky. People call this place «Saxon Switzerland», even though the Alps are far away.",
    "In Rathen, I met Lutz. He's almost seventy and he has been climbing these towers since he was a child. Right away, he warned me: here, the rules are strict. No chalk, no metal gear — the sandstone is soft, and metal would damage it. «You're going to climb differently», he told me, smiling. I've already climbed big walls, but here, I listened like a beginner.",
    "The next day, we climbed a tower as thin as a needle. To protect yourself, you slide knots of rope into the cracks in the rock; the iron rings are rare and often very far apart. Exposure doesn't scare me, but this style forced me to climb slowly, to think before every move. Right at the top, in a little box hidden under a stone, you sign a book. It's a tradition I found beautiful.",
    "In the evening, I went down to the bank of the Elbe. An old ferry was crossing the river, slowly, the way it probably has for a hundred years. People were riding home by bike, tired and content. Lutz had told me that he used to come here, young, to feel free, back when the country was still closed. I said nothing. But in front of the passing water, I think I understood.",
    "Tomorrow, I'll take the train south again. The higher mountains aren't far, and soon the sandstone will give way to limestone. I don't yet know where I'll sleep tomorrow night, but the rope is in the bag and the climbing shoes are dry. That's enough for me. See you soon!"
  ],
  vocab:[
    ['le grès','sandstone'],['une tour','a tower'],
    ['une paroi','a (rock) wall, a face'],['une aiguille','a needle (here: a spire)'],
    ['la magnésie','climbing chalk'],['un coinceur','a metal protection piece (cam/nut)'],
    ['tendre','soft, tender'],
    ['abîmer','to damage, to spoil', FelixBlog.verb('abîmer',
      ["j'abîme","tu abîmes","il/elle abîme","nous abîmons","vous abîmez","ils/elles abîment"],
      ["j'ai abîmé","tu as abîmé","il/elle a abîmé","nous avons abîmé","vous avez abîmé","ils/elles ont abîmé"],
      ["j'abîmais","tu abîmais","il/elle abîmait","nous abîmions","vous abîmiez","ils/elles abîmaient"],
      ["j'abîmerai","tu abîmeras","il/elle abîmera","nous abîmerons","vous abîmerez","ils/elles abîmeront"])],
    ['un nœud','a knot'],['une fente','a crack, a crevice'],['un anneau','a ring (here: a ring bolt)'],
    ['l\'exposition (f.)','exposure (the airy drop below you)'],['un mouvement','a move, a movement'],
    ['grimper','to climb', FelixBlog.verb('grimper',
      ["je grimpe","tu grimpes","il/elle grimpe","nous grimpons","vous grimpez","ils/elles grimpent"],
      ["j'ai grimpé","tu as grimpé","il/elle a grimpé","nous avons grimpé","vous avez grimpé","ils/elles ont grimpé"],
      ["je grimpais","tu grimpais","il/elle grimpait","nous grimpions","vous grimpiez","ils/elles grimpaient"],
      ["je grimperai","tu grimperas","il/elle grimpera","nous grimperons","vous grimperez","ils/elles grimperont"])],
    ['prévenir','to warn', FelixBlog.verb('prévenir',
      ["je préviens","tu préviens","il/elle prévient","nous prévenons","vous prévenez","ils/elles préviennent"],
      ["j'ai prévenu","tu as prévenu","il/elle a prévenu","nous avons prévenu","vous avez prévenu","ils/elles ont prévenu"],
      ["je prévenais","tu prévenais","il/elle prévenait","nous prévenions","vous préveniez","ils/elles prévenaient"],
      ["je préviendrai","tu préviendras","il/elle préviendra","nous préviendrons","vous préviendrez","ils/elles préviendront"])],
    ['un fleuve','a river (one that flows to the sea)'],['un ferry','a ferry'],
    ['traverser','to cross', FelixBlog.verb('traverser',
      ["je traverse","tu traverses","il/elle traverse","nous traversons","vous traversez","ils/elles traversent"],
      ["j'ai traversé","tu as traversé","il/elle a traversé","nous avons traversé","vous avez traversé","ils/elles ont traversé"],
      ["je traversais","tu traversais","il/elle traversait","nous traversions","vous traversiez","ils/elles traversaient"],
      ["je traverserai","tu traverseras","il/elle traversera","nous traverserons","vous traverserez","ils/elles traverseront"])],
    ['des chaussons (m.)','climbing shoes'],['la corde','rope'],
    ['reprendre','to take again, to resume', FelixBlog.verb('reprendre',
      ["je reprends","tu reprends","il/elle reprend","nous reprenons","vous reprenez","ils/elles reprennent"],
      ["j'ai repris","tu as repris","il/elle a repris","nous avons repris","vous avez repris","ils/elles ont repris"],
      ["je reprenais","tu reprenais","il/elle reprenait","nous reprenions","vous repreniez","ils/elles reprenaient"],
      ["je reprendrai","tu reprendras","il/elle reprendra","nous reprendrons","vous reprendrez","ils/elles reprendront"])],
    ['une règle','a rule'],['un débutant','a beginner']
  ],
  gram:[
    {h:'The keystone, on rock: <em>passé composé</em> vs <em>imparfait</em>',
     p:'<b>Passé composé</b> for the events of the week: <span class="ex">j\'ai rencontré Lutz</span>, <span class="ex">nous avons grimpé une tour</span>, <span class="ex">je suis descendu au bord de l\'Elbe</span>. <b>Imparfait</b> for the backdrop and habits: <span class="ex">j\'étais en Allemagne</span>, <span class="ex">un vieux ferry traversait le fleuve</span>, <span class="ex">des gens rentraient à vélo</span>. And one step further back in time, the <em>plus-que-parfait</em> for the past-before-the-past: <span class="ex">Lutz m\'avait raconté…</span> Each verb below has a button (<span class="ex">▾</span>) that opens its full <em>présent / passé composé / imparfait / futur</em>.'},
    {h:'The <em>futur simple</em> — endings that never change',
     p:'Take the infinitive (drop a final <em>-e</em>) and add <span class="ex">-ai, -as, -a, -ons, -ez, -ont</span>: <span class="ex">je grimperai</span>, <span class="ex">le grès laissera la place au calcaire</span>, <span class="ex">je dormirai</span>. A handful of stems are irregular, but the endings stay the same: <span class="ex">je serai</span> (être), <span class="ex">j\'aurai</span> (avoir), <span class="ex">j\'irai</span> (aller), <span class="ex">je ferai</span> (faire). Open <span class="ex">reprendre</span> below and read its <em>Futur simple</em> column.'},
    {h:'<em>Futur proche</em> vs <em>futur simple</em>',
     p:'Two ways to look ahead. <b>Futur proche</b> = <em>aller</em> + infinitive, for the near or already-decided: <span class="ex">tu vas grimper autrement</span>. <b>Futur simple</b> feels a little more distant or more written: <span class="ex">demain, je reprendrai le train</span>. Both are correct — in everyday speech the <em>futur proche</em> is everywhere.'},
    {h:'<em>de</em> before a plural adjective — still seeding',
     p:'A plural adjective in <em>front</em> of its noun turns <em>des</em> into <em>de</em>: <span class="ex">de grandes tours</span>, <span class="ex">de petits villages</span>, <span class="ex">de grandes parois</span>. The same reflex you have carried since the Alps (<span class="ex">de grandes montagnes</span>) — by now it should fire on its own.'},
    {h:'Past participle agreeing with a <em>preceding</em> direct object',
     p:'With <em>avoir</em>, the participle normally stays put — but if the direct object comes <em>before</em> the verb, it agrees with it. <span class="ex">une tradition que j\'ai trouvée belle</span>: the object <em>que</em> (= <em>la tradition</em>, feminine singular) sits before <em>ai trouvée</em>, so it takes an <span class="ex">-e</span>. Compare the plain order: <span class="ex">j\'ai trouvé une tradition</span> <span class="arrow">→</span> no agreement.'}
  ]
});
