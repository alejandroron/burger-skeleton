'use strict';

var customBurgerMenu = {
  buns: {
    name: "BUNS",
    children: [
      { name: "Kaiser Roll", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png') },
      { name: "Onion Roll", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png')  },
      { name: "Potato Roll", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png')  },
      { name: "Pretzel Roll", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png')  },
      { name: "Sesame Seed Bun", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png')  }
    ]
  },
  meat: {
    name: "MEAT",
    children: [
      { name: "Beef", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png')  },
      { name: "Chicken", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png')  },
      { name: "Fish", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png')  },
      { name: "Vegetarian", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png')  },
    ]
  },
  ingredients: {
    name: "INGREDIENTS",
    children: [
      { name: "Lettuce", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png')  },
      { name: "Cheese", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png') },
      { name: "Tomato" , price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png') },
      { name: "Pickles", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png') },
      { name: "Onions", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png') },
    ]
  },
  sauces: {
    name: "SAUCES",
    children: [
      { name: "Ketchup", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png') },
      { name: "Mustard", price: 1.52, imgSrc: require('@/assets/Burgers/Beef/beef1.png') },
      { name: "BQQ Sauce", price: 1.52, imgSrc: require('@/assets/Sides/Sauces/bbq.png') },
      { name: "Mayo", price: 1.52, imgSrc: require('@/assets/Sides/Sauces/mayo.png') },
    ]
  }
}

export default customBurgerMenu;
