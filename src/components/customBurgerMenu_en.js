'use strict';

var customBurgerMenuEN = {
  buns: {
    name: "BUNS",
    children: [
      { name: "Kaiser Roll", price: 0.50, imgSrc:'kaiserroll.png' },
      { name: "Onion Roll", price: 0.50, imgSrc:'onionroll.png'  },
      { name: "Potato Roll", price: 0.50, imgSrc:'potatoroll.png'  },
      { name: "Pretzel Roll", price: 0.50, imgSrc:'pretzelroll.png'  },
      { name: "Sesame Seed Bun", price: 0.50, imgSrc:'sesameroll.png'  }
    ]
  },
  meat: {
    name: "MEAT",
    children: [
      { name: "Beef", price: 0.50, imgSrc:'beef.png'  },
      { name: "Chicken", price: 0.50, imgSrc:'chicken.png'  },
      { name: "Fish", price: 0.50, imgSrc:'fish.png'  },
      { name: "Vegetarian", price: 0.50, imgSrc:'vegie.png'  },
    ]
  },
  ingredients: {
    name: "INGREDIENTS",
    children: [
      { name: "Lettuce", price: 0.50, imgSrc:'lettuce.png'  },
      { name: "Cheese", price: 0.50, imgSrc:'cheese.png' },
      { name: "Tomato" , price: 0.50, imgSrc:'tomato.png' },
      { name: "Pickles", price: 0.50, imgSrc:'pickles.png' },
      { name: "Onions", price: 0.50, imgSrc:'onion.png' },
      { name: "Peppers", price: 0.50, imgSrc:'pepper.png' },
    ]
  },
  sauces: {
    name: "SAUCES",
    children: [

      { name: "Ketchup", price: 0.50, imgSrc:'ketchup.png' },
      { name: "Mustard", price: 0.50, imgSrc:'mustard.png' },
      { name: "BQQ Sauce", price: 0.50, imgSrc:'bbq.png' },

      { name: "Mayo", price: 0.50, imgSrc:'mayo.png' },
    ]
  }
}

export default customBurgerMenuEN;
