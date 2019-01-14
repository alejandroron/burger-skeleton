<template>
  <div id="container">
  <Tab
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
import Tab from '@/components/Tab.vue';
import BurgerConstruction from './BurgerConstruction.vue';

// using array because vue live updated array values
var runningTotal = [ 0.00 ];
var runningOrder = [];
var pageArray = [];


export default {
  name: 'OrderPage',
  components: {
    Tab,
    BurgerConstruction,
  },
  data () {
    return {
      currentOrder: runningOrder,
      orderTotal: this.toOrderArray(),
      currentPage: pageArray

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
    console.log(inputKey);
    if (inputKey==='BurgerConstruction')
      {
      var justNumber = 0;
      pageArray.push(justNumber);
      }
    else if (inputKey==='Tabs')
      {
      pageArray = [];
      }
    console.log(pageArray);
   }
}
}
</script>

<style scoped>
</style>
