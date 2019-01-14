'use strict';

var customBurgerMenu = {
  buns: {
    name: "BUNS",
    children: [
      { name: "Kaiser Roll", price: 1.52, imgSrc:'kaiserroll.png' },
      { name: "Onion Roll", price: 1.52, imgSrc:'onionroll.png'  },
      { name: "Potato Roll", price: 1.52, imgSrc:'potatoroll.png'  },
      { name: "Pretzel Roll", price: 1.52, imgSrc:'pretzelroll.png'  },
      { name: "Sesame Seed Bun", price: 1.52, imgSrc:'sesameroll.png'  }
    ]
  },
  meat: {
    name: "MEAT",
    children: [
      { name: "Beef", price: 1.52, imgSrc:'beef.png'  },
      { name: "Chicken", price: 1.52, imgSrc:'chicken.png'  },
      { name: "Fish", price: 1.52, imgSrc:'fish.png'  },
      { name: "Vegetarian", price: 1.52, imgSrc:'vegie.png'  },
    ]
  },
  ingredients: {
    name: "INGREDIENTS",
    children: [
      { name: "Lettuce", price: 1.52, imgSrc:'lettuce.png'  },
      { name: "Cheese", price: 1.52, imgSrc:'cheese.png' },
      { name: "Tomato" , price: 1.52, imgSrc:'tomato.png' },
      { name: "Pickles", price: 1.52, imgSrc:'pickles.png' },
      { name: "Onions", price: 1.52, imgSrc:'onion.png' },
      { name: "Peppers", price: 1.52, imgSrc:'pepper.png' },
    ]
  },
  sauces: {
    name: "SAUCES",
    children: [

      { name: "Ketchup", price: 1.52, imgSrc:'ketchup.png' },
      { name: "Mustard", price: 1.52, imgSrc:'mustard.png' },
      { name: "BQQ Sauce", price: 1.52, imgSrc:'bbq.png' },

      { name: "Mayo", price: 1.52, imgSrc:'mayo.png' },
    ]
  }
}

export default customBurgerMenu;
