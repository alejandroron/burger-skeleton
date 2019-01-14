<template>
  <div id="container">
  <Tabs
  :currentPage='currentPage'
  @addedItemToOrder="addItem"
  @changeview="changeView"
  />

  <BurgerConstruction
  :currentPage='currentPage'
  @changeview="changeView"
  />

  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue';
import BurgerConstruction from './BurgerConstruction.vue';

// using array because vue live updated array values
var runningTotal = [ 0.00 ];
var runningOrder = [];


export default {
  name: 'OrderPage',
  components: {
    Tabs,
    BurgerConstruction,
  },
  data () {
    return {
      currentOrder: runningOrder,
      orderTotal: this.toOrderArray(),
      currentPage: []

    }
  },
  methods: {
    addItem: function(item) {
      console.log(item);
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
    toOrderArray: function(){
    var string = this.$route.params.orderPageString;
    console.log("string");
    console.log(string);
      if (string==0) {
		console.log("entra");
        return runningTotal;
      }else{
        var urljson = JSON.parse(string);
          console.log(urljson);
         return urljson.price;
      }
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
