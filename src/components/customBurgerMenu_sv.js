'use strict';

var customBurgerMenu = {
  buns: {
    name: "BRÖD",
    children: [
      { name: "Kejsarbröd", price: 0.50, imgSrc:'kaiserroll.png' },
      { name: "Lökbröd", price: 0.50, imgSrc:'onionroll.png'  },
      { name: "Potatisbröd", price: 0.50, imgSrc:'potatoroll.png'  },
      { name: "Kringla", price: 0.50, imgSrc:'pretzelroll.png'  },
      { name: "Sesambröd", price: 0.50, imgSrc:'sesameroll.png'  }
    ]
  },
  meat: {
    name: "PROTEIN",
    children: [
      { name: "Nötkött", price: 0.50, imgSrc:'beef.png'  },
      { name: "Kyckling", price: 0.50, imgSrc:'chicken.png'  },
      { name: "Fiskburgare", price: 0.50, imgSrc:'fish.png'  },
      { name: "Tofuburgare", price: 0.50, imgSrc:'vegie.png'  },
    ]
  },
  ingredients: {
    name: "INGREDIENSER",
    children: [
      { name: "Sallad", price: 0.50, imgSrc:'lettuce.png'  },
      { name: "Ost", price: 0.50, imgSrc:'cheese.png' },
      { name: "Tomat" , price: 0.50, imgSrc:'tomato.png' },
      { name: "Saltgurka", price: 0.50, imgSrc:'pickles.png' },
      { name: "Lök", price: 0.50, imgSrc:'onion.png' },
      { name: "Chili flakes", price: 0.50, imgSrc:'pepper.png' },
    ]
  },
  sauces: {
    name: "SÅSER",
    children: [

      { name: "Ketchup", price: 0.50, imgSrc:'ketchup.png' },
      { name: "Senap", price: 0.50, imgSrc:'mustard.png' },
      { name: "BBQ-sås", price: 0.50, imgSrc:'bbq.png' },
      { name: "Majonnäs", price: 0.50, imgSrc:'mayo.png' },
    ]
  }
}

export default customBurgerMenu;
