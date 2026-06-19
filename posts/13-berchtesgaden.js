/* Week 13 — Berchtesgaden (Allemagne, massif du Watzmann). One self-contained post
   resource: article (fr/en), vocab, grammar notes, map location. Registers itself with
   the engine. Felix rides from Dresden via Munich into the Bavarian Alps — the soft
   Saxon sandstone gives way at last to big limestone walls: a hard via ferrata, ridge
   walking, a night in an Alpine hut with Sepp the warden, the emerald Königssee below.
   One earned reflective beat (Saint-Exupéry register, §2a). Comparatives/superlatives
   and venir de + inf are this week's focus; the future stays in play; every VERB entry
   carries FelixBlog.verb(...). Escaping: CLAUDE.md §8. */
FelixBlog.register({
  id:'berchtesgaden', no:13, place:'Berchtesgaden', country:'Allemagne', flag:'🇩🇪',
  date:'le 2 août 2026', lat:47.6307, lng:12.9886,
  title:'Le calcaire du Watzmann', titleEn:'The limestone of the Watzmann',
  level:'mid A2',
  fr:[
    "Salut à tous ! De Dresde, j'ai pris le train vers le sud, j'ai changé à Munich, et le soir même j'étais en Bavière, au pied du Watzmann. Quel changement ! La semaine dernière, je grimpais sur du grès tendre ; ici, le rocher est gris et dur. Le calcaire enfin ! Le Watzmann est l'un des plus hauts sommets d'Allemagne, et ses parois sont bien plus raides que les tours de la Suisse saxonne.",
    "Je dormais dans un refuge tenu par Sepp, un Bavarois d'une soixantaine d'années. Il connaît la montagne par cœur et lit le temps mieux que n'importe quel téléphone. « Demain, beau le matin, orage l'après-midi », m'a-t-il dit. Le lendemain, à quinze heures, le ciel est devenu noir, exactement comme il l'avait annoncé. Sepp est aussi le plus généreux des hôtes : chaque soir, il me servait deux fois trop à manger.",
    "Le grand jour, j'ai fait une via ferrata difficile. On s'encorde sur un câble d'acier et on monte de barreau en barreau, avec le vide sous les pieds. L'exposition ne me dérange pas — je me sens chez moi sur le rocher. Le plus beau, ici, c'est le regard en bas : tout au fond, le Königssee, le plus beau lac que j'ai vu depuis longtemps, vert comme une émeraude entre les murs de calcaire.",
    "Les autres jours, j'ai marché sur les crêtes. Là-haut, le sentier est étroit, le vent ne s'arrête jamais, et de grandes parois tombent des deux côtés. On avance seul, mais pas vraiment seul : on croise d'autres marcheurs, un mot, un sourire, et on continue. Le soir, fatigué et content, j'ai compris une chose simple : la montagne ne te donne rien ; elle te rend seulement ce que tu lui apportes.",
    "Sepp vient de me dire que le beau temps va durer encore quelques jours. Je vais donc continuer plus au sud, plus loin dans les Alpes, là où les sommets sont encore plus hauts. Je ne sais pas quelle vallée je choisirai, mais le calcaire m'appelle et le sac est prêt. À bientôt !"
  ],
  en:[
    "Hi everyone! From Dresden I took the train south, changed in Munich, and that same evening I was in Bavaria, at the foot of the Watzmann. What a change! Last week I was climbing on soft sandstone; here the rock is grey and hard. Limestone at last! The Watzmann is one of the highest peaks in Germany, and its faces are far steeper than the towers of Saxon Switzerland.",
    "I was sleeping in a hut run by Sepp, a Bavarian in his sixties. He knows the mountain by heart and reads the weather better than any phone. «Tomorrow, fine in the morning, storm in the afternoon», he told me. The next day, at three o'clock, the sky turned black, exactly as he had announced. Sepp is also the most generous of hosts: every evening, he served me twice too much to eat.",
    "On the big day, I did a hard via ferrata. You clip onto a steel cable and climb rung by rung, with the void beneath your feet. The exposure doesn't bother me — I feel at home on rock. The finest thing here is the look down below: far at the bottom, the Königssee, the most beautiful lake I've seen in a long time, green as an emerald between the limestone walls.",
    "On the other days, I walked along the ridges. Up there, the path is narrow, the wind never stops, and great walls drop away on both sides. You move alone, but not really alone: you cross other walkers, a word, a smile, and you go on. In the evening, tired and content, I understood one simple thing: the mountain gives you nothing; it only gives back what you bring to it.",
    "Sepp has just told me that the good weather is going to last a few more days. So I'm going to keep going further south, deeper into the Alps, where the peaks are higher still. I don't know which valley I'll choose, but the limestone is calling me and the bag is packed. See you soon!"
  ],
  vocab:[
    ['le calcaire','limestone'],['le grès','sandstone'],
    ['une paroi','a (rock) wall, a face'],['un sommet','a summit, a peak'],
    ['raide','steep'],['une crête','a ridge'],
    ['un refuge','a mountain hut'],['un hôte','a host'],
    ['une via ferrata','a via ferrata (cabled climbing route)'],
    ['un câble','a cable'],['l\'acier (m.)','steel'],['un barreau','a rung'],
    ['le vide','the void, the drop'],['l\'exposition (f.)','exposure (the airy drop below you)'],
    ['un orage','a thunderstorm'],['une émeraude','an emerald'],
    ['s\'encorder','to rope up', FelixBlog.verb('s\'encorder',
      ["je m'encorde","tu t'encordes","il/elle s'encorde","nous nous encordons","vous vous encordez","ils/elles s'encordent"],
      ["je me suis encordé(e)","tu t'es encordé(e)","il/elle s'est encordé(e)","nous nous sommes encordé(e)s","vous vous êtes encordé(e)s","ils/elles se sont encordé(e)s"],
      ["je m'encordais","tu t'encordais","il/elle s'encordait","nous nous encordions","vous vous encordiez","ils/elles s'encordaient"],
      ["je m'encorderai","tu t'encorderas","il/elle s'encordera","nous nous encorderons","vous vous encorderez","ils/elles s'encorderont"])],
    ['monter','to climb up, to go up', FelixBlog.verb('monter',
      ["je monte","tu montes","il/elle monte","nous montons","vous montez","ils/elles montent"],
      ["je suis monté(e)","tu es monté(e)","il/elle est monté(e)","nous sommes monté(e)s","vous êtes monté(e)s","ils/elles sont monté(e)s"],
      ["je montais","tu montais","il/elle montait","nous montions","vous montiez","ils/elles montaient"],
      ["je monterai","tu monteras","il/elle montera","nous monterons","vous monterez","ils/elles monteront"])],
    ['servir','to serve', FelixBlog.verb('servir',
      ["je sers","tu sers","il/elle sert","nous servons","vous servez","ils/elles servent"],
      ["j'ai servi","tu as servi","il/elle a servi","nous avons servi","vous avez servi","ils/elles ont servi"],
      ["je servais","tu servais","il/elle servait","nous servions","vous serviez","ils/elles servaient"],
      ["je servirai","tu serviras","il/elle servira","nous servirons","vous servirez","ils/elles serviront"])],
    ['annoncer','to announce, to forecast', FelixBlog.verb('annoncer',
      ["j'annonce","tu annonces","il/elle annonce","nous annonçons","vous annoncez","ils/elles annoncent"],
      ["j'ai annoncé","tu as annoncé","il/elle a annoncé","nous avons annoncé","vous avez annoncé","ils/elles ont annoncé"],
      ["j'annonçais","tu annonçais","il/elle annonçait","nous annoncions","vous annonciez","ils/elles annonçaient"],
      ["j'annoncerai","tu annonceras","il/elle annoncera","nous annoncerons","vous annoncerez","ils/elles annonceront"])],
    ['durer','to last', FelixBlog.verb('durer',
      ["je dure","tu dures","il/elle dure","nous durons","vous durez","ils/elles durent"],
      ["j'ai duré","tu as duré","il/elle a duré","nous avons duré","vous avez duré","ils/elles ont duré"],
      ["je durais","tu durais","il/elle durait","nous durions","vous duriez","ils/elles duraient"],
      ["je durerai","tu dureras","il/elle durera","nous durerons","vous durerez","ils/elles dureront"])]
  ],
  gram:[
    {h:'The keystone again: <em>passé composé</em> vs <em>imparfait</em>',
     p:'<b>Passé composé</b> for the events of the week: <span class="ex">j\'ai pris le train</span>, <span class="ex">j\'ai fait une via ferrata</span>, <span class="ex">j\'ai marché sur les crêtes</span>. <b>Imparfait</b> for the backdrop, description and habit: <span class="ex">j\'étais en Bavière</span>, <span class="ex">je dormais dans un refuge</span>, <span class="ex">il me servait deux fois trop à manger</span>. One step further back, the <em>plus-que-parfait</em> for the past-before-the-past: <span class="ex">comme il l\'avait annoncé</span>. Each verb below opens its full <em>présent / passé composé / imparfait / futur</em> with the <span class="ex">▾</span> button.'},
    {h:'Comparatives — <em>plus / moins / aussi … que</em>',
     p:'To compare, frame the adjective: <span class="ex">plus … que</span> (more), <span class="ex">moins … que</span> (less), <span class="ex">aussi … que</span> (as): <span class="ex">ses parois sont bien plus raides que les tours de grès</span>, <span class="ex">le calcaire est plus dur que le grès</span>. <em>bien</em> in front strengthens it <span class="arrow">→</span> "far steeper". Watch the one irregular: <em>bon</em> becomes <span class="ex">meilleur</span>, not "plus bon".'},
    {h:'Superlatives — <em>le / la plus …</em>',
     p:'Add the article to the comparative for "the most": <span class="ex">l\'un des plus hauts sommets d\'Allemagne</span>, <span class="ex">le plus beau lac</span>, <span class="ex">le plus généreux des hôtes</span>. If the adjective normally follows the noun, repeat the article: <span class="ex">le lac le plus vert</span>. The same superlative reflex you met in the Alps and on the Kungsleden. And the old micro-pattern still holds: a plural adjective <em>before</em> its noun turns <em>des</em> into <em>de</em> <span class="arrow">→</span> <span class="ex">de grandes parois</span>.'},
    {h:'<em>venir de</em> + infinitive — the recent past',
     p:'<em>venir de</em> + infinitive means "to have just done something": <span class="ex">Sepp vient de me dire que le beau temps va durer</span> <span class="arrow">→</span> he has just told me. Compare a weather example: <span class="ex">il vient de neiger</span> <span class="arrow">→</span> it has just snowed. Put it in the <em>imparfait</em> and it means "had just": <span class="ex">il venait d\'arriver</span>.'},
    {h:'Looking ahead — <em>futur proche</em> and <em>futur simple</em>',
     p:'<b>Futur proche</b> (<em>aller</em> + infinitive) for the near, decided plan: <span class="ex">je vais continuer plus au sud</span>, <span class="ex">le beau temps va durer</span>. <b>Futur simple</b> feels a touch more distant or written, with its fixed endings <span class="ex">-ai, -as, -a, -ons, -ez, -ont</span>: <span class="ex">quelle vallée je choisirai</span>. Remember the irregular stems: <span class="ex">je serai</span>, <span class="ex">j\'aurai</span>, <span class="ex">j\'irai</span>, <span class="ex">je ferai</span>.'}
  ]
});
