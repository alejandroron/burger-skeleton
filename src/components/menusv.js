'use strict';

var menuSV = {
  burgers: {
    nötkott: [
      {
      title: 'Dubbelburgare',
      imgSrc: 'beef1.png',
      price: 4.00,
      isBurger: true,
      ingredients: ['Kejsarbröd', 'Nötkött', 'Ost', 'Sallad', 'Ketchup' ]
    },
    {
      title: 'Baconburgare',
      imgSrc: 'beef2.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kejsarbröd', 'Nötkött', 'Bacon']
    },
    {
      title: 'Chiliburgare',
      imgSrc:'beef3.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kejsarbröd','Nötkött', 'Lök', 'Chili', 'Sallad']
    },
    {
      title: 'Trippelburgare',
      imgSrc:'beef4.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kejsarbröd','Nötkött', 'Bacon', 'Ost']
    },
    {
      title: 'Dubbelmål',
      imgSrc:'beef5.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kejsarbröd', 'Nötkött', 'Ost', 'Sallad']
    }
    ],
  kyckling: [
    {
      title: 'Kycklingmål',
      imgSrc:'chicken1.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kejsarbröd', 'Kyckling', 'Sallad', 'Majonnäs']
    },
    {
      title: 'Kyckling Fresh',
      imgSrc:'chicken2.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kejsarbröd', 'Kyckling', 'Sallad', 'Tomater']
    },
    {
      title: 'Friterad kyckling',
      imgSrc:'chicken3.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kejsarbröd', 'Kyckling', 'Sallad', 'Majonnäs', 'Tomater']
    },
    {
      title: 'Kycklingmål dubbel',
      imgSrc:'chicken4.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kejsarbröd', 'Kyckling', 'Sallad', 'Majonnäs']
    },
    {
      title: 'Grillad kyckling',
      imgSrc:'chicken5.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kejsarbröd', 'Kyckling', 'Sallad', 'Majonnäs', 'BBQ']
    }
  ],
  fisk: [
    {
      title: 'Fiskburgare',
      imgSrc:'fish1.png',
      price: 3.00,
      isBurger: true,
      ingredients:['Kejsarbröd','Fiskburgare','Ost','Tomater']
    },
    {
      title: 'Fiskmål',
      imgSrc:'fish2.png',
      price: 3.00,
      isBurger: true,
      ingredients:['Kejsarbröd','Fiskburgare','Ost']
    },
    {
      title: 'Storgäddan',
      imgSrc:'fish3.png',
      price: 3.00,
      isBurger: true,
      ingredients:['Kejsarbröd','Fiskburgare','Ost', 'Tomater']
    }
  ],
  vegetariska: [
    {
      title: 'Veggiemål',
      imgSrc:'veggie1.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kejsarbröd','Tofuburgare','Ost', 'Tomater']
    },
    {
      title: 'Friterad tofumål',
      imgSrc:'veggie2.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kejsarbröd','Tofuburgare','Ost']
    },
    {
      title: 'Klassisker',
      imgSrc:'veggie3.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kejsarbröd','Tofuburgare','Ost', 'Chili']
    },
    {
      title: 'Deli Veg',
      imgSrc:'veggie4.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kejsarbröd','Tofuburgare','Ost', 'Chili', 'Tomater']
    }
  ]
  },
  drinks: {
    vatten: [
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
    läsk: [
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
    öl: [
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
    tillbehör: [
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
    såser: [
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
    shakes: [
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
