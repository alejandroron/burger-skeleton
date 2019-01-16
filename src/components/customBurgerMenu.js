'use strict';

var customBurgerMenu = {
  buns: {
    name: "BUNS",
    children: [
      { name: "Kaiser Roll", price: 1.52, imgSrc: require('@/assets/Creation/Buns/kaiserroll.png'), counter: 0 },
      { name: "Onion Roll", price: 1.52, imgSrc: require('@/assets/Creation/Buns/onionroll.png'), counter: 0  },
      { name: "Potato Roll", price: 1.52, imgSrc: require('@/assets/Creation/Buns/potatoroll.png'), counter: 0  },
      { name: "Pretzel Roll", price: 1.52, imgSrc: require('@/assets/Creation/Buns/pretzelroll.png'), counter: 0  },
      { name: "Sesame Seed Bun", price: 1.52, imgSrc: require('@/assets/Creation/Buns/sesameroll.png'), counter: 0  }
    ]
  },
  meat: {
    name: "MEAT",
    children: [
      { name: "Beef", price: 1.52, imgSrc: require('@/assets/Creation/Meat/beef.png'), counter: 0  },
      { name: "Chicken", price: 1.52, imgSrc: require('@/assets/Creation/Meat/chicken.png'), counter: 0  },
      { name: "Fish", price: 1.52, imgSrc: require('@/assets/Creation/Meat/fish.png'), counter: 0  },
      { name: "Vegetarian", price: 1.52, imgSrc: require('@/assets/Creation/Meat/vegie.png'), counter: 0  }
    ]
  },
  ingredients: {
    name: "INGREDIENTS",
    children: [
      { name: "Lettuce", price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/lettuce.png'), counter: 0  },
      { name: "Cheese", price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/cheese.png'), counter: 0 },
      { name: "Tomato" , price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/tomato.png'), counter: 0 },
      { name: "Pickles", price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/pickles.png'), counter: 0 },
      { name: "Onions", price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/onion.png'), counter: 0 },
      { name: "Peppers", price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/pepper.png'), counter: 0 }
    ]
  },
  sauces: {
    name: "SAUCES",
    children: [

      { name: "Ketchup", price: 1.52, imgSrc: require('@/assets/Sides/Sauces/ketchup.png'), counter: 0 },
      { name: "Mustard", price: 1.52, imgSrc: require('@/assets/Sides/Sauces/mustard.png'), counter: 0 },
      { name: "BQQ Sauce", price: 1.52, imgSrc: require('@/assets/Sides/Sauces/bbq.png'), counter: 0 },
      { name: "Mayo", price: 1.52, imgSrc: require('@/assets/Sides/Sauces/mayo.png'), counter: 0 }
    ]
  }
}

export default customBurgerMenu;
