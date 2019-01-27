'use strict';

var customBurgerMenu = {
  buns: {
    name: "BUNS",
    children: [
      { name: "60", price: 0.50, imgSrc:'kaiserroll.png' },
      { name: "61", price: 0.50, imgSrc:'onionroll.png'  },
      { name: "62", price: 0.50, imgSrc:'potatoroll.png'  },
      { name: "63", price: 0.50, imgSrc:'pretzelroll.png'  },
      { name: "64", price: 0.50, imgSrc:'sesameroll.png'  }
    ]
  },
  meat: {
    name: "MEAT",
    children: [
      { name: "65", price: 0.50, imgSrc:'beef.png'  },
      { name: "66", price: 0.50, imgSrc:'chicken.png'  },
      { name: "67", price: 0.50, imgSrc:'fish.png'  },
      { name: "68", price: 0.50, imgSrc:'vegie.png'  },
    ]
  },
  ingredients: {
    name: "INGREDIENTS",
    children: [
      { name: "69", price: 0.50, imgSrc:'lettuce.png'  },
      { name: "70", price: 0.50, imgSrc:'cheese.png' },
      { name: "71" , price: 0.50, imgSrc:'tomato.png' },
      { name: "72", price: 0.50, imgSrc:'pickles.png' },
      { name: "73", price: 0.50, imgSrc:'onion.png' },
      { name: "74", price: 0.50, imgSrc:'pepper.png' },
    ]
  },
  sauces: {
    name: "SAUCES",
    children: [

      { name: "75", price: 0.50, imgSrc:'ketchup.png' },
      { name: "76", price: 0.50, imgSrc:'mustard.png' },
      { name: "77", price: 0.50, imgSrc:'bbq.png' },

      { name: "78", price: 0.50, imgSrc:'mayo.png' },
    ]
  }
}

export default customBurgerMenu;
