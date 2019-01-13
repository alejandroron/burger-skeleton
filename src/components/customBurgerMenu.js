'use strict';

var customBurgerMenu = {
  buns: {
    name: "BUNS",
    children: [
      { name: "Kaiser Roll", price: 1.52, imgSrc: require('@/assets/Creation/Buns/kaiserroll.png') },
      { name: "Onion Roll", price: 1.52, imgSrc: require('@/assets/Creation/Buns/onionroll.png')  },
      { name: "Potato Roll", price: 1.52, imgSrc: require('@/assets/Creation/Buns/potatoroll.png')  },
      { name: "Pretzel Roll", price: 1.52, imgSrc: require('@/assets/Creation/Buns/pretzelroll.png')  },
      { name: "Sesame Seed Bun", price: 1.52, imgSrc: require('@/assets/Creation/Buns/sesameroll.png')  }
    ]
  },
  meat: {
    name: "MEAT",
    children: [
      { name: "Beef", price: 1.52, imgSrc: require('@/assets/Creation/Meat/beef.png')  },
      { name: "Chicken", price: 1.52, imgSrc: require('@/assets/Creation/Meat/chicken.png')  },
      { name: "Fish", price: 1.52, imgSrc: require('@/assets/Creation/Meat/fish.png')  },
      { name: "Vegetarian", price: 1.52, imgSrc: require('@/assets/Creation/Meat/vegie.png')  },
    ]
  },
  ingredients: {
    name: "INGREDIENTS",
    children: [
      { name: "Lettuce", price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/lettuce.png')  },
      { name: "Cheese", price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/cheese.png') },
      { name: "Tomato" , price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/tomato.png') },
      { name: "Pickles", price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/pickles.png') },
      { name: "Onions", price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/onion.png') },
      { name: "Peppers", price: 1.52, imgSrc: require('@/assets/Creation/Ingredients/pepper.png') },
    ]
  },
  sauces: {
    name: "SAUCES",
    children: [

      { name: "Ketchup", price: 1.52, imgSrc: require('@/assets/Sides/Sauces/ketchup.png') },
      { name: "Mustard", price: 1.52, imgSrc: require('@/assets/Sides/Sauces/mustard.png') },
      { name: "BQQ Sauce", price: 1.52, imgSrc: require('@/assets/Sides/Sauces/bbq.png') },

      { name: "Mayo", price: 1.52, imgSrc: require('@/assets/Sides/Sauces/mayo.png') },
    ]
  }
}

export default customBurgerMenu;
