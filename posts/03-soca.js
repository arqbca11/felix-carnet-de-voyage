/* Week 3 — Vallée de la Soča. One self-contained post resource: article (fr/en),
   vocab, grammar notes, and map location. Registers itself with the blog engine.
   Schema & escaping rules: see CLAUDE.md §6 and §8. */
FelixBlog.register({
  id:'soca', no:3, place:'Vallée de la Soča', country:'Slovénie', flag:'🇸🇮',
  date:'le 24 mai 2026', lat:46.3375, lng:13.5526,
  title:'Rafting sur la Soča', titleEn:'Rafting on the Soča',
  fr:[
    "Salut à tous ! En Slovénie, j'ai troqué la corde contre une pagaie. La vallée de la Soča est célèbre pour une chose : ses rapides. L'eau de la rivière a une couleur incroyable, un vert turquoise — mais ne vous fiez pas à sa beauté, elle est puissante et glaciale.",
    "J'ai déjà fait du rafting, en France et au Népal, donc j'étais à l'aise. Je me suis joint à une équipe de six personnes, avec un guide local, Anže. Avant de partir, il nous a expliqué les ordres : « En avant ! », « Stop ! », « À gauche ! ». Sur l'eau, tout va très vite : il faut écouter et pagayer ensemble, sinon le raft tourne.",
    "Le premier gros rapide s'appelle « la machine à laver ». Le nom est parfait : pendant dix secondes, on ne voit plus que de l'eau blanche, et le bateau danse dans tous les sens. Un de mes coéquipiers est tombé à l'eau. On l'a attrapé par le gilet et on l'a remonté en riant — il allait très bien.",
    "Après deux heures, mes bras étaient morts, mais j'avais le sourire jusqu'aux oreilles. Le froid, la vitesse, l'eau dans la figure : j'adore cette sensation. Anže m'a dit que je pagaie bien pour un Anglais. Je crois que c'était un compliment.",
    "La prochaine fois, je change complètement de décor : je descends vers la mer. Place au soleil et au sel ! À bientôt !"
  ],
  en:[
    "Hi everyone! In Slovenia, I traded the rope for a paddle. The Soča Valley is famous for one thing: its rapids. The river water is an incredible colour, a turquoise green — but don't be fooled by its beauty, it's powerful and freezing.",
    "I've rafted before, in France and in Nepal, so I was at ease. I joined a team of six, with a local guide, Anže. Before we set off, he explained the commands: 'Forward!', 'Stop!', 'Left!'. On the water everything happens fast: you have to listen and paddle together, or the raft spins.",
    "The first big rapid is called 'the washing machine'. The name is perfect: for ten seconds all you can see is white water, and the boat dances every which way. One of my teammates fell in. We grabbed him by his life jacket and hauled him back up, laughing — he was completely fine.",
    "After two hours my arms were dead, but I was grinning from ear to ear. The cold, the speed, the water in your face: I love that feeling. Anže told me I paddle well for an Englishman. I think it was a compliment.",
    "Next time, a complete change of scene: I'm heading down to the sea. Bring on the sun and the salt! See you soon!"
  ],
  vocab:[
    ['une pagaie','a paddle'],['pagayer','to paddle'],['les rapides','the rapids'],
    ['puissant(e)','powerful'],['une équipe','a team'],['un ordre','an order, a command'],
    ['un gilet (de sauvetage)','a (life) jacket'],['tomber à l\'eau','to fall into the water'],['attraper','to grab, to catch'],
    ['en avant','forward'],['le sourire','the smile'],['une sensation','a feeling, a sensation']
  ],
  gram:[
    {h:'Past tense again: feeling vs event',
     p:'One more pass at the split. <b>Imparfait</b> for how things were: <span class="ex">mes bras étaient morts</span>, <span class="ex">elle est puissante et glaciale</span>. <b>Passé composé</b> for the single events: <span class="ex">un coéquipier est tombé à l\'eau</span>, <span class="ex">on l\'a attrapé</span>, <span class="ex">je me suis joint à l\'équipe</span>. It should be starting to feel automatic.'},
    {h:'The <em>gérondif</em>: <em>en</em> + -ant',
     p:'<em>en</em> + the -ant form = "while / by doing" two things at once: <span class="ex">on l\'a remonté en riant</span> <span class="arrow">→</span> we hauled him back up <em>while laughing</em>. Build it from the <em>nous</em> form: <em>nous rions</em> → <span class="ex">en riant</span>; <em>nous mangeons</em> → <span class="ex">en mangeant</span>.'},
    {h:'Giving instructions: <em>il faut</em> + the imperative',
     p:'For what must be done: <em>il faut</em> + infinitive: <span class="ex">il faut écouter et pagayer ensemble</span> <span class="arrow">→</span> you have to listen and paddle together. For direct commands, the imperative: <span class="ex">« En avant ! »</span>, <span class="ex">ne vous fiez pas à sa beauté</span> (don\'t be fooled by its beauty).'}
  ]
});
