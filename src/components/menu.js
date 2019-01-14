'use strict';

var menu = {
  burgers: {
    beef: [
      {
      title: 'Double Beef',
      imgSrc: 'beef1.png',
      price: 1.52,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Beef Patty', 'Beef Patty', 'Cheese', 'Lettuce', 'Ketchup' ]
    },
    {
      title: 'Bacon Deli',
      imgSrc: 'beef2.png',
      price: 1.31,
      isBurger: true,
      ingredients:['Kaiser Roll', 'Beef Patty', 'Bacon']
    },
    {
      title: 'Chili Burger',
      imgSrc:'beef3.png',
      price: 1.41,
      isBurger: true,
      ingredients:['Kaiser Roll','Beef Patty', 'Onions', 'Peppers', 'Lettuce']
    },
    {
      title: 'Big Beef',
      imgSrc:'beef4.png',
      price: 1.19,
      isBurger: true,
      ingredients:['Kaiser Roll','Beef Patty', 'Beef Patty', 'Bacon', 'Cheese']
    },
    {
      title: 'Double Meat',
      imgSrc:'beef5.png',
      price: 1.11,
      isBurger: true,
      ingredients:['Kaiser Roll', 'Beef Patty', 'Beef Patty', 'Cheese']
    }
    ],
  chicken: [
    {
      title: 'Chicken Basic',
      imgSrc:'chicken1.png',
      price: 1.44,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Chicken', 'Lettuce', 'Mayo']
    },
    {
      title: 'Chicken Deli',
      imgSrc:'chicken2.png',
      price: 2.01,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Chicken', 'Lettuce', 'Mayo', 'Tomato']
    },
    {
      title: 'Crispy Chicken',
      imgSrc:'chicken3.png',
      price: 1.89,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Chicken', 'Lettuce', 'Mayo', 'Tomato']
    },
    {
      title: 'Large Chicken',
      imgSrc:'chicken4.png',
      price: 1.13,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Chicken', 'Lettuce', 'Mayo']      
    },
    {
      title: 'Chicken BBQ',
      imgSrc:'chicken5.png',
      price: 2.51,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Chicken', 'Lettuce', 'Mayo', 'BBQ']      
    }
  ],
  fish: [
    {
      title: 'Fish Burger',
      imgSrc:'fish1.png',
      price: 1.58,
      isBurger: true,
      ingredients:['Kaiser Roll','Fish','Cheese','Tomato']
    },
    {
      title: 'Integral Fish',
      imgSrc:'fish2.png',
      price: 1.21,
      isBurger: true,
      ingredients:['Kaiser Roll','Fish','Cheese']
    },
    {
      title: 'Long Fish',
      imgSrc:'fish3.png',
      price: 1.54,
      isBurger: true,
      ingredients:['Kaiser Roll','Fish','Fish','Cheese']
    }
  ],
  vegetarian: [
    {
      title: 'Classic Veggie',
      imgSrc:'veggie1.png',
      price: 1.99,
      isBurger: true,
      ingredients:['Kaiser Roll','Vegetarian','Cheese', 'Tomato']
    },
    {
      title: 'Cripsy Veggie',
      imgSrc:'veggie2.png',
      price: 1.98,
      isBurger: true,
      ingredients:['Kaiser Roll','Vegetarian','Cheese']      
    },
    {
      title: 'Typical Veg',
      imgSrc:'veggie3.png',
      price: 1.78,
      isBurger: true,
      ingredients:['Kaiser Roll','Vegetarian','Cheese', 'Peppers']      
    },
    {
      title: 'Veggie Cool',
      imgSrc:'veggie4.png',
      price: 1.78,
      isBurger: true,
      ingredients:['Kaiser Roll','Vegetarian','Cheese', 'Peppers', 'Tomato']       
    }
  ]
  },
  drinks: {
    water: [
      {
        title: 'Evian',
        imgSrc:'evian.png',
        price: 0.99
      },
      {
        title: 'Fiji',
        imgSrc:'fiji.png',
        price: 2.20
      },
      {
        title: 'Solan',
        imgSrc:'solan.png',
        price: 0.57
      },
      {
        title: 'Vichy',
        imgSrc:'vichy.png',
        price: 0.68
      }
    ],
    sodas: [
      {
        title: 'Coke',
        imgSrc:'coke.png',
        price: 0.99
      },
      {
        title: 'Coke Zero',
        imgSrc:'coke-zero.png',
        price: 0.99
      },
      {
        title: 'Coke Light',
        imgSrc:'coke-light.png',
        price: 0.99
      },
      {
        title: 'Fanta',
        imgSrc:'fanta.png',
        price: 0.99
      },
      {
        title: 'Sprite',
        imgSrc:'sprite.png',
        price: 0.99
      }
    ],
    beers: [
      {
        title: 'Norrlands',
        imgSrc:'norrlands.png',
        price: 3.45
      },
      {
        title: 'Falcon',
        imgSrc:'falcon.png',
        price: 4.12
      },
      {
        title: 'Heineken',
        imgSrc:'heineken.png',
        price: 3.78
      },
      {
        title: 'Mahou',
        imgSrc:'mahou-gf.png',
        price: 2.76
      },
      {
        title: 'Galicia',
        imgSrc:'eg.png',
        price: 5.51
      }
    ]
  },
  sides: {
    fries: [
      {
        title: 'Chillicheese',
        imgSrc:'chillicheese.png',
        price: 3.49
      },
      {
        title: 'French Fries',
        imgSrc:'french-fries.png',
        price: 3.49
      },
      {
        title: 'Mozzarella',
        imgSrc:'mozzarella.png',
        price: 4.49
      },
      {
        title: 'Onion Rings',
        imgSrc:'onion-rings.png',
        price: 3.49
      },
      {
        title: 'Chicken Wings',
        imgSrc:'wings.png',
        price: 5.49
      }
    ],
    sauces: [
      {
        title: 'BBQ',
        imgSrc:'bbq.png',
        price: 3.45
      },
      {
        title: 'Mango',
        imgSrc:'mango.png',
        price: 4.12
      },
      {
        title: 'Mayo',
        imgSrc:'mayo.png',
        price: 3.78
      },
      {
        title: 'Original',
        imgSrc:'original.png',
        price: 2.76
      },
      {
        title: 'Ranch',
        imgSrc:'ranch.png',
        price: 5.51
      }
    ],
    shakes: [
      {
        title: 'Chocolate',
        imgSrc:'choco.png',
        price: 4.99
      },
      {
        title: 'Orange',
        imgSrc:'orange.png',
        price: 4.99
      },
      {
        title: 'Strawberry',
        imgSrc:'strawberry.png',
        price: 4.99
      }
    ]
  }
}

export default menu;
