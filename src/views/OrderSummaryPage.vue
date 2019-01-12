<script>
import Navbar from '@/components/Navbar.vue';
import sharedVueStuff from '@/components/sharedVueStuff.js';

var removedOrders = [];

export default {
  name: 'Summary',
  components: {
    Navbar
  },
  mixins: [ sharedVueStuff ],
  data: function() {
    return {
      orderstr: JSON.parse(this.$route.params.orderString),
      price:  JSON.parse(this.$route.params.orderString).price[0],
      // perhaps not necessary to return this array, just added in case
      removedItemsArray: removedOrders
    }
  },
  methods:{
    placeOrder: function () {
      // console.log(this.orderstr.order[0]["item"]["ingredients"]);
      //Wrap the order in an object
      var order={
        str:this.orderstr.order
      };
      // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
      this.$store.state.socket.emit('order', {order: order});

    },
    deleteItem: function(index){
      removedItems.push(this.orderstr.order[index]);
      this.price = this.price - this.orderstr.order[index]["item"]["price"];
      this.orderstr.order.splice(index, 1);
    }


  }
}
</script>

<template>
  <div>
    <Navbar :titleProperty='"ORDER SUMMARY"' :displayButtons='null' />

    <div class="boxes">

      <div class="item" v-for="(item, index) in orderstr.order" :key="index" >
        <div class="top">
          <button id="delete" v-on:click="deleteItem(index)"> <img src="@/assets/redX.png" id="minus" width="30px" height="30px"></button>


          <h2 id="name">{{ item.item.title }}</h2>
        </div>

        <div class="middle">
          <div v-if="item.item.isBurger===true">
            <div class="ingredient" v-for="(ingredient, index) in item.item.ingredients" :key="index">
              <p> {{ingredient}} </p>
            </div>
          </div>
        </div>

        <div class="bottom">
          ${{ item.item.price.toFixed(2) }}
        </div>
      </div>

    </div>

    <a>
      <div class="totalPrice">
        <p>TOTAL: {{ this.price.toFixed(2) }}</p>
      </div>
    </a>

    <a href="./#/OrderPage">
      <div class="modify">
        <p>MODIFY</p>
      </div>
    </a>

    <a href="./#/OrderCompleted" v-on:click="placeOrder()">
      <div class="pay">
        <p>PAY</p>
      </div>
    </a>

  </div>
</template>

<style>
h1, h2, h3, h4, h5, p {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  background-color: #2D4739;
  font-family: Roboto, sans-serif;
}

h2 {
  font-size: 20px;
  font-weight: bold;
}

h3 {
  font-size: 20px;
  font-weight: normal;
}

#delete {
  width : 30px;
  heigh: 30px;
  cursor: pointer;
  margin-right: -5px;
  margin-top: -5px;
  border-radius: 50%;
  background-color: transparent;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
  border: none;
}


.boxes {
  margin-top: 90px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0px, 279.52px));
  grid-gap: 20px;
  justify-content: center;
}
/* Boxes is the group of boxes, formed by items */

.item {
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #FFA801;
  /* The colour depends, all the options are, i think we'd need JS for this:
  Gray: #485460
  Black: #000000
  Purple: #3C40C6 */
}

/* Items are divided into three parts: top, middle and bottom */

.item .top {
  display: flex;
  height: 58px;
  border-radius: 5px 5px 0px 0px;
  background-color: #EF9D00;
  /* Options:
  Gray: #333C45
  Black: #171717
  Purple: #303398
  */
}

#minus {
  cursor: pointer;
  margin-left: 10px;
  margin-top: 14px;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
}

#plus {
  cursor: pointer;
  margin-right: 10px;
  margin-top: 14px;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
}

#name {
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 58px;
  margin-left: 60px;
}

.item .middle {
  overflow: auto;
  height: 187px;
  padding: 5px 10px;
}

.item .bottom {
  height: 38px;
  border-radius: 0px 0px 5px 5px;
  color: white;
  line-height: 38px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  background-color: #EF9D00;
  /* Options:
  Gray: #333C45
  Black: #171717
  Purple: #303398
  */
}
/* Modify and Pay buttons */

.modify {
  cursor: pointer;
  bottom: 40px;
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #05C46B;
}

.pay {
  cursor: pointer;
  bottom: 0px;
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #0C44D1;
}

.totalPrice {
  cursor: pointer;
  bottom: 80px;
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #0C44D1;
}

.pay p, .modify p, .totalPrice p {
  text-align: center;
  line-height: 40px;
  color: white;
  font-size: 20px;
}
</style>
