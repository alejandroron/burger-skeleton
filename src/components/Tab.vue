<script>
  var ownBurger = false;
  export default {
    name: 'Tabs',
    props: [
      'menu',
      'uiLabels',
      'BurgerTabTextProperty',
      'DrinksTabTextProperty',
      'SidesTabTextProperty',
      'CreateBurgerTextProperty'
    ],
    data: function() {
      return {
        activetab: 'burgers',
        createOwnBurger: ownBurger
      }
    },
  
    methods: {
      addItem: function(item) {
        this.$emit('addedItemToOrder', item); // talking to order page
      },
      showIngredients: function(ingredients) {
        var str = 'Ingredients: \n\n';
        var i = 0;
        for (i; i < ingredients.length; i++) {
          str = str + this.uiLabels[ingredients[i]] + '\n';
        }
        return str;
      },
      switchCreateOwnBurger: function() {
        console.log("switch");
        this.$emit('createOwnBurger');
        //this.$store.state.socket.emit('ini');
        this.$store.state.socket.emit('label', this.uiLabels);
      }
    }
  
  }
</script>

<template>
  <div class="wrapper">
  
    <div class="flaps">
      <a class="flap" id="burgersFlap" v-on:click="activetab='burgers'"> {{uiLabels[BurgerTabTextProperty]}} </a>
      <a class="flap" id="sidesFlap" v-on:click="activetab='sides'"> {{uiLabels[SidesTabTextProperty]}} </a>
      <a class="flap" id="drinksFlap" v-on:click="activetab='drinks'"> {{uiLabels[DrinksTabTextProperty]}} </a>
    </div>
  
    <div class="content">
      <div class="contentItem" id="burgersContent" v-if="activetab === 'burgers'">
        <a href="./#/BurgerConstruction">
          <div class="personalisedBurger" @click="switchCreateOwnBurger()">
            <p>{{CreateBurgerTextProperty}}</p>
          </div>
        </a>
        <div v-for="(burgerItems, burgerType) in menu.burgers" :key="burgerType">
          <br>
          <div class="grid-container">
            <div class="categoryName">{{ uiLabels[burgerType] }}</div>
            <div class="scrollable">
              <div class="menuItem" v-for="(item, index1) in burgerItems" :key="index1" @click="addItem(item)">
                <a :title="showIngredients(item.ingredients)">
                  <div class="menuPic"><img :src='require("@/assets/Food/" + item.imgSrc)'></div>
                  <div class="menuTitle">{{ uiLabels[item.title] }}</div>
                  <div class="menuPrice">({{ item.price }}€)</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="contentItem" id="drinksContent" v-if="activetab === 'drinks'">
        <div v-for="(drinkItems, drinkType) in menu.drinks" :key="drinkType">
          <br>
          <div class="grid-container">
            <div class="categoryName">{{ uiLabels[drinkType] }}</div>
            <div class="scrollable">
              <div class="menuItem" v-for="(item, index) in drinkItems" :key="index" @click="addItem(item)">
                <div class="menuPic"><img :src='require("@/assets/Food/" + item.imgSrc)'></div>
                <div class="menuTitle">{{ uiLabels[item.title] }}</div>
                <div class="menuPrice">({{ item.price }}€)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="contentItem" id="sidesContent" v-if="activetab === 'sides'">
        <div v-for="(sideItems, sideType) in menu.sides" :key="sideType">
          <br>
          <div class="grid-container">
            <div class="categoryName">{{ uiLabels[sideType] }}</div>
            <div class="scrollable">
              <div class="menuItem" v-for="(item, index) in sideItems" :key="index" @click="addItem(item)">
                <div class="menuPic"><img :src='require("@/assets/Food/" + item.imgSrc)'></div>
                <div class="menuTitle">{{ uiLabels[item.title] }}</div>
                <div class="menuPrice">({{ item.price }}€)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<style>
  .flaps {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 35px;
    justify-content: center;
  }
  
  .flap {
    /* Visual properties */
    height: 35px;
    width: 220px;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    margin-top: 80px;
    /* Text inside*/
    font-size: 30px;
    color: white;
    text-transform: uppercase;
    text-align: center;
    line-height: 40px;
  }
  
  #burgersFlap {
    order: 0;
    background-color: #ffc500;
  }
  
  #drinksFlap {
    order: 1;
    background-color: black;
  }
  
  #sidesFlap {
    order: 2;
    background-color: #3c40c6;
  }
  
  .content {
    margin-top: 80px;
    margin-bottom: 100px;
  }
  
  .contentItem {
    width: 100%;
    padding: 20px 20px 0px 20px;
  }
  
  #burgersContent {
    background-color: #ffc500;
  }
  
  #drinksContent {
    background-color: #000000;
  }
  
  #sidesContent {
    background-color: #3c40c6;
  }
  
  .personalisedBurger {
    background-color: #485460;
    height: 150px;
    border-radius: 10px;
    padding-left: 15%;
    padding-right: 15%;
    /* Visual properties */
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    line-height: 150px;
    filter: drop-shadow(0px 0px 2px #000);
  }
  
  .personalisedBurger:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 5px #000);
  }
  
  .personalisedBurger:active {
    background-color: #2D353C;
  }
  
  .personalisedBurger p {
    display: inline-block;
    vertical-align: middle;
    line-height: 60px;
  }
  
  .grid-container {
    display: grid;
    grid-template-rows: 40px 225px;
    grid-template-areas: "categoryName" "burgers";
  }
  
  .categoryName {
    grid-area: categoryName;
    color: white;
    line-height: 40px;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .scrollable {
    grid-area: burgers;
    overflow: auto;
    white-space: nowrap;
    display: grid;
    grid-template-columns: 199px 199px 199px 199px 199px;
    grid-template-areas: "burger1 burger2 burger3 burger4 burger5";
  }
  
  .menuItem {
    grid-template-rows: 160px 30px 30px;
    grid-template-areas: "menuPic" "menuTitle" "menuPrice";
  }
  
  .menuItem:hover {
    cursor: pointer;
    /* This brings problems in mobile devices
      box-shadow: 0px 0px 0px 1px white inset;
      border-radius: 10px; */
  }
  
  .menuItem:active {
    background-color: white;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
  
  .menuPic {
    grid-area: menuPic;
  }
  
  .menuPic img {
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    height: 70%;
    width: 70%;
  }
  
  .menuTitle {
    grid-area: menuTitle;
    margin-top: 5px;
    color: white;
    text-align: center;
    font-weight: bold;
    line-height: 30px;
    font-size: 20px;
    text-transform: uppercase;
  }
  
  .menuPrice {
    grid-area: menuPrice;
    margin-top: -5px;
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    text-transform: uppercase;
  }
  
  
  /* Queries */
  @media only screen and (max-width: 730px) {
    .flaps {
      height: 40px;
    }
    .flap {
      /* Visual properties */
      height: 20px;
      width: 100px;
      margin-top: 72.5px;
      /* Text inside*/
      font-size: 12px;
      line-height: 22px;
    }
    .content {
      margin-top: 52.50px;
      margin-bottom: 78px;
    }
    .contentItem {
      min-height: 85vh;
      padding: 8px 8px 0px 8px;
    }
    .personalisedBurger {
      height: 72.2px;
      padding-left: 13%;
      padding-right: 13%;
      font-size: 13px;
      line-height: 72.2px;
    }
    .personalisedBurger p {
      line-height: 20px;
    }
    .grid-container {
      grid-template-rows: 20px 115px;
    }
    .categoryName {
      line-height: 20px;
      font-size: 20px;
    }
    .scrollable {
      grid-template-columns: 100px 100px 100px 100px 100px;
    }
    .menuItem {
      grid-template-rows: 80px 15px 15px;
    }
    .menuPic img {
      margin-top: 6px;
    }
    .menuTitle {
      line-height: 15px;
      font-size: 10px;
    }
    .menuPrice {
      line-height: 15px;
      font-size: 10px;
      margin-top: 0;
    }
  }
</style>
