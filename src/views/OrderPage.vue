<template>
  <div id="container">
  <Tabs
  :currentPage='currentPage'
  :currentOrderTabs='currentOrder'
  :orderTotalTabs='orderTotal'
  @added_item_to_order="addItem"
  @changeview="changeView"
  />

  <BurgerConstruction
  :currentPage='currentPage'
  @added_custom_burger="addItem"
  @changeview="changeView"
  />

  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue';
import BurgerConstruction from './BurgerConstruction.vue';


export default {
  name: 'OrderPage',
  components: {
    Tabs,
    BurgerConstruction,
  },
  data () {
    return {
      currentOrder: [],
      orderTotal:  0.00,
      currentPage: []

    }
  },
  methods: {
    addItem: function(item) {
      console.log('add item OrderPage');
      // add order to order list
      this.currentOrder.push({
       item: item
      });

      // update total price, have to use an array unfortunately
      this.orderTotal[0] + item.price;
    },
    removeItem: function(itemIndex) {
      this.orderTotal[0] - this.currentOrder[itemIndex].item.price;

      this.currentOrder.splice(itemIndex, 1);
    },
    changeView:function(inputKey)
    {
    if (inputKey==='BurgerConstruction')
      {
      var justNumber = 0;
      this.currentPage.push(justNumber);
      }
    else if (inputKey==='Tabs')
      {
      this.currentPage = [];
      }
   }
}
}
</script>

<style scoped>
</style>
