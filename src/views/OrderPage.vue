<template>
  <div id="container">

  <StartPage
  :currentPage='currentPage'
  @changeview="changeView"
  />

  <Tabs
  :currentPage='currentPage'
  :currentOrderTabs='currentOrder'
  :orderTotalTabs='orderTotal'
  @added_item_to_order="addItem"
  @removed_item_from_order="removeItem"
  @changeview="changeView"
  />

  <BurgerConstruction
  :currentPage='currentPage'
  @added_custom_burger="addItem"
  @changeview="changeView"
  />

  <OrderSummaryPage
  :currentPage='currentPage'
  :currentOrderSummary='currentOrder'
  :orderTotalSummary='orderTotal'
  @changeview="changeView"
  @send_order="placeOrder"
  @item_delete="removeItem"
  />

  <OrderCompletedPage
  :currentPage='currentPage'
  />

  </div>
</template>

<script>
import StartPage from './StartPage.vue';
import Tabs from '@/components/Tabs.vue';
import BurgerConstruction from './BurgerConstruction.vue';
import OrderSummaryPage from './OrderSummaryPage.vue';
import OrderCompletedPage from './OrderCompletedPage.vue';

export default {
  name: 'OrderPage',
  components: {
    StartPage,
    Tabs,
    BurgerConstruction,
    OrderSummaryPage,
    OrderCompletedPage
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
      // update total price
      this.orderTotal += item.price;
    },

    removeItem: function(itemIndex) {
      this.orderTotal -= this.currentOrder[itemIndex].item.price;
      this.currentOrder.splice(itemIndex, 1);
    },

    placeOrder: function()
    {
      console.log('order sent');
      // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
      this.$store.state.socket.emit('order', this.currentOrder);
    },
/*
    decrementIngredient: function(indexItem, indexIngredient)
    {
    },

    incrementIngredient: function(indexItem, indexIngredient)
    {
    },
*/
    changeView:function(inputKey)
    {
    console.log(inputKey);
    if (inputKey==='BurgerConstruction')
      {
      var justNumber = 0;
      this.currentPage.push(justNumber);
      }
    else if (inputKey==='Tabs')
      {
      if (this.currentPage.length > 1)
      {
        while (this.currentPage.length > 1)
        {
          this.currentPage.splice(0,1);
        }
      }
      else
      {
        var someNumber = 0;
        this.currentPage.push(someNumber);
      }
      }
    else if (inputKey==='StartPage')
    {
      this.currentPage = [];
    }
    else if (inputKey==='OrderSummary')
    {
      console.log(this.currentOrder);
      while (this.currentPage.length < 3)
      {
        var justAnotherNumber = 3;
        this.currentPage.push(justAnotherNumber);
      }
    }
    else if (inputKey==='OrderCompletedPage')
    {
      while (this.currentPage.length < 4)
      {
        var justOneMoreNumber = 4;
        this.currentPage.push(justOneMoreNumber);
      }
    }
    }
  }

}

</script>

<style scoped>
</style>
