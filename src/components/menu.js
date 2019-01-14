'use strict';

var menu = {
  burgers: {
    beef: [
      {
      title: 'Double Beef',
      imgSrc: 'beef1.png',
      price: 4.00,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Beef Patty', 'Beef Patty', 'Cheese', 'Lettuce', 'Ketchup' ]
    },
    {
      title: 'Bacon Deli',
      imgSrc: 'beef2.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll', 'Beef Patty', 'Bacon']
    },
    {
      title: 'Chili Burger',
      imgSrc:'beef3.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Beef Patty', 'Onions', 'Peppers', 'Lettuce']
    },
    {
      title: 'Big Beef',
      imgSrc:'beef4.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Beef Patty', 'Beef Patty', 'Bacon', 'Cheese']
    },
    {
      title: 'Double Meat',
      imgSrc:'beef5.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll', 'Beef Patty', 'Beef Patty', 'Cheese']
    }
    ],
  chicken: [
    {
      title: 'Chicken Basic',
      imgSrc:'chicken1.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Chicken', 'Lettuce', 'Mayo']
    },
    {
      title: 'Chicken Deli',
      imgSrc:'chicken2.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Chicken', 'Lettuce', 'Mayo', 'Tomato']
    },
    {
      title: 'Crispy Chicken',
      imgSrc:'chicken3.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Chicken', 'Lettuce', 'Mayo', 'Tomato']
    },
    {
      title: 'Large Chicken',
      imgSrc:'chicken4.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Chicken', 'Lettuce', 'Mayo']      
    },
    {
      title: 'Chicken BBQ',
      imgSrc:'chicken5.png',
      price: 3.50,
      isBurger: true,
      ingredients: ['Kaiser Roll', 'Chicken', 'Lettuce', 'Mayo', 'BBQ']      
    }
  ],
  fish: [
    {
      title: 'Fish Burger',
      imgSrc:'fish1.png',
      price: 3.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Fish','Cheese','Tomato']
    },
    {
      title: 'Integral Fish',
      imgSrc:'fish2.png',
      price: 3.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Fish','Cheese']
    },
    {
      title: 'Long Fish',
      imgSrc:'fish3.png',
      price: 3.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Fish','Fish','Cheese']
    }
  ],
  vegetarian: [
    {
      title: 'Classic Veggie',
      imgSrc:'veggie1.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Vegetarian','Cheese', 'Tomato']
    },
    {
      title: 'Cripsy Veggie',
      imgSrc:'veggie2.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Vegetarian','Cheese']      
    },
    {
      title: 'Typical Veg',
      imgSrc:'veggie3.png',
      price: 4.00,
      isBurger: true,
      ingredients:['Kaiser Roll','Vegetarian','Cheese', 'Peppers']      
    },
    {
      title: 'Veggie Cool',
      imgSrc:'veggie4.png',
      price: 4.00,
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
    sodas: [
      {
        title: 'Coke',
        imgSrc:'coke.png',
        price: 1.00
      },
      {
        title: 'Coke Zero',
        imgSrc:'coke-zero.png',
        price: 0.75
      },
      {
        title: 'Coke Light',
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
    beers: [
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
    fries: [
      {
        title: 'Chillicheese',
        imgSrc:'chillicheese.png',
        price: 1.00
      },
      {
        title: 'French Fries',
        imgSrc:'french-fries.png',
        price: 1.00
      },
      {
        title: 'Mozzarella',
        imgSrc:'mozzarella.png',
        price: 1.00
      },
      {
        title: 'Onion Rings',
        imgSrc:'onion-rings.png',
        price: 1.00
      },
      {
        title: 'Chicken Wings',
        imgSrc:'wings.png',
        price: 1.00
      }
    ],
    sauces: [
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
        title: 'Mayo',
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
        title: 'Chocolate',
        imgSrc:'choco.png',
        price: 2.50
      },
      {
        title: 'Orange',
        imgSrc:'orange.png',
        price: 2.50
      },
      {
        title: 'Strawberry',
        imgSrc:'strawberry.png',
        price: 2.50
      }
    ]
  }
}

export default menu;
