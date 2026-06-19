/* Week 14 — Le Grossglockner (Hohe Tauern, Autriche). One self-contained post
   resource: article (fr/en), vocab, grammar notes, map location. Registers itself
   with the engine. Felix rides south from Berchtesgaden into Austria for a roped
   glacier ascent of Austria's highest peak (3798 m): pre-dawn start, crampons and
   ice axe, crevasses on the Pasterze, an airy summit ridge. Guide: Karin, a calm,
   exact Bergführerin who reads snow bridges instinctively and notes how the glacier
   has shrunk. Competence is the baseline; one earned reflective beat on the rope
   (Saint-Exupéry register, §2a). This week's grammar focus: CONDITIONNEL PRÉSENT
   and SI + imparfait → conditionnel, plus the keystone, the de-plural seed, a future
   note. Escaping: CLAUDE.md §8. */
FelixBlog.register({
  id:'grossglockner', no:14, place:'Le Grossglockner (Hohe Tauern)', country:'Autriche', flag:'🇦🇹',
  date:'le 9 août 2026', lat:47.0744, lng:12.6948,
  title:'Au sommet du Grossglockner', titleEn:'On the summit of the Grossglockner',
  level:'hard A2',
  fr:[
    "Salut à tous ! De Berchtesgaden, je suis passé en Autriche par la route, vers le sud, jusqu'au cœur des Hohe Tauern. Ici se dresse le Grossglockner, le plus haut sommet du pays. De grandes montagnes blanches ferment la vallée, et un long glacier, la Pasterze, descend entre elles. J'ai retrouvé cette odeur de glace et de pierre froide que je connais depuis Chamonix, depuis les étés avec mon grand-père.",
    "Au refuge, j'ai fait la connaissance de Karin, ma guide. C'est une Bergführerin autrichienne, calme et précise, qui grimpe ici depuis vingt ans. Elle lit la neige et la glace comme on lit une page. Le premier jour, nous avons marché jusqu'au glacier pour réviser : nœuds, crampons, piolet, et comment freiner. « Si on tombait dans une crevasse, il faudrait réagir vite », m'a-t-elle dit, sans aucun drame. Je connais ces gestes, mais on les répète toujours.",
    "Le jour de l'ascension, nous nous sommes levés à deux heures du matin. Il faisait noir et froid, et le ciel était plein d'étoiles. Encordés, lampe au front, nous sommes montés lentement sur le glacier. Karin choisissait le chemin entre les crevasses, posant le pied sur les ponts de neige avec une confiance tranquille. Quand on partage la même corde, on n'a pas besoin de parler : chacun sait que l'autre est là.",
    "Le haut de la montagne était une arête fine, aérienne, avec le vide des deux côtés. Le soleil s'est levé pendant qu'on grimpait, et la neige est devenue rose. L'exposition ne me fait pas peur ; j'ai avancé pas à pas, calme. Au sommet, Karin m'a montré la Pasterze tout en bas. « Avant, la glace arrivait beaucoup plus haut », a-t-elle dit. Le glacier a beaucoup reculé depuis qu'elle a commencé. Elle ne s'est pas plainte ; elle a juste constaté.",
    "Les jours suivants, j'ai marché plus bas, le long des sentiers, pour laisser reposer les jambes. Demain, je descendrai vers le sud, vers la Slovénie : les Alpes juliennes ne sont pas loin, et j'y ai de vieux amis. Si j'avais le temps, je resterais une semaine de plus ici. Mais la corde est sèche et le sac est prêt. À bientôt !"
  ],
  en:[
    "Hi everyone! From Berchtesgaden, I crossed into Austria by road, heading south, all the way to the heart of the Hohe Tauern. Here rises the Grossglockner, the country's highest peak. Great white mountains close off the valley, and a long glacier, the Pasterze, comes down between them. I rediscovered that smell of ice and cold stone that I have known since Chamonix, since the summers with my grandfather.",
    "At the hut, I got to know Karin, my guide. She's an Austrian Bergführerin, calm and exact, who has been climbing here for twenty years. She reads the snow and the ice the way one reads a page. The first day, we walked up to the glacier to go over things again: knots, crampons, ice axe, and how to brake. «If we fell into a crevasse, we'd have to react fast», she told me, without any drama. I know these moves, but you always rehearse them.",
    "On the day of the climb, we got up at two in the morning. It was dark and cold, and the sky was full of stars. Roped together, headlamps on, we went up the glacier slowly. Karin chose the way between the crevasses, setting her foot on the snow bridges with a quiet confidence. When you share the same rope, you don't need to talk: each one knows the other is there.",
    "The top of the mountain was a thin, airy ridge, with the drop on both sides. The sun rose while we were climbing, and the snow turned pink. Exposure doesn't scare me; I moved step by step, calm. At the summit, Karin pointed out the Pasterze far below. «Before, the ice came up much higher», she said. The glacier has shrunk a lot since she started. She didn't complain; she just noted it.",
    "The following days, I walked lower down, along the trails, to let my legs rest. Tomorrow, I'll head south, toward Slovenia: the Julian Alps aren't far, and I have old friends there. If I had the time, I'd stay one more week here. But the rope is dry and the bag is packed. See you soon!"
  ],
  vocab:[
    ['un sommet','a summit, a peak'],['un glacier','a glacier'],
    ['une crevasse','a crevasse'],['un pont de neige','a snow bridge'],
    ['une arête','a ridge'],['aérien(ne)','airy, exposed (high in the air)'],
    ['le vide','the void, the empty drop'],['l\'exposition (f.)','exposure (the airy drop below you)'],
    ['les crampons (m.)','crampons'],['un piolet','an ice axe'],
    ['une lampe frontale','a headlamp'],['un refuge','a mountain hut'],
    ['une guide','a (female) guide'],
    ['se dresser','to rise, to stand up', FelixBlog.verb('se dresser',
      ["je me dresse","tu te dresses","il/elle se dresse","nous nous dressons","vous vous dressez","ils/elles se dressent"],
      ["je me suis dressé(e)","tu t'es dressé(e)","il/elle s'est dressé(e)","nous nous sommes dressé(e)s","vous vous êtes dressé(e)(s)","ils/elles se sont dressé(e)s"],
      ["je me dressais","tu te dressais","il/elle se dressait","nous nous dressions","vous vous dressiez","ils/elles se dressaient"],
      ["je me dresserai","tu te dresseras","il/elle se dressera","nous nous dresserons","vous vous dresserez","ils/elles se dresseront"])],
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
    ['freiner','to brake, to slow down', FelixBlog.verb('freiner',
      ["je freine","tu freines","il/elle freine","nous freinons","vous freinez","ils/elles freinent"],
      ["j'ai freiné","tu as freiné","il/elle a freiné","nous avons freiné","vous avez freiné","ils/elles ont freiné"],
      ["je freinais","tu freinais","il/elle freinait","nous freinions","vous freiniez","ils/elles freinaient"],
      ["je freinerai","tu freineras","il/elle freinera","nous freinerons","vous freinerez","ils/elles freineront"])],
    ['reculer','to recede, to retreat, to move back', FelixBlog.verb('reculer',
      ["je recule","tu recules","il/elle recule","nous reculons","vous reculez","ils/elles reculent"],
      ["j'ai reculé","tu as reculé","il/elle a reculé","nous avons reculé","vous avez reculé","ils/elles ont reculé"],
      ["je reculais","tu reculais","il/elle reculait","nous reculions","vous reculiez","ils/elles reculaient"],
      ["je reculerai","tu reculeras","il/elle reculera","nous reculerons","vous reculerez","ils/elles reculeront"])],
    ['constater','to note, to observe (a fact)', FelixBlog.verb('constater',
      ["je constate","tu constates","il/elle constate","nous constatons","vous constatez","ils/elles constatent"],
      ["j'ai constaté","tu as constaté","il/elle a constaté","nous avons constaté","vous avez constaté","ils/elles ont constaté"],
      ["je constatais","tu constatais","il/elle constatait","nous constations","vous constatiez","ils/elles constataient"],
      ["je constaterai","tu constateras","il/elle constatera","nous constaterons","vous constaterez","ils/elles constateront"])],
    ['se plaindre','to complain', FelixBlog.verb('se plaindre',
      ["je me plains","tu te plains","il/elle se plaint","nous nous plaignons","vous vous plaignez","ils/elles se plaignent"],
      ["je me suis plaint(e)","tu t'es plaint(e)","il/elle s'est plaint(e)","nous nous sommes plaint(e)s","vous vous êtes plaint(e)(s)","ils/elles se sont plaint(e)s"],
      ["je me plaignais","tu te plaignais","il/elle se plaignait","nous nous plaignions","vous vous plaigniez","ils/elles se plaignaient"],
      ["je me plaindrai","tu te plaindras","il/elle se plaindra","nous nous plaindrons","vous vous plaindrez","ils/elles se plaindront"])]
  ],
  gram:[
    {h:'The keystone, on ice: <em>passé composé</em> vs <em>imparfait</em>',
     p:'<b>Passé composé</b> for the events of the week: <span class="ex">je suis passé en Autriche</span>, <span class="ex">nous nous sommes levés à deux heures</span>, <span class="ex">le soleil s\'est levé</span>. <b>Imparfait</b> for the backdrop and description: <span class="ex">il faisait noir et froid</span>, <span class="ex">le ciel était plein d\'étoiles</span>, <span class="ex">Karin choisissait le chemin</span>. The events happen once; the backdrop is just there around them. Each verb below has a button (<span class="ex">▾</span>) that opens its full <em>présent / passé composé / imparfait / futur</em>.'},
    {h:'The <em>conditionnel présent</em> — the "would" form',
     p:'Build it from the <b>futur stem</b> plus the <b>imparfait endings</b> (<span class="ex">-ais, -ais, -ait, -ions, -iez, -aient</span>): <span class="ex">je resterais</span> (I would stay), <span class="ex">il faudrait réagir vite</span> (we\'d have to react fast), <span class="ex">ce serait plus sûr</span> (that would be safer). Use it for politeness and for hypothesis: <span class="ex">on pourrait partir plus tôt</span> <span class="arrow">→</span> we could leave earlier. Notice the endings are exactly the <em>imparfait</em> ones, just glued to the future stem.'},
    {h:'<em>Si</em> + imparfait <span class="arrow">→</span> conditionnel (the "what if")',
     p:'For an imagined, not-real situation, the pattern is: <em>si</em> + <b>imparfait</b> in one half, <b>conditionnel</b> in the other. <span class="ex">Si on tombait dans une crevasse, il faudrait réagir vite</span> <span class="arrow">→</span> if we fell in, we\'d have to react. <span class="ex">Si j\'avais le temps, je resterais une semaine de plus</span> <span class="arrow">→</span> if I had the time, I\'d stay another week. Nothing here is really happening — it is a supposition.'},
    {h:'The <em>futur simple</em> — and <em>futur proche</em> beside it',
     p:'<b>Futur simple</b>: the future stem plus <span class="ex">-ai, -as, -a, -ons, -ez, -ont</span>: <span class="ex">je descendrai vers le sud</span>, <span class="ex">je monterai</span>. A few stems are irregular but the endings never change: <span class="ex">je serai</span>, <span class="ex">j\'aurai</span>, <span class="ex">il faudra</span>. <b>Futur proche</b> = <em>aller</em> + infinitive, for the near or decided: <span class="ex">je vais descendre demain</span>. Same future stem feeds the <em>conditionnel</em> above — learn it once, use it twice.'},
    {h:'<em>de</em> before a plural adjective — still seeding',
     p:'A plural adjective <em>in front</em> of its noun turns <em>des</em> into <em>de</em>: <span class="ex">de grandes montagnes blanches</span>, <span class="ex">de vieux amis</span>. The same reflex you have carried since the Alps (<span class="ex">de petits villages</span>, <span class="ex">de grandes parois</span>) — by now it should fire on its own.'}
  ]
});
