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
import StartPage from './StartPage.vue';
import Tabs from '@/components/Tabs.vue';
import BurgerConstruction from './BurgerConstruction.vue';


export default {
  name: 'OrderPage',
  components: {
    StartPage,
    Tabs,
    BurgerConstruction
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
      this.orderTotal += item.price;

    },
    removeItem: function(itemIndex) {
      this.orderTotal -= this.currentOrder[itemIndex].item.price;

      this.currentOrder.splice(itemIndex, 1);
    },
    changeView:function(inputKey)
    {
    console.log('hi from changeview OrderPage');
    console.log(inputKey);
    if (inputKey==='BurgerConstruction')
      {
      var justNumber = 0;
      this.currentPage.push(justNumber);
      }
    else if (inputKey==='Tabs')
      {
      if (this.currentPage.length > 1) {
        while (this.currentPage.length > 1)
        {
          this.currentPage.splice(0,1);
        }
      }
      else {
        var someNumber = 0;
        this.currentPage.push(someNumber);
      }
      }
    else if (inputKey==='StartPage')
      {
      this.currentPage = [];
      }
/*    else if (inputKey==='OrderSummary')
      {
      this.currentPage = [];
      } */
    }
  }
}

</script>

<style scoped>
</style>
