'use strict';

var menuSV = {
  burgers: {
    beefSV: [
      {
      title: 'Dubbelburgare',
      imgSrc: 'beef1.png',
      price: 4.00,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Nötkött', 'Ost', 'Sallad', 'Ketchup' ]
    },
    {
      title: 'Baconburgare',
      imgSrc: 'beef2.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll', 'Nötkött', 'Bacon']
    },
    {
      title: 'Chiliburgare',
      imgSrc:'beef3.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Nötkött', 'Lök', 'Chili', 'Sallad']
    },
    {
      title: 'Trippelburgare',
      imgSrc:'beef4.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Nötkött', 'Bacon', 'Ost']
    },
    {
      title: 'Dubbelmål',
      imgSrc:'beef5.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll', 'Nötkött', 'Ost', 'Sallad']
    }
    ],
  chickenSV: [
    {
      title: 'Kycklingmål',
      imgSrc:'chicken1.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Kyckling', 'Sallad', 'Majonnäs']
    },
    {
      title: 'Kyckling Fresh',
      imgSrc:'chicken2.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Kyckling', 'Sallad', 'Tomater']
    },
    {
      title: 'Friterad kyckling',
      imgSrc:'chicken3.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Kyckling', 'Sallad', 'Majonnäs', 'Tomater']
    },
    {
      title: 'Kycklingmål dubbel',
      imgSrc:'chicken4.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Kyckling', 'Sallad', 'Majonnäs']
    },
    {
      title: 'Grillad kyckling',
      imgSrc:'chicken5.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Kyckling', 'Sallad', 'Majonnäs', 'BBQ']
    }
  ],
  fishSV: [
    {
      title: 'Fiskburgare',
      imgSrc:'fish1.png',
      price: 3.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Fiskburgare','Ost','Tomater']
    },
    {
      title: 'Fiskmål',
      imgSrc:'fish2.png',
      price: 3.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Fiskburgare','Ost']
    },
    {
      title: 'Storgäddan',
      imgSrc:'fish3.png',
      price: 3.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Fiskburgare','Ost', 'Tomater']
    }
  ],
  vegetarianSV: [
    {
      title: 'Veggiemål',
      imgSrc:'veggie1.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Tofuburgare','Ost', 'Tomater']
    },
    {
      title: 'Friterad tofumål',
      imgSrc:'veggie2.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Tofuburgare','Ost']
    },
    {
      title: 'Klassisker',
      imgSrc:'veggie3.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Tofuburgare','Ost', 'Chili']
    },
    {
      title: 'Deli Veg',
      imgSrc:'veggie4.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Tofuburgare','Ost', 'Chili', 'Tomater']
    }
  ]
  },
  drinks: {
    waterSV: [
      {
        title: 'Evian',
        imgSrc:'evian.png',
        price: 0.99
      },
      {
        title: 'Fiji',
        imgSrc:'fiji.png',
        price: 1.49
      },
      {
        title: 'Solan',
        imgSrc:'solan.png',
        price: 1.00
      },
      {
        title: 'Vichy',
        imgSrc:'vichy.png',
        price: 1.00
      }
    ],
    sodasSV: [
      {
        title: 'Cola',
        imgSrc:'coke.png',
        price: 1.00
      },
      {
        title: 'Cola Zero',
        imgSrc:'coke-zero.png',
        price: 0.75
      },
      {
        title: 'Cole Light',
        imgSrc:'coke-light.png',
        price: 0.75
      },
      {
        title: 'Fanta',
        imgSrc:'fanta.png',
        price: 1.00
      },
      {
        title: 'Sprite',
        imgSrc:'sprite.png',
        price: 1.00
      }
    ],
    beersSV: [
      {
        title: 'Norrlands',
        imgSrc:'norrlands.png',
        price: 2.00
      },
      {
        title: 'Falcon',
        imgSrc:'falcon.png',
        price: 0.99
      },
      {
        title: 'Heineken',
        imgSrc:'heineken.png',
        price: 2.00
      },
      {
        title: 'Mahou',
        imgSrc:'mahou-gf.png',
        price: 2.50
      },
      {
        title: 'Galicia',
        imgSrc:'eg.png',
        price: 2.99
      }
    ]
  },
  sides: {
    friesSV: [
      {
        title: 'Chili cheese',
        imgSrc:'chillicheese.png',
        price: 1.00
      },
      {
        title: 'Pommes Frites',
        imgSrc:'french-fries.png',
        price: 1.00
      },
      {
        title: 'Mozzarella',
        imgSrc:'mozzarella.png',
        price: 1.00
      },
      {
        title: 'Lökringar',
        imgSrc:'onion-rings.png',
        price: 1.00
      },
      {
        title: 'Kycklingvingar',
        imgSrc:'wings.png',
        price: 1.00
      }
    ],
    saucesSV: [
      {
        title: 'BBQ',
        imgSrc:'bbq.png',
        price: 0.50
      },
      {
        title: 'Mango',
        imgSrc:'mango.png',
        price: 0.50
      },
      {
        title: 'Majonnäs',
        imgSrc:'mayo.png',
        price: 0.50
      },
      {
        title: 'Original',
        imgSrc:'original.png',
        price: 0.50
      },
      {
        title: 'Ranch',
        imgSrc:'ranch.png',
        price: 0.50
      }
    ],
    shakesSV: [
      {
        title: 'Choklad',
        imgSrc:'choco.png',
        price: 2.50
      },
      {
        title: 'Apelsin',
        imgSrc:'orange.png',
        price: 2.50
      },
      {
        title: 'Jordgubbe',
        imgSrc:'strawberry.png',
        price: 2.50
      }
    ]
  }
}

export default menuSV;
