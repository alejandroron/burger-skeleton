'use strict';

var menu = {
  burgers: {
    beef: [
      {
      title: 'Double Beef',
      imgSrc: require('@/assets/Burgers/Beef/beef1.png'),
      price: 1.52,
      isBurger: true,
      ingredients: ['2 pieces of beef']
    },
    {
      title: 'Bacon Deli',
      imgSrc: require('@/assets/Burgers/Beef/beef2.png'),
      price: 1.31,
      isBurger: true,
      ingredients:['Beef','Bacon']
    },
    {
      title: 'Chili Burger',
      imgSrc: require('@/assets/Burgers/Beef/beef3.png'),
      price: 1.41,
      isBurger: true,
      ingredients:['Beef','Peper']
    },
    {
      title: 'Big Beef',
      imgSrc: require('@/assets/Burgers/Beef/beef4.png'),
      price: 1.19,
      isBurger: true,
      ingredients:['3 pieces of Beef']
    },
    {
      title: 'Double Meat',
      imgSrc: require('@/assets/Burgers/Beef/beef5.png'),
      price: 1.11,
      isBurger: true,
      ingredients:['2 pieces of beef','cheese']
    }
    ],
  chicken: [
    {
      title: 'Chicken Basic',
      imgSrc: require('@/assets/Burgers/Chicken/chicken1.png'),
      price: 1.44,
      isBurger: true,
      ingredients: ['chicken','cheese']
    },
    {
      title: 'Chicken Deli',
      imgSrc: require('@/assets/Burgers/Chicken/chicken2.png'),
      price: 2.01,
      isBurger: true,
      ingredients:['chicken','cheese','tomato']
    },
    {
      title: 'Crispy Chicken',
      imgSrc: require('@/assets/Burgers/Chicken/chicken3.png'),
      price: 1.89,
      isBurger: true,
      ingredients:['Crispychicken','cheese']
    },
    {
      title: 'Large Chicken',
      imgSrc: require('@/assets/Burgers/Chicken/chicken4.png'),
      price: 1.13,
      isBurger: true,
      ingredients:['chicken','cheese','tomato']
    },
    {
      title: 'Chicken BBQ',
      imgSrc: require('@/assets/Burgers/Chicken/chicken5.png'),
      price: 2.51,
      isBurger: true,
      ingredients:['chickenBBQ','cheese']
    }
  ],
  fish: [
    {
      title: 'Fish Burger',
      imgSrc: require('@/assets/Burgers/Fish/fish1.png'),
      price: 1.58,
      isBurger: true,
      ingredients:['fish','cheese','tomato']
    },
    {
      title: 'Integral Fish',
      imgSrc: require('@/assets/Burgers/Fish/fish2.png'),
      price: 1.21,
      isBurger: true,
      ingredients:['fish','cheese','Integral bread']
    },
    {
      title: 'Long Fish',
      imgSrc: require('@/assets/Burgers/Fish/fish3.png'),
      price: 1.54,
      isBurger: true,
      ingredients: ['doble fish','cheese']
    }
  ],
  vegetarian: [
    {
      title: 'Classic Veggie',
      imgSrc: require('@/assets/Burgers/Veggie/veggie1.png'),
      price: 1.99,
      isBurger: true,
      ingredients:['tofu','cheese']
    },
    {
      title: 'Cripsy Veggie',
      imgSrc: require('@/assets/Burgers/Veggie/veggie2.png'),
      price: 1.98,
      isBurger: true,
      ingredients:['tofu','crispy onion','cheese']
    },
    {
      title: 'Typical Veg',
      imgSrc: require('@/assets/Burgers/Veggie/veggie3.png'),
      price: 1.78,
      isBurger: true,
      ingredients:['tofu','crispy onion','cheese']
    },
    {
      title: 'Veggie Cool',
      imgSrc: require('@/assets/Burgers/Veggie/veggie4.png'),
      price: 1.78,
      isBurger: true,
      ingredients:['tofu','tomato','cheese','peper']
    }
  ]
  },
  drinks: {
    water: [
      {
        title: 'Evian',
        imgSrc: require('@/assets/Drinks/Water/evian.png'),
        price: 0.99
      },
      {
        title: 'Fiji',
        imgSrc: require('@/assets/Drinks/Water/fiji.png'),
        price: 2.20
      },
      {
        title: 'Solan de Cabras',
        imgSrc: require('@/assets/Drinks/Water/solan.png'),
        price: 0.57
      },
      {
        title: 'Vichy Catalan',
        imgSrc: require('@/assets/Drinks/Water/vichy.png'),
        price: 0.68
      }
    ],
    sodas: [
      {
        title: 'Coca-Cola',
        imgSrc: require('@/assets/Drinks/Sodas/coke.png'),
        price: 0.99
      },
      {
        title: 'Coca-Cola Zero',
        imgSrc: require('@/assets/Drinks/Sodas/coke-zero.png'),
        price: 0.99
      },
      {
        title: 'Coca-Cola Light',
        imgSrc: require('@/assets/Drinks/Sodas/coke-light.png'),
        price: 0.99
      },
      {
        title: 'Fanta',
        imgSrc: require('@/assets/Drinks/Sodas/fanta.png'),
        price: 0.99
      },
      {
        title: 'Sprite',
        imgSrc: require('@/assets/Drinks/Sodas/sprite.png'),
        price: 0.99
      }
    ],
    beers: [
      {
        title: 'Norrlands',
        imgSrc: require('@/assets/Drinks/Beers/norrlands.png'),
        price: 3.45
      },
      {
        title: 'Falcon',
        imgSrc: require('@/assets/Drinks/Beers/falcon.png'),
        price: 4.12
      },
      {
        title: 'Heineken',
        imgSrc: require('@/assets/Drinks/Beers/heineken.png'),
        price: 3.78
      },
      {
        title: 'Mahou',
        imgSrc: require('@/assets/Drinks/Beers/mahou-gf.png'),
        price: 2.76
      },
      {
        title: 'Estrella Galicia',
        imgSrc: require('@/assets/Drinks/Beers/eg.png'),
        price: 5.51
      }
    ]
  },
  sides: {
    fries: [
      {
        title: 'Chillicheese',
        imgSrc: require('@/assets/Sides/Fries/chillicheese.png'),
        price: 3.49
      },
      {
        title: 'French Fries',
        imgSrc: require('@/assets/Sides/Fries/french-fries.png'),
        price: 3.49
      },
      {
        title: 'Mozzarella',
        imgSrc: require('@/assets/Sides/Fries/mozzarella.png'),
        price: 4.49
      },
      {
        title: 'Onion Rings',
        imgSrc: require('@/assets/Sides/Fries/onion-rings.png'),
        price: 3.49
      },
      {
        title: 'Chicken Wings',
        imgSrc: require('@/assets/Sides/Fries/wings.png'),
        price: 5.49
      }
    ],
    sauces: [
      {
        title: 'BBQ',
        imgSrc: require('@/assets/Sides/Sauces/bbq.png'),
        price: 3.45
      },
      {
        title: 'Mango',
        imgSrc: require('@/assets/Sides/Sauces/mango.png'),
        price: 4.12
      },
      {
        title: 'Mayo',
        imgSrc: require('@/assets/Sides/Sauces/mayo.png'),
        price: 3.78
      },
      {
        title: 'Original',
        imgSrc: require('@/assets/Sides/Sauces/original.png'),
        price: 2.76
      },
      {
        title: 'Ranch',
        imgSrc: require('@/assets/Sides/Sauces/ranch.png'),
        price: 5.51
      }
    ],
    shakes: [
      {
        title: 'Chocolate',
        imgSrc: require('@/assets/Sides/Shakes/choco.png'),
        price: 4.99
      },
      {
        title: 'Orange',
        imgSrc: require('@/assets/Sides/Shakes/orange.png'),
        price: 4.99
      },
      {
        title: 'Strawberry',
        imgSrc: require('@/assets/Sides/Shakes/strawberry.png'),
        price: 4.99
      }
    ]
  }
}

export default menu;
