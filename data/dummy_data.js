import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Survival Horror', '#f5428d'),
  new Category('c2', 'Accion y Aventura', '#f54242'),
  new Category('c3', 'Fighter', '#f5a442'),
  new Category('c4', 'Battle Royale', '#f5d142'),
  new Category('c5', 'Match', '#368dff'),
  new Category('c6', 'Indi', '#41d95d'),
  new Category('c7', 'RPG', '#9eecff'),
  new Category('c8', 'Moba', '#b9ffb0'),
  new Category('c9', 'Horror', '#ffc7ff'),
  new Category('c10', 'Mundo Libre', '#47fced')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Resident Evil 4',
    '',
    '',
    'https://image.api.playstation.com/vulcan/ap/rnd/202010/0501/ph4tgwDaQqHkj84fKrGjye8D.png',
    'Resident Evil 4 (llamado Biohazard 4 (バイオハザード Baiohazādo Fō?) en Japón) es la cuarta entrega numerada y el sexto juego de la serie principal de la popular saga de survival horror Resident Evil creada por la compañía nipona Capcom siendo distribuido por otras compañías como Nintendo Australia, Ubisoft, THQ Asia Pacific y Red Ant Enterprises. Como es común en esta serie tiene una clasificación D originalmente en Japón, +18 en Europa y M (Mature 17+) en América del Norte. Originalmente se estrenó sólo para Nintendo GameCube siendo lanzado el 11 de enero de 2005 en Norteamérica, el 27 de Enero en Japón y el 18 de marzo de ese mismo año en Europa, pero luego se desarrolló también para PlayStation 2 siendo lanzado el 25 de octubre de 2005 en Norteamérica, el 4 de noviembre de 2005 en Europa y el 1 de diciembre de 2005 en el país nipón. Y estaría disponible ademas en PC desde el 2 de marzo de 2007, con otra versión ya lanzada (31 de mayo de 2007) para Nintendo Wii. Una adaptación para la consola brasileña Zeebo fue lanzada el 11 de agosto de 2009, basada en la versión para móviles del juego.',
    '',
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Super Mario Bros',
    '',
    '',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTBFe2zv6n1YRUS5jDsPuhcMuiC1grDFQzQ&s',
    'El juego describe las aventuras de dos fontaneros, Mario y Luigi, quienes deben rescatar a la Princesa Peach, quién fue secuestrada por el rey de los Koopas, Bowser y salvar al Reino Champiñón de este mismo. A través de ocho diferentes niveles de juego, los jugadores pueden controlar a uno de los dos hermanos y deben enfrentarse finalmente a cada uno de los enemigos de cada castillo para liberar a la Princesa Peach.',
    '',
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Guilty Gear Strive',
    '',
    '',
    'https://www.fantasymundo.com/wp-content/uploads/2021/07/Guilty-Gear-Strive-portada.jpg',
    'Guilty Gear -Strive- es la séptima entrega principal y, en general, es el vigésimo quinto lanzamiento de la serie Guilty Gear , y pretende ser una "reconstrucción completa" de la franquicia para principiantes. Anunciado en Evo 2019 , el juego se lanzó en todo el mundo para PlayStation 4, PlayStation 5 y Steam el 11 de junio de 2021, mientras que la versión arcade se lanzó el 29 de julio de 2021 y se distribuyó a través de ALL.Net P-ras MULTI Version 3 de Sega Interactive. También se espera que se lance en Xbox One y Xbox Series X|S a través de Game Pass en algún momento de 2023.',
    '',
    [
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Call of Duty: Warzone',
    '',
    '',
    'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/wz/overview/WZPLP_Hero.webp',
    'El modo Battle Royale de Warzone presenta un enorme mapa en el mundo de Verdansk que 150 jugadores, en equipos de tres, deberán saquear y combatir con el objetivo de ser el último escuadrón en quedar en pie en un tiroteo colosal. En este nuevo Battle Royale, los jugadores de cualquier nivel y estilo encontrarán nuevas formas de jugar y conseguir recompensas.',
    '',
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c3'],
    'The Black Heart',
    '',
    '',
    'https://static.wikia.nocookie.net/mugen/images/a0/04/Black_Heart_Cover_Art.jpg/revision/latest?cb=20110515143420',
    'En un mundo paralelo al real que alguna vez fue hermoso, ahora se encuentra teñido de rojo debido a las guerras y el cáoz. Los humanos siempre han ignorado la existencia de este mundo ya que sus destinos nunca se vieron ligados, hasta ahora. El rey y creador de este mundo, a pesar de su inmenso poder, fue debilitándose. Aprovechando esta situación, un ser abominable llamado Final, lo asesinó y le arrancó el corazón, el cual contiene el poder con el que ese mundo fue creado. Se dice que quien posea dicho corazón obtendrá un poder inigualable que podría terminar con ambos mundos si cae en las manos equivocadas...',
    '',
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Hollow knight',
    '',
    '',
    'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg?t=1695270428',
    'Hollow Knight, una aventura épica a través de un vasto reino de insectos y héroes que se encuentra en ruinas. Explora cavernas tortuosas, combate contra criaturas corrompidas y entabla amistad con extraños insectos, todo en un estilo clásico en 2D dibujado a mano.',
    '',
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7','c10'],
    'Elden Ring',
    '',
    '',
    'https://p325k7wa.twic.pics/high/elden-ring/elden-ring/03-news/ER-SOTE-announcement.jpg?twic=v1/cover=500x556/step=10/quality=80',
    '',
    '',
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'League of Legends',
    '2009',
    'SALIDA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOtx-0tBbg17n3aoTeDK3kqUMRoA9XFuyTA&s',
    'AÑO DE',
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Outlats',
    '2013',
    'SALIDA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaqMAYPEnIHIfKrxzK4iW3d-xciPAr_n2Ng&s',
    'AÑO DE',
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c5'],
    'Candy Crush Saga',
    '2012',
    'SALIDA',
    'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Candy_Crush_logo.png/220px-Candy_Crush_logo.png',
    'AÑO DE',
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
    true,
    true,
    true,
    true
  )
];