<template>
  <div id="container" v-if="currentPage.length !== 0">
  <NavbarBurger
  :currentPage='currentPage'
  :displayButtons='true'
  :backTextProperty='"BACK TO ORDER"'
  :titleProperty='"CREATE YOUR OWN BURGER"'
  :nextTextProperty='"FINISH BURGER"'
  @back_address_property="changeView"
  @next_address_property="addBurgerToOrder"
  />

  <AccordianMenu
  :menuData="menuData"
  :decitem = "decitem"
  @add_ingredient_to_burger="addIngredient"
  @delete_ingredient_from_burger="removeItembyname"
  />

  <BurgerFooter
  :currentBurger='currentBurger'
  :burgerTotal='burgerTotal'
  @remove_item_from_order="removeItem"
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
      currentBurger: [],
      burgerTotal: [0.00],
      decitem: ''
    }
  },
  methods: {
    addIngredient: function(ingredient) {
    console.log('hi from burgerCons');
      this.currentBurger.push({
      item: ingredient
      });

      // update total price, have to use an array unfortunately
      this.burgerTotal.push(runningTotal[0] + ingredient.price);
      this.burgerTotal.splice(0, 1);
    },
    removeItem: function(itemIndex) {
      this.burgerTotal.push(runningTotal[0] - this.currentBurger[itemIndex].item.price);
      this.burgerTotal.splice(0, 1);
      this.decitem = this.currentBurger[itemIndex].item.name;
      this.currentBurger.splice(itemIndex, 1);
    },
    removeItembyname: function(model) {
    console.log('hi from burgerCons');
    var i;
    var counter = 0;

    for (i=0; i<this.currentBurger.length; i++){
    if(this.currentBurger[i].item.name == model.name && counter == 0){
      this.burgerTotal.push(this.burgerTotal[0] - this.currentBurger[i].item.price);
      this.burgerTotalTotal.splice(0, 1);

      this.currentBurger.splice(i, 1);
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
