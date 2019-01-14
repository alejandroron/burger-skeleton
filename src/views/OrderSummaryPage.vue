<script>
'use strict';
import Navbar from '@/components/Navbar.vue';
import sharedVueStuff from '@/components/sharedVueStuff.js';

var removedOrders = [];

export default {
  name: 'OrderSummaryPage',
  components: {
    Navbar
  },
  mixins: [ sharedVueStuff ],
  data: function() {
    return {
      order: this.initializeOrderWithIngredients(),
      // perhaps not necessary to return this array, just added in case
      removedItemsArray: removedOrders,
      counter: 0
    }
  },
  methods: {
      initializeOrderWithIngredients: function() {
        var order = JSON.parse(this.$route.params.orderString);
        var orderItems = order.order;
  
        for (var i = 0; i < orderItems.length; i++) {
  
          var currentItem = orderItems[i]["item"];
  
          if (currentItem["isBurger"]) {
            for (var j = 0; j < currentItem["ingredients"].length; j++) {
              var ingredientName = currentItem["ingredients"][j];
              if (typeof ingredientName === 'string') {
                orderItems[i]["item"]["ingredients"][j] = {
                  name: ingredientName,
                  price: 0.50,
                  quantity: 1,
                  totalPrice: 0.50
  
                };
  
              }
  
  
            }
          }
        }
  
        return order;
      },
      placeOrder: function() {
        // make use of socket.io's magic to send the stuff to the kitchen via the server (app.js)
        this.$store.state.socket.emit('order', this.order);
      },
      deleteItem: function(index) {
        removedOrders.push(this.order.order[index]);
        this.order["price"][0] = this.order["price"][0] - this.order.order[index]["item"]["price"];
  
        this.order.order.splice(index, 1);
      },
      incrementItem: function(indexItem, indexIngredient) {
        this.order.order[indexItem]["item"]["ingredients"][indexIngredient]["quantity"]++;
        var ingredientPrice = this.order.order[indexItem]["item"]["ingredients"][indexIngredient]["price"];
        var ingredientQuantity = this.order.order[indexItem]["item"]["ingredients"][indexIngredient]["quantity"];
  
        if (ingredientQuantity > 0) {
          this.order.order[indexItem]["item"]["ingredients"][indexIngredient]["totalPrice"] = ingredientPrice * (ingredientQuantity);
          this.order.order[indexItem]["item"]["price"] = this.order.order[indexItem]["item"]["price"] + ingredientPrice;
          this.updateTotalPrice();
        } else {
          //this.order.order[indexItem]["item"]["ingredients"][indexIngredient]["totalPrice"]=ingredientPrice;
          this.updateTotalPrice();
        }
      },
      decrementItem: function(indexItem, indexIngredient) {
        var quantity = this.order.order[indexItem]["item"]["ingredients"][indexIngredient]["quantity"];
        var ingredientPrice = this.order.order[indexItem]["item"]["ingredients"][indexIngredient]["price"];
        var ingredientQuantity = this.order.order[indexItem]["item"]["ingredients"][indexIngredient]["quantity"];
  
        if (quantity > 0) {
          this.order.order[indexItem]["item"]["ingredients"][indexIngredient]["quantity"]--;
          this.order.order[indexItem]["item"]["ingredients"][indexIngredient]["totalPrice"] = ingredientPrice * (ingredientQuantity);
          this.order.order[indexItem]["item"]["price"] = this.order.order[indexItem]["item"]["price"] - ingredientPrice;
        }
        if (quantity == -1) {
          //this.order.order[indexItem]["item"]["ingredients"].splice(indexIngredient,1);
          this.order.order[indexItem]["item"]["ingredients"][indexIngredient]["quantity"]--;
          //this.order.order[indexItem]["item"]["price"]=this.order.order[indexItem]["item"]["price"]-ingredientPrice;
        }
        this.updateTotalPrice();
      },
      updateTotalPrice: function() {
        var price = 0.0;
        var i, len;
        for (i = 0, len = this.order.order.length; i < len; i++) {
          price = this.order.order[i]["item"]["price"] + price;
        }
        this.order["price"][0] = price;
      },
      orderToString: function() {
        return JSON.stringify(this.order);
      },
      modify: function() {
        console.log("emito");
        this.$store.state.socket.emit('modified');
      }
    }
  }
</script>

<template>
  <div>
    <Navbar :titleProperty='"ORDER SUMMARY"' />
  
    <div class="boxes">
  
      <div class="item" v-for="(item, index) in order.order" :key="index">
        <div class="top">
          <button id="delete" v-on:click="deleteItem(index)"> <img src="@/assets/redX.png" id="minus" width="30px" height="30px"></button>
          <h2 id="name">{{ item.item.title }}</h2>
        </div>
  
        <div class="middle">
          <div v-if="item.item.isBurger">
            <ul class="ingredientList">
              <li class="ingredient" v-for="(ingredient, indexIngredient) in item.item.ingredients" :key="indexIngredient">
                <span>{{ ingredient["name"] }}: {{ ingredient["price"].toFixed(2) }}</span>
                <div class="ingredientInfo">
                  <button class="minus" v-on:click="decrementItem(index,indexIngredient)">
                    <img src="@/assets/minus.png">
                    </button>
                  <span class="ingredientCount">{{ingredient["quantity"]}}</span>
                  <button class="plus" v-on:click="incrementItem(index,indexIngredient)">
                      <img src="@/assets/plus.png">
                    </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
  
        <div class="bottom">
          ${{ item.item.price.toFixed(2) }}
        </div>
      </div>
  
    </div>
  
    <a>
      <div class="totalPrice">
        <p>TOTAL: {{ this.order["price"][0].toFixed(2) }}</p>
      </div>
    </a>
  
    <a :href="'./#/OrderPage/' + orderToString()" v-on:click="modify()">
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
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
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
    width: 30px;
    cursor: pointer;
    margin-right: -5px;
    margin-top: -5px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
  }
  
  .boxes {
    margin-top: 110px;
    margin-bottom: 140px;
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
    background-color: #485460;
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
    background-color: #333C45;
    /* Options:
    Gray: #333C45
    Black: #171717
    Purple: #303398
    */
  }
  
  .plus,
  .minus {
    background-color: transparent;
    cursor: pointer;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: none;
  }
  
  .minus img,
  .plus img {
    margin: -2px 0 0 -8px;
    width: 20px;
    height: 20px;
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
    background-color: #333C45;
    /* Options:
    Gray: #333C45
    Black: #171717
    Purple: #303398
    */
  }
  
  .ingredientList {
    margin: 0;
  }
  
  .ingredient {
    color: white;
    border-bottom: 1px solid black;
    padding: 10px 0;
  }
  
  .ingredientInfo {
    float: right;
  }
  
  .ingredientCount {
    font-size: 23px;
    margin: 0 8px;
  }
  
  
  /* Modify and Pay buttons */
  
  .totalPrice {
    top: 60px;
    position: fixed;
    width: 100%;
    height: 30px;
    background-color: #000000;
  }
  
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
  
  .pay p,
  .modify p,
  .totalPrice p {
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: 20px;
  }
  
  .totalPrice p {
    text-align: center;
    line-height: 30px;
    color: white;
    font-size: 15px;
  }
</style>
