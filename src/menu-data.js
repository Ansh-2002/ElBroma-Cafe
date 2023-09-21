import { v4 as uuid4 } from "uuid";

// const bakery = [
//   {
//     "teacakes": [
//                 {
//                 name: "teacake 1",
//                 price: 2.0,
//                 description: "Freshly baked bread",
//                 image: "/assets/img/menu/spinach-salad.jpg",
//                 category: "teacakes",
//                 id: 1,
//                 },
//                 {
//                 name: "teacake 2",
//                 price: 1.0,
//                 description: "Freshly baked bagel",
//                 image: "/assets/img/menu/spinach-salad.jpg",
//                 category: "teacakes",
//                 id: 2,
//                 },
//                 {
//                 name: "teacake 3",
//                 price: 1.5,
//                 description: "Freshly baked croissant",
//                 image: "/assets/img/menu/spinach-salad.jpg",
//                 category: "teacakes",
//                 id: 3,
//                 },
//             ]
//         }
//   ,{
//     "pastry": [
//                 {
//                 name: "pastry 1",
//                 price: 2.0,
//                 description: "Freshly baked bread",
//                 image: "/assets/img/menu/spinach-salad.jpg",
//                 category: "pastry",
//                 id: 4,
//                 },
//                 {
//                 name: "pastry 2",
//                 price: 1.0,
//                 description: "Freshly baked bagel",
//                 image: "/assets/img/menu/spinach-salad.jpg",
//                 category: "pastry",
//                 id: 5,
//                 },
//             ]
//     }
// ];

const bakery = [
  {
    name: "Tea Cakes",
    uuid: uuid4(),
    data: [
      {
        name: "Vanilla Tea Cake",
        price: 179,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/bakery/TeaCakes/Vanilla.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Choco Chip Tea Cake",
        price: 179,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/bakery/TeaCakes/ChocoChip.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Marble Tea Cake",
        price: 189,
        description: "Espresso shot mixed with ice",
        image: "/assets/img/menu/bakery/TeaCakes/Marble.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Chocolate Tea Cake",
        price: 189,
        description: "Espresso with chocolate and milk foam",
        image: "/assets/img/menu/bakery/TeaCakes/Chocolate.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Choco Walnut Tea Cake",
        price: 199,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/bakery/TeaCakes/ChocoWalnut.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Dry Fruit Tea Cake",
        price: 219,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/bakery/TeaCakes/DryFruit.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Berrylicious Tea Cake",
        price: 229,
        description: "Espresso shot mixed with ice",
        image: "/assets/img/menu/bakery/TeaCakes/Berrylicious.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Banana Walnut Tea Cake",
        price: 229,
        description: "Espresso with chocolate and milk foam",
        image: "/assets/img/menu/bakery/TeaCakes/BananaWalnut.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Pastry",
    uuid: uuid4(),
    data: [
      {
        name: "Pineapple Cream Cheese",
        price: 219,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/bakery/Pastry/Pineapple.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Chocolate Access",
        price: 269,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/bakery/Pastry/ChocolateAccess.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Brownie & Muffins",
    uuid: uuid4(),
    data: [
      {
        name: "Walnut Brownie",
        price: 249,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/bakery/BrownieAndMuffins/WalnutBrownie.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Brownie with Ice Cream",
        price: 269,
        description: "Espresso with milk foam",
        image:
          "/assets/img/menu/bakery/BrownieAndMuffins/BrownieWithIceCream.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Vanilla Muffin",
        price: 109,
        description: "Espresso mixed with condensed milk",
        image: "/assets/img/menu/bakery/BrownieAndMuffins/VanillaMuffin.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Blueberry Muffin",
        price: 119,
        description: "Classic Latte without caffeine",
        image: "/assets/img/menu/bakery/BrownieAndMuffins/BlueberryMuffin.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Chocolate Muffin",
        price: 129,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/bakery/BrownieAndMuffins/ChocolateMuffin.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Choco Chip Muffin",
        price: 129,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/bakery/BrownieAndMuffins/ChocoChipMuffin.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Cookies",
    uuid: uuid4(),
    data: [
      {
        name: "Choco Chip",
        price: 60,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/bakery/cookies/ChocoChip.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Oats & Raisins",
        price: 60,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/bakery/cookies/OatsAndRaisins.jpeg",
        uuid: uuid4(),
      },
    ],
  },
];
const beverages = [
  {
    name: "Espressos",
    uuid: uuid4(),
    data: [
      {
        name: "Espresso",
        price: 169,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/beverages/Espressos/Espresso.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Maachiato",
        price: 189,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/beverages/Espressos/Maachiato.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Americano",
        price: 199,
        description: "Espresso shot mixed with ice",
        image: "/assets/img/menu/beverages/Espressos/Americano.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Cafe Medici",
        price: 219,
        description: "Espresso with chocolate and milk foam",
        image: "/assets/img/menu/beverages/Espressos/Cafe Medici.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Classic Coffee",
    uuid: uuid4(),
    data: [
      {
        name: "Cappuccino",
        price: 255,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/beverages/classicCoffee/cappuccino.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Latte",
        price: 245,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/beverages/classicCoffee/latte.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Spanish Latte(blend)",
        price: 255,
        description: "Espresso mixed with condensed milk",
        image: "/assets/img/menu/beverages/classicCoffee/SpanishLatte.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Organic Macha Latte(Hot/Iced)",
        price: 255,
        description: "Classic Latte without caffeine",
        image:
          "/assets/img/menu/beverages/classicCoffee/OrganicMachaLatte.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Flat White",
        price: 285,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/beverages/classicCoffee/FlatWhite.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Cafe Mocha",
        price: 295,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/beverages/classicCoffee/CafeMocha.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Iced Coffee",
    uuid: uuid4(),
    data: [
      {
        name: "Iced Americano",
        price: 215,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/beverages/IcedCoffee/IcedAmericano.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Iced Latte",
        price: 235,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/beverages/IcedCoffee/IcedLatte.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Iced Cappuccino",
        price: 275,
        description: "Espresso mixed with condensed milk",
        image: "/assets/img/menu/beverages/IcedCoffee/IcedCappuccino.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Cold Coffee",
        price: 289,
        description: "Classic Latte without caffeine",
        image: "/assets/img/menu/beverages/IcedCoffee/ColdCoffee.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Vietnamese Cold Coffee",
        price: 319,
        description: "Rich and aromatic caffeine shot",
        image:
          "/assets/img/menu/beverages/IcedCoffee/VietnameseColdCoffee.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Chocolate Drinks",
    uuid: uuid4(),
    data: [
      {
        name: "Hot Chocolate",
        price: 299,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/beverages/ChocolateDrinks/HotChocolate.jpg",
        uuid: uuid4(),
      },
      {
        name: "Chocolate Latte",
        price: 319,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/beverages/ChocolateDrinks/ChocolateLatte.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Choclate Venoice",
        price: 319,
        description: "Espresso shot mixed with ice",
        image:
          "/assets/img/menu/beverages/ChocolateDrinks/chocolateVenoice.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Iced Chocolate",
        price: 329,
        description: "Espresso with chocolate and milk foam",
        image: "/assets/img/menu/beverages/ChocolateDrinks/IcedChocolate.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Tea",
    uuid: uuid4(),
    data: [
      {
        name: "Decaf",
        price: 55,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/beverages/Tea/Decaf.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Classic",
        price: 235,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/beverages/Tea/classic.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Premium",
        price: 255,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/beverages/Tea/Premium.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Shakes",
    uuid: uuid4(),
    data: [
      {
        name: "Strawberry Shake",
        price: 319,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/beverages/shakes/Strawberry.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Blueberry Shake",
        price: 319,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/beverages/shakes/Blueberry.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Oreo Shake",
        price: 329,
        description: "Espresso mixed with condensed milk",
        image: "/assets/img/menu/beverages/shakes/Oreo.jpeg",
        uuid: uuid4(),
      },
      {
        name: "KitKat Shake",
        price: 329,
        description: "Classic Latte without caffeine",
        image: "/assets/img/menu/beverages/shakes/kitkat.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Mocha Shake",
        price: 339,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/beverages/shakes/Mocha.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Banoffee Shake",
        price: 369,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/beverages/shakes/Banoffee.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Mocktail",
    uuid: uuid4(),
    data: [
      {
        name: "Ice Tea",
        price: 169,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/beverages/mocktails/IceTea.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Lemon Tea",
        price: 169,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/beverages/mocktails/LeamonTea.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Virgin Mojito",
        price: 249,
        description: "Espresso shot mixed with ice",
        image: "/assets/img/menu/beverages/mocktails/VirginMojito.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Lime Soda",
        price: 249,
        description: "Espresso with chocolate and milk foam",
        image: "/assets/img/menu/beverages/mocktails/LimeSoda.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Smoothies",
    uuid: uuid4(),
    data: [
      {
        name: "Banana Smoothie",
        price: 325,
        description: "Freshly made from milk and banana",
        image: "/assets/img/menu/beverages/smoothies/banana-smoothie.jpg",
        uuid: uuid4(),
      },
      {
        name: "Blueberry Smoothie",
        price: 335,
        description: "Freshly made from milk and blueberry",
        image: "/assets/img/menu/beverages/smoothies/blueberry-smoothie.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Mixed Berry Smoothie",
        price: 335,
        description: "Freshly made from milk and blueberry",
        image: "/assets/img/menu/beverages/smoothies/Mixed Berry.jpeg",
        uuid: uuid4(),
      },
    ],
  },
];
const food = [
  {
    name: "Breakfast Classics",
    uuid: uuid4(),
    data: [
      {
        name: "French Butter & Croissant",
        price: 175,
        description: "Serving Size 60g Calories 226 Allergens: milk, gluten, eggs",
        image: "/assets/img/menu/food/breakfast/FrenchCroissant.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Cheese Omelette",
        price: 325,
        description: "Serving Size 200g Calories 373 Allergens: milk, eggs Add On: Chicken: 125",
        image: "/assets/img/menu/food/breakfast/CheeseOmelette.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Scrambled Eggs & Broma Multigrain Flemish Toast",
        price: 415,
        description: "Serving Size 250g Calories 527 Allergens:milk, gluten, eggs, soybean, sesame",
        image: "/assets/img/menu/food/breakfast/ScrambledEggsToast.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Coffee & Croissant",
        price: 425,
        description: "Please select a coffee of your choice from our coffee menu Calories 367 Allergens: milk,gluten, eggs",
        image: "/assets/img/menu/food/breakfast/CoffeeAndCroissant.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Smashed Chilli & Avocado Toast",
        price: 595,
        description: "Broma Multigrain Flemish Bread, lime, seasame, seeds and extra virgin olive oil",
        image: "/assets/img/menu/food/breakfast/SmashedChilliAvocadoToast.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Belgium Waffles",
        price: 295,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/food/breakfast/BelgiumWaffles.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Blueberry Waffles",
        price: 295,
        description: "Espresso shot mixed with ice",
        image: "/assets/img/menu/food/breakfast/BlueberryWaffles.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Nutella Banana Waffle",
        price: 315,
        description: "Espresso with chocolate and milk foam",
        image: "/assets/img/menu/food/breakfast/NutellaBananaWaffle.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Broma Waffle",
        price: 325,
        description: "Rich and aromatic caffeine shot",
        image: "/assets/img/menu/food/breakfast/BromaWaffle.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Broma Pancake",
        price: 345,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/food/breakfast/BromaPancake.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Eggs Florentine",
        price: 395,
        description: "Poached organic eggs, spinach, hollandaise, english muffins",
        image: "/assets/img/menu/food/breakfast/EggsFlorentine.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Green Shakshuka Baked Eggs",
        price: 395,
        description: "Baked organic eggs with garlic, spinach, kale, goat cheese, Broma Basil Pesto",
        image: "/assets/img/menu/food/breakfast/GreenShakshukaBakedEggs.jpeg",
        uuid: uuid4(),
      },
      {
        name: "White Omelette with chia, Spinach&Parmesan",
        price: 495,
        description: "Serving Size 200g Calories 367 Allergens: milk, eggs",
        image: "/assets/img/menu/food/breakfast/WhiteOmelettewithchiaSpinachParmesan.jpeg",
        uuid: uuid4(),
      },
      {
        name: "The English in India",
        price: 585,
        description: "Eggs your style with the choice of chicken sausages,Abmika’s spiced baked beans, button mushrooms, roasted tomato, crushed potatoes",
        image: "/assets/img/menu/food/breakfast/EnglishInIndia.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Salads",
    uuid: uuid4(),
    data: [
      {
        name: "Green Goddess Buddha Bowl",
        price: 425,
        description: "Quinoa, Spinach and Parsley Hummus, tofu, rocket, snowpeas, broccoli, gluten free five seed crackers, Broma Basil Pesto, Goat Cheese labne",
        image: "/assets/img/menu/food/salads/GreenGoddessBuddhaBowl.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Tuscan Kale & Avocado Caesar Salad",
        price: 495,
        description: "Serving Size 250g Calories 458 Allergens: milk, soybean, sulphite, gluten",
        image: "/assets/img/menu/food/salads/TuscanKaleAvocadoCaesarSalad.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Chicken & Avocado Caesar Salad",
        price: 575,
        description: "Serving Size 280g Calories 607 Allergens: milk, gluten, eggs, soybean, sulphite",
        image: "/assets/img/menu/food/salads/ChickenAvocadoCaesarSalad.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Full Power Grain Superfood Salad",
        price: 685,
        description: "Quinoa, barley, avocado, broccoli and goat cheese Serving Size 280g Calories 462 Allergens: milk,soybean, sulphite, gluten, tree nuts For some extra protein, add on grilled chicken 150/-",
        image: "/assets/img/menu/food/salads/FullPowerGrainSuperfoodSalad.jpeg",
        uuid: uuid4(),
      },
    ],
  }
  ,
  {
    name: "Add To Your Salad",
    uuid: uuid4(),
    data: [
      {
        name: "Silken Tofu",
        price: 95,
        description: "Serving size 70g Calories 44",
        image: "/assets/img/menu/food/addToYourSalad/SilkenTofu.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Goat Cheese",
        price: 125,
        description: "Serving size 30g Calories 109",
        image: "/assets/img/menu/food/addToYourSalad/GoatCheese.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Grilled Chicken",
        price: 150,
        description: "Serving size 70g Calories 158",
        image: "/assets/img/menu/food/addToYourSalad/GrilledChicken.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Hass Avocado",
        price: 175,
        description: "Serving size 60g Calories 109",
        image: "/assets/img/menu/food/addToYourSalad/HassAvocado.jpeg",
        uuid: uuid4(),
      },
    ],
  }
  ,{
    name: "Pizza",
    uuid: uuid4(),
    data: [
      {
        name: "Margherita",
        price: 465,
        description: "Serving Size 320g Calories 498 Allergens: soybean, gluten",
        image: "/assets/img/menu/food/pizza/Margherita.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Alfredo Spinach & Corn",
        price: 495,
        description: "Sun dried tomato, mushroom sauce, spinach, corn and red peprika",
        image: "/assets/img/menu/food/pizza/AlfredoSpinachCorn.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Burrata & Basil Pesto with Toasted Pine Nuts",
        price: 525,
        description: "Serving Size 320g Calories 835 Allergens: milk, soybean, gluten, tree nuts",
        image: "/assets/img/menu/food/pizza/BurrataBasilPestowithToastedPineNuts.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Smoked Chicken Feta",
        price: 535,
        description: "Mozzarella, culted spinach, corn, red peprika and feta",
        image: "/assets/img/menu/food/pizza/SmokedChickenFeta.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Cacio E Pepe, Confit Garlic & Aglio FarmLove Thyme",
        price: 565,
        description: "Serving Size 250g Calories 563 Allergens: milk, gluten",
        image: "/assets/img/menu/food/pizza/CacioEPepeConfitGarlicAglioFarmLoveThyme.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Broma Pepperoni",
        price: 595,
        description: "Serving Size 320g Calories 772 Allergens: milk, soybean, gluten",
        image: "/assets/img/menu/food/pizza/BromaPepperoni.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Legume Ala Pizza",
        price: 485,
        description: "Exctic veg. pizza with fresh baked cheese and sundried tomatoes",
        image: "/assets/img/menu/food/pizza/LegumeAlaPizza.jpeg",
        uuid: uuid4(),
      },
      {
        name: "The Kernel Delight",
        price: 495,
        description: "Corn kernel with cheese and fresh basil",
        image: "/assets/img/menu/food/pizza/TheKernelDelight.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Polo Ala Pizzare",
        price: 545,
        description: "Grilled chicken with onion, vegetables and cheese",
        image: "/assets/img/menu/food/pizza/PoloAlaPizzare.jpeg",
        uuid: uuid4(),
      }
    ], 
  },
  {
    name: "Add To Your Pizza",
    uuid: uuid4(),
    data: [
      {
        name: "FarmLove Vegetables",
        price: 125,
        description: "Serving size 50g Calories 39",
        image: "/assets/img/menu/food/addToYourPizza/FarmLoveVegetables.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Garlic Butter Spinach",
        price: 95,
        description: "Serving size 50g Calories 46",
        image: "/assets/img/menu/food/addToYourPizza/GarlicButterSpinach.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Grilled Parsley Mushrooms",
        price: 125,
        description: "Serving size 23g Calories 122",
        image: "/assets/img/menu/food/addToYourPizza/GrilledParsleyMushrooms.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Marinated Chicken",
        price: 150,
        description: "Serving size 70g Calories 58",
        image: "/assets/img/menu/food/addToYourPizza/MarinatedChicken.jpeg",
        uuid: uuid4(),
      },
    ],
  }
  ,{
    name: "Pasta",
    uuid: uuid4(),
    data: [
      {
        name: "Broma Aglio E Olio Spaghetti",
        price: 415,
        description: "Serving Size 250g Calories 440 Allergens: milk, soybean, gluten",
        image: "/assets/img/menu/food/pasta/BromaAglioEOlioSpaghetti.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Orecchiette All Arrabbiata",
        price: 525,
        description: "Serving Size 322g Calories 486 Allergens: milk, soybean, gluten",
        image: "/assets/img/menu/food/pasta/OrecchietteAllArrabbiata.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Fettuccine With Button Mushroom & Truffle Ragu",
        price: 535,
        description: "Serving Size 300g Calories 756 Allergens: milk, gluten",
        image: "/assets/img/menu/food/pasta/FettuccineWithButtonMushroomTruffleRagu.jpeg",
        uuid: uuid4(),
      },
    ]
  },
  {
    name: "Add To Your Pasta",
    uuid: uuid4(),
    data: [
      {
        name: "Add a seasonal vegetable to your pasta",
        price: 125,
        description: "Serving size 50g Calories 39",
        image: "/assets/img/menu/food/addToYourPasta/FarmLoveVegetables.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Add Chicken to your pasta",
        price: 150,
        description: "Serving size 50g Calories 46",
        image: "/assets/img/menu/food/addToYourPasta/chicken.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Prawns",
        price: 199,
        description: "Serving size 23g Calories 122",
        image: "/assets/img/menu/food/addToYourPasta/prawns.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Large Plates",
    uuid: uuid4(),
    data: [
      {
        name: "Falafel & Hummus Sandwich",
        price: 325,
        description: "Crispy Falafel, hummus and pickles with spice sauce",
        image: "/assets/img/menu/food/largePlates/FalafelHummusSandwich.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Green Goddess Sandwich in Broma Multigrain Bread",
        price: 695,
        description: "Broma basil pesto, spinach and parsley hummus, goat cheese, grain mustard aioli, avocado and FarmLove greens. Served with herb, spiced truffle fries",
        image: "/assets/img/menu/food/largePlates/GreenGoddessSandwichBromaMultigrainBread.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Ham & Cheese Sandwich",
        price: 365,
        description: "Cooked chicken and cheese in mozzarella",
        image: "/assets/img/menu/food/largePlates/HamCheeseSandwich.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Grilled Veggie Sandwich",
        price: 375,
        description: "Grilled veggie mushroom, bellpeppers, bull pepprin multigrain bread",
        image: "/assets/img/menu/food/largePlates/GrilledVeggieSandwich.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Grilled Chicken Sandwich",
        price: 395,
        description: "Espresso with milk foam",
        image: "/assets/img/menu/food/largePlates/GrilledChickenSandwich.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Broma Triple Decker Multigrain Club Sandwich",
        price: 695,
        description: "Crispy bacon, chicken breast, fried egg, FarmLove mixed greens, grain mustard aioli and cheese emmental. Served with herb, spiced and truffle oil fries",
        image: "/assets/img/menu/food/largePlates/BromaTripleDeckerMultigrainClubSandwich.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Grilled Chicken Breast (gf)",
        price: 725,
        description: "Served with potato puree, buttered FarmLove veggies and bourbon pepper cream sauce",
        image: "/assets/img/menu/food/largePlates/GrilledChickenBreast.jpeg",
        uuid: uuid4(),
      },
    ],
  },
  {
    name: "Sides",
    uuid: uuid4(),
    data: [
      {
        name: "Multigrain Flemish Toast",
        price: 75,
        description: "Serving Size 50g Calories 174 Allergens: milk, gluten, soybean",
        image: "/assets/img/menu/food/sides/MultigrainFlemishToast.jpeg",
        uuid: uuid4(),
      },
      {
        name: " Crushed Potatoes",
        price: 125,
        description: "Serving Size 100g Calories 148 Allergens: milk",
        image: "/assets/img/menu/food/sides/CrushedPotatoes.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Ambika's Baked Beans",
        price: 145,
        description: "Serving Size 180g Calories 239 Allergens: milk",
        image: "/assets/img/menu/food/sides/BakedBeans.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Sauteed Assorted Mushrooms",
        price: 155,
        description: "Serving Size 120g Calories 142Allergens: milk",
        image: "/assets/img/menu/food/sides/AssortedMushrooms.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Chicken Sauasages (2 slices)",
        price: 165,
        description: "Serving Size 150g Calories 330 Allergens: gluten, soybean",
        image: "/assets/img/menu/food/sides/Sausages.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Classic Salted Potato Fries",
        price: 165,
        description: "Serving Size 120g Calories 276 Allergens: soybean",
        image: "/assets/img/menu/food/sides/PotatoFries.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Cheese Garlic Breads",
        price: 195,
        description: "Espresso shot mixed with ice",
        image: "/assets/img/menu/food/sides/GarlicBread.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Grilled Potato Wedge's",
        price: 195,
        description: "Espresso with chocolate and milk foam",
        image: "/assets/img/menu/food/sides/PotatoWedges.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Broma Spice, Herb & Parmesan Fries",
        price: 215,
        description: "Serving Size 120g Calories 258 Allergens: soybean",
        image: "/assets/img/menu/food/sides/ParmesanFries.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Sauteed Buttered Vegetables",
        price: 299,
        description: "Serving Size 150g Calories 149 Allergens: milk",
        image: "/assets/img/menu/food/sides/SauteedButteredVegetables.jpeg",
        uuid: uuid4(),
      }
    ],
    
  },
  {
    name: "Burger",
    uuid: uuid4(),
    data: [
      {
        name: "Broma Veg Burger",
        price: 379,
        description: "Bun stuffed with veg. patties and cheese, jalapenos,caramilised onions and lettuce",
        image: "/assets/img/menu/food/burger/VegBurger.jpeg",
        uuid: uuid4(),
      },
      {
        name: "Broma Non-Veg Burger",
        price: 429,
        description: "Bun stuffed with chicken patties and caramilised onions, lettuce and tomato",
        image: "/assets/img/menu/food/burger/NonVegBurger.jpeg",
        uuid: uuid4(),
      },
    ],
  },
];

export { bakery, beverages, food };
