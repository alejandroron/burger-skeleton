<template>
  <div id="container" v-if="currentPage.length !== 0">
  <NavbarBurger
  :currentPage='currentPage'
  :displayButtons='true'
  :backTextProperty='"BACK TO ORDER"'
  :titleProperty='"CREATE YOUR OWN BURGER"'
  :nextTextProperty='"FINISH BURGER"'
  :order='currentOrder'
  :totalPrice='orderTotal'
  @added_customized_to_order="addItem"
  @back_address_property="changeView"
  @next_address_property="addBurgerToOrder"
  />

  <AccordianMenu
  :menuData="menuData"
  :decitem = "decitem"
  @addIngredientToBurger="addIngredient"
  @deleteIngredientFromBurger="removeItembyname"
  />

  <BurgerFooter
  :currentOrder='currentOrder'
  :orderTotal='orderTotal'
  @removeItemFromOrder="removeItem"
  />

  </div>
</template>

<script>
import AccordianMenu from '@/components/AccordianMenu.vue';
import NavbarBurger from '@/components/NavbarBurger.vue';
import BurgerFooter from '@/components/BurgerFooter.vue';
import customBurgerMenu from '@/components/customBurgerMenu.js';

var runningTotal = [ 0.00 ];
var runningOrder = [];

export default {
  name: 'BurgerConstruction',
  props: [
    'currentPage'
  ],
  components: {
    NavbarBurger,
    AccordianMenu,
    BurgerFooter
  },
  data () {
    return {
      menuData: customBurgerMenu,
      currentOrder: runningOrder,
      orderTotal: runningTotal,
      decitem: ''
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
      this.decitem = runningOrder[itemIndex].item.name;
      runningOrder.splice(itemIndex, 1);
    },
    removeItembyname: function(model) {
    var i;
    var counter = 0;

    for (i=0; i<runningOrder.length; i++){
    if(runningOrder[i].item.name == model.name && counter == 0){
      runningTotal.push(runningTotal[0] - runningOrder[i].item.price);
      runningTotal.splice(0, 1);

      runningOrder.splice(i, 1);
      counter++;
      }
      }
    },
    addBurgerToOrder: function() {

    },
    changeView: function() {
    console.log('hi from burgerCons');
    this.$emit('changeview','Tabs');
    }
  }
}
</script>

<style scoped>
</style>
