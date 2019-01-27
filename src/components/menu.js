'use strict';

var menu = {
  burgers: {
    beef: [
      {
      title: "1",
      imgSrc: 'beef1.png',
      price: 4.00,
      isBurger: true,
      ingredients: ["2", "3", "4", "5", "6" ]
    },
    {
      title: "8",
      imgSrc: 'beef2.png',
      price: 4.00,
      isBurger: true,
      ingredients:["2", "3", "9"]
    },
    {
      title: "10",
      imgSrc:'beef3.png',
      price: 4.00,
      isBurger: true,
      ingredients:["2","3", "11", "12", "5"]
    },
    {
      title: "13",
      imgSrc:'beef4.png',
      price: 4.00,
      isBurger: true,
      ingredients:["2","3", "9", "4"]
    },
    {
      title: "15",
      imgSrc:'beef5.png',
      price: 4.00,
      isBurger: true,
      ingredients:["2", "3", "4", "5"]
    }
    ],
  chicken: [
    {
      title: "16",
      imgSrc:'chicken1.png',
      price: 3.50,
      isBurger: true,
      ingredients: ["2", "17", "5", "18"]
    },
    {
      title: "19",
      imgSrc:'chicken2.png',
      price: 3.50,
      isBurger: true,
      ingredients: ["2", "17", "5", "20"]
    },
    {
      title: "21",
      imgSrc:'chicken3.png',
      price: 3.50,
      isBurger: true,
      ingredients: ["2", "17", "5", "18", "20"]
    },
    {
      title: "22",
      imgSrc:'chicken4.png',
      price: 3.50,
      isBurger: true,
      ingredients: ["2", "17", "5", "18"]
    },
    {
      title: "23",
      imgSrc:'chicken5.png',
      price: 3.50,
      isBurger: true,
      ingredients: ["2", "17", "5", "18", "24"]
    }
  ],
  fish: [
    {
      title: "27",
      imgSrc:'fish1.png',
      price: 3.00,
      isBurger: true,
      ingredients:["2","25","4","20"]
    },
    {
      title: "28",
      imgSrc:'fish2.png',
      price: 3.00,
      isBurger: true,
      ingredients:["2","25","4"]
    },
    {
      title: "29",
      imgSrc:'fish3.png',
      price: 3.00,
      isBurger: true,
      ingredients:["2","25","4", "20"]
    }
  ],
  vegetarian: [
    {
      title: "31",
      imgSrc:'veggie1.png',
      price: 4.00,
      isBurger: true,
      ingredients:["2","30","4", "20"]
    },
    {
      title: "32",
      imgSrc:'veggie2.png',
      price: 4.00,
      isBurger: true,
      ingredients:["2","30","4"]
    },
    {
      title: "33",
      imgSrc:'veggie3.png',
      price: 4.00,
      isBurger: true,
      ingredients:["2","30","4", "12"]
    },
    {
      title: "34",
      imgSrc:'veggie4.png',
      price: 4.00,
      isBurger: true,
      ingredients:["2","30","4", "12", "20"]
    }
  ]
  },
  drinks: {
    water: [
      {
        title: "35",
        imgSrc:'evian.png',
        price: 0.99
      },
      {
        title: "36",
        imgSrc:'fiji.png',
        price: 1.49
      },
      {
        title: "37",
        imgSrc:'solan.png',
        price: 1.00
      },
      {
        title: "38",
        imgSrc:'vichy.png',
        price: 1.00
      }
    ],
    sodas: [
      {
        title: "39",
        imgSrc:'coke.png',
        price: 1.00
      },
      {
        title: "40",
        imgSrc:'coke-zero.png',
        price: 0.75
      },
      {
        title: "41",
        imgSrc:'coke-light.png',
        price: 0.75
      },
      {
        title: "42",
        imgSrc:'fanta.png',
        price: 1.00
      },
      {
        title: "43",
        imgSrc:'sprite.png',
        price: 1.00
      }
    ],
    beers: [
      {
        title: "44",
        imgSrc:'norrlands.png',
        price: 2.00
      },
      {
        title: "45",
        imgSrc:'falcon.png',
        price: 0.99
      },
      {
        title: "46",
        imgSrc:'heineken.png',
        price: 2.00
      },
      {
        title: "47",
        imgSrc:'mahou-gf.png',
        price: 2.50
      },
      {
        title: "48",
        imgSrc:'eg.png',
        price: 2.99
      }
    ]
  },
  sides: {
    fries: [
      {
        title: "49",
        imgSrc:'chillicheese.png',
        price: 1.00
      },
      {
        title: "50",
        imgSrc:'french-fries.png',
        price: 1.00
      },
      {
        title: "51",
        imgSrc:'mozzarella.png',
        price: 1.00
      },
      {
        title: "52",
        imgSrc:'onion-rings.png',
        price: 1.00
      },
      {
        title: "53",
        imgSrc:'wings.png',
        price: 1.00
      }
    ],
    sauces: [
      {
        title: "24",
        imgSrc:'bbq.png',
        price: 0.50
      },
      {
        title: "54",
        imgSrc:'mango.png',
        price: 0.50
      },
      {
        title: "18",
        imgSrc:'mayo.png',
        price: 0.50
      },
      {
        title: "55",
        imgSrc:'original.png',
        price: 0.50
      },
      {
        title: "56",
        imgSrc:'ranch.png',
        price: 0.50
      }
    ],
    shakes: [
      {
        title: "57",
        imgSrc:'choco.png',
        price: 2.50
      },
      {
        title: "58",
        imgSrc:'orange.png',
        price: 2.50
      },
      {
        title: "59",
        imgSrc:'strawberry.png',
        price: 2.50
      }
    ]
  }
}

export default menu;
