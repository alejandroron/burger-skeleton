<template>
  <div id="container">
    <Navbar
      :displayButtons='true'
      :orderPage='true'
      :backAddressProperty='"./#/"'
      :backTextProperty='"START OVER"'
      :titleProperty='"CREATE YOUR MENU"'
      :nextAddressProperty='"./#/OrderSummary/" + convertOrdersToString()'
      :nextTextProperty='"FINISH ORDER"'
	  
      @added_customized_to_order="addItem" />
    <Tabs
      @addedItemToOrder="addItem"
      @changeview="$emit('changeview','BurgerConstruction')" />
    <Footer
      :currentOrder='currentOrder'
      :orderTotal='orderTotal'
      @removeItemFromOrder="removeItem" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Tabs from '@/components/Tab.vue';
import Footer from '@/components/Footer.vue';
import sharedVueStuff from '@/components/sharedVueStuff.js';

// wanted to do something like this to utilize the url bar
//var runningTotal = passedTotal();
//var runningOrder = passedOrder();
"use strict";
var runningTotal = [ 0.00 ];
var runningOrder = [];

export default {
  name: 'OrderPage',
  components: {
    Navbar,
    Tabs,
    Footer
  },
  data () {
    return {
      currentOrder: runningOrder,
      orderTotal: runningTotal
    }
  },
  mixins: [sharedVueStuff],
  computed: {
    modifyUrl: function(){
		runningTotal=JSON.parse(this.$route.params.orderPageString).price;
		
	},
    passedTotal: function() {
	    console.log("passedTotal");
	    return  JSON.parse(this.$route.params.orderPageString).price;
	  
    },
    passedOrder: function(){
	    return JSON.parse(this.$route.params.orderPageString).order; 
	},
  },
  methods: {
    addItem: function(item) {
      // add order to order list
	   runningOrder.push({
       item: item
      });

      // update total price, have to use an array unfortunately
      runningTotal.push(runningTotal[0] + item.price);
      runningTotal.splice(0, 1);
    },
    removeItem: function(itemIndex) {
      runningTotal.push(runningTotal[0] - runningOrder[itemIndex].item.price);
      runningTotal.splice(0, 1);

      runningOrder.splice(itemIndex, 1);
	 
    },
    convertOrdersToString() {
      var order = {
        price: runningTotal,
        order: runningOrder
      };

      var truncatedOrderString = JSON.stringify(order);
      // regex expression for removing the imgSrc property of the string
      // vue doesn't like this property being passed
      return truncatedOrderString.replace(/,"imgSrc":"\/img\/[a-zA-Z0-9,-]*.[a-zA-Z0-9]*.png"/g,'');
    }
  },
  created: function () {
    this.$store.state.socket.on('modified',function() {
	  console.log("recibo");
      runningOrder=this.passedOrder;
	  runningTotal=this.passedTotal;
	  this.orderTotal=this.passedTotal;
	  this.currentOrder=this.passedOrder;
	  console.log(this.orderTotal);
    }.bind(this));

  }
}
</script>

<style scoped>
</style>
