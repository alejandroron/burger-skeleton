<template>
  <div id="container">
    <Navbar
      :displayButtons='true'
      :backAddressProperty='"./#/OrderPage"'
      :backTextProperty='"MAIN PAGE"'
      :titleProperty='"CREATE YOUR OWN BURGER"'
      :nextAddressProperty='"./#/OrderPage"'
      :nextTextProperty='"FINISH BURGER"'
      :order='currentOrder' />
    <AccordianMenu
      :menuData="menuData"
      @addIngredientToBurger="addIngredient" 
      @deleteIngredientFromBurger="removeItembyname"/>
    <Footer
      :currentOrder='currentOrder'
      :orderTotal='orderTotal'
      @removeItemFromOrder="removeItem" />
  </div> 
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import AccordianMenu from '@/components/AccordianMenu.vue';
import Footer from '@/components/Footer.vue';

import customBurgerMenu from '@/components/customBurgerMenu.js';

var runningTotal = [ 0.00 ];
var runningOrder = [];

export default {
  name: 'BurgerConstruction',
  components: {
    AccordianMenu,
    Navbar,
    Footer
  },
  data () {
    return {
      menuData: customBurgerMenu,
      currentOrder: runningOrder,
      orderTotal: runningTotal
    }
  },
  methods: {
    addIngredient: function(ingredient) {
      // add order to order list
      runningOrder.push({
       item: ingredient
      });

      // update total price, have to use an array unfortunately
      runningTotal.push(runningTotal[0] + ingredient.price);
      runningTotal.splice(0, 1);
    },
    removeItem: function(itemIndex) {
      runningTotal.push(runningTotal[0] - runningOrder[itemIndex].item.price);
      runningTotal.splice(0, 1);

      runningOrder.splice(itemIndex, 1);
    },
    removeItembyname: function(model) {
    var i;
    for (i=0; i<runningOrder.length; i++){
    if(runningOrder[i].item.name == model.name)
      runningTotal.push(runningTotal[0] - runningOrder[i].item.price);
      runningTotal.splice(0, 1);

      runningOrder.splice(i, 1);
      }
    }
  }
}
</script>

<style scoped>
</style>
