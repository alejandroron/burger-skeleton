<template>
  <div id="container">
    <Navbar
      :displayButtons='true'
      :backAddressProperty='"./#/OrderPage"'
      :backTextProperty='"MAIN PAGE"'
      :titleProperty='"CREATE YOUR OWN BURGER"'
      :nextAddressProperty='"./#/OrderPage"'
      :nextTextProperty='"FINISH BURGER"'
      :order='currentOrder'
      />
    <Bars
      :treedata="tree"
      :meatdata="meat"
      :ingredientsdata="ingredients"
      :saucesdata="sauces"
      />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Bars from './Test1.vue';


var runningTotal = [ 0.00 ];
var runningOrder = [];

export default {
  name: 'Test',
  components:{
    Bars,
    Navbar
  },
  data: ()=> ({

tree: {
  name: "BUNS",
  children: [
    {
      name: "Kaiser Roll"},{
      name: "Onion Roll"},{
      name: "Potato Roll"},{
      name: "Pretzel Roll"},{
      name: "Sesame Seed Bun"}
  ]
},
meat:{
 name: "MEAT",
  children: [
    {
      name: "Beef"},{
      name: "Chicken"},{
      name: "Fish"},{
      name: "Vegetarian"}
  ]
},
ingredients:{
 name: "INGREDIENTS",
  children: [
    {
      name: "Beef"},{
      name: "Chicken"},{
      name: "Fish"},{
      name: "Vegetarian"}
  ]
},
sauces:{
 name: "SAUCES",
  children: [
    {
      name: "Flat Bread"},{
      name: "Fat Bread"},{
      name: "Light Bread"},{
      name: "Ugly Bread"},{
      name: "Cute Bread"}
  ]
},
currentOrder:runningTotal,
orderTotal:runningOrder
 }),

 methods: {
	removeItem: function(itemIndex) {
      runningTotal.push(runningTotal[0] - runningOrder[itemIndex].price);
      runningTotal.splice(0, 1);

      runningOrder.splice(itemIndex, 1);
    },
	addItem: function(item) {
      // add order to order list
      runningOrder.push({
       item:item
      });
		
      // update total price, have to use an array unfortunately
      runningTotal.push(orderTotal[0] + item.price);
      runningTotal.splice(0, 1);
    },
 }
}
</script>

<style scoped>
</style>