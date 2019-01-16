<template>
  <div id="container">
    <Navbar
      :displayButtons='true'
      :orderPage='false'
      :backAddressProperty='"./#/OrderPage/customizedBurger"'
      :backTextProperty='"MAIN PAGE"'
      :titleProperty='"CREATE YOUR OWN BURGER"'
      :nextAddressProperty='"./#/OrderPage/customizedBurger"'
      :nextTextProperty='"FINISH BURGER"'
      :customizedOrder='currentOrder'
      :customizedPrice='orderTotal'
	  @CustomOrder="finishCreatedBurger"/>
    <AccordianMenu
      :menuData="menuData"
      :decitem = "decitem"
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
      orderTotal: runningTotal,
      decitem: ''
    }
  },
  methods: {
    addIngredient: function(ingredient) {
      // add order to order list
      runningOrder.push({item:ingredient});

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
	finishCreatedBurger: function(){
		//if(this.nextTextProperty=="FINISH BURGER"){
		console.log("I have finished building my the delicious burger, ummmmm que rico");
        /*convert the customized order array into an item
        and add it to the footer*/
		var arrIngredients=[];
		var i;
		for(i=0;i<this.currentOrder.length;i++){
			arrIngredients.push(this.currentOrder[i]["item"]);
		
		}
        var item = {
          title: 'Custom Order',
          imgSrc: "beef1.png",
          price: this.orderTotal[0],
          isBurger: true,
          ingredients: arrIngredients
        };
		console.log("burgerConstruction");
		console.log(item);
		this.$store.state.socket.emit('custo',item);
		//}
	}
  }
}
</script>

<style scoped>
</style>
