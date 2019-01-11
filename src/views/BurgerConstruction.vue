<template>
  <div id="container">
    <Navbar2
    :backAddressProperty='"./#/OrderPage"'
    :backTextProperty='"MAIN PAGE"'
    :titleProperty='"CREATE YOUR OWN BURGER"'
      />
    <Bars
      :treedata="tree"
      :meatdata="meat"
      :ingredientsdata="ingredients"
      :saucesdata="sauces"
      />
    <Footer
      :currentOrder='currentOrder'
      :orderTotal='orderTotal'
      @removeItemFromOrder="removeItem"
      />
  </div>
</template>

<script>

import Navbar2 from '@/components/Navbar2.vue';
import Bars from './Test1.vue';
import Footer from '@/components/Footer.vue';


var runningTotal = [ 0.00 ];
var runningOrder = [];

export default {
  name: 'Test',
  components:{
    Bars,
    Navbar2,
    Footer
  },
  data: ()=> ({

tree: {
  name: "BREAD",
  children: [
    {
      name: "Flat Bread"},{
      name: "Fat Bread"},{
      name: "Light Bread"},{
      name: "Ugly Bread"},{
      name: "Cute Bread"}


  ]
},
meat:{
 name: "MEAT",
  children: [
    {
      name: "Flat Bread"},{
      name: "Fat Bread"},{
      name: "Light Bread"},{
      name: "Ugly Bread"},{
      name: "Cute Bread"}


  ]
},
ingredients:{
 name: "INGREDIENTS",
  children: [
    {
      name: "Flat Bread"},{
      name: "Fat Bread"},{
      name: "Light Bread"},{
      name: "Ugly Bread"},{
      name: "Cute Bread"}


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
