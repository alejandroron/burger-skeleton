<template>
  <div id="container">
    <Navbar
      :backAddressProperty='"./#/OrderPage"'
      :backTextProperty='"MAIN PAGE"'
      :titleProperty='"CREATE YOUR OWN BURGER"' />
    <AccordianMenu
      :menuData="menuData" />
    <OrderItemToPrepare
      v-for="(order, key) in orders"
      v-if="order.status !== 'done'"
      v-on:done="markDone(key)"
      :order-id="key"
      :order="order" 
      :ui-labels="uiLabels"
      :lang="lang"
      :key="key" />
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'; 
import AccordianMenu from '@/components/AccordianMenu.vue';
import OrderItemToPrepare from '@/components/OrderItemToPrepare.vue';

import customBurgerMenu from '@/components/customBurgerMenu.js';

var runningTotal = [ 0.00 ];
var runningOrder = [];

export default {
  name: 'KitchenOrderPage',
  components: {
    AccordianMenu,
    Navbar,
    OrderItemToPrepare
  },
  data () {
    return {
      menuData: customBurgerMenu,
      currentOrder: runningOrder,
      orderTotal: runningTotal
    }
  },
  methods: {
    addItem: function(item) {
      // add order to order list
      runningOrder.push({
       item:item
      });
		
      // update total price, have to use an array unfortunately
      runningTotal.push(runningTotal[0] + item.price);
      runningTotal.splice(0, 1);
    },	
    removeItem: function(itemIndex) {
      runningTotal.push(runningTotal[0] - runningOrder[itemIndex].item.price);
      runningTotal.splice(0, 1);

      runningOrder.splice(itemIndex, 1);
    }
  }
}
</script>

<style scoped>
</style>
