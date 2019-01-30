<template>
  <div>
    <Navbar :titleProperty='uiLabels["Orders_state"]' />
	<div class="flags">
          <img src="@/assets/sweden.png" v-on:click="changeLenguageToSwedish">
          <img src="@/assets/uk.png" v-on:click="changeLenguageToEnglish">
    </div>


    <div class="boxes">
        <div class="item" v-for="(object, index) in orders[0]" :key="index">
          <div class="top">
            <h2 id="name">{{uiLabels["Order"]}} #{{ index }}</h2>
          </div>

          <div class="middle">
            <ul class="ingredientList">
              <li class="itemsInOrder" v-for="(orderItem, index) in object.order" :key="index">
                <span id="title">{{ uiLabels[orderItem.item.title] }}</span>
                <ul>
                  <div v-for="(ingredient, ingredientIndex) in orderItem.item.ingredients" :key="ingredientIndex">
                    <li class="ingredient" v-if="ingredient.quantity>0">
                      <span>{{ uiLabels[ingredient["name"]] }} x {{ ingredient["quantity"] }}</span>
                    </li>
                  </div>
              </ul>
            </li>
          </ul>
        </div>
        <div class="bottom" id="orderFinished" v-if="object.status==='finished'" v-on:click="changeStatus(object)">
          {{ uiLabels[object.status] }}<br> {{ uiLabels[object.place] }}
        </div>
        <div class="bottom" v-else v-on:click="changeStatus(object)">
          {{ uiLabels[object.status] }}<br> {{ uiLabels[object.place] }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';


// example orders data
// { '1':
//    { order: [ {
//       item: {
//         "title": "Chili Burger",
//         "price": 1.41,
//         "isBurger": true,
//         "ingredients":["Kaiser Roll","Beef Patty","Onions","Peppers","Lettuce"]
//        }
//       } ],
//      status: 'not-started' } }

// another reason to hate vue, we have to use an array
// an object won't auto update >:(
var orders = [];
var en=require("../../data/ui_en.json");
// var ingredientQuantity = this.orderItem.item[index]["item"]["ingredients"][ingredientIndex]["quantity"];
export default {
  name: 'KitchenOrderPage',
  components: {
    Navbar
  },
  data () {
    return {
      orders,
      uiLabels: en
    }
  },
  created: function () {
    this.$store.state.socket.on('initialize', function (obj) {
      console.log(obj);
      orders.push(obj.orders);
    }.bind(this)),
    this.$store.state.socket.on('newOrder', function (orderID, order) {
      console.log(order);
      alert('neworder: ' + orderID);

      var currentOrders = orders[0];
      currentOrders[orderID] = order;

      orders.push(currentOrders);
      orders.splice(0, 1);
      }.bind(this))
  },
  methods:
  {
  changeStatus: function(object)
    {
      if (object.status==='not started')
      {
        object.status = 'started';
      }
      else if (object.status==='started')
      {
        object.status = 'finished';
      }
    },
  changeLenguageToEnglish: function() {
	  en=require("../../data/ui_en.json");
      this.uiLabels=require("../../data/ui_en.json");
	},
  changeLenguageToSwedish: function() {
	  en=require("../../data/ui_sv.json");
	  this.uiLabels=en;
	}
  }
}
</script>

<style scoped>
h1, h2, h3, h4, h5, p {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  background-color: #2D4739;
  font-family: 'Roboto', sans-serif;
}

h2 {
  font-size: 20px;
  font-weight: bold;
}

h3 {
  font-size: 20px;
  font-weight: normal;
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
}

/* Items are divided into three parts: top, middle and bottom */
.item .top {
  display: flex;
  height: 58px;
  border-radius: 5px 5px 0px 0px;
  background-color: #EF9D00;
}

#name {
  color: white;
  font-size: 20px;
  text-align: center;
  line-height: 58px;
  margin: 0 auto;
}

#title{
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}

.item .middle {
  overflow: auto;
  min-height: 187px;
  /* height: auto; */
  padding: 15px 10px;
}

.item .bottom {
  height: auto;
  border-radius: 0px 0px 5px 5px;
  color: white;
  line-height: 38px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  background-color: #EF9D00;
}
#orderFinished {
  color: 	#008000;
}
.item .bottom:hover {
cursor: pointer;
}

.ingredientList {
  margin: 0 ;
}

.itemsInOrder {
  padding-bottom: 20px;
}

.ingredient {
  color: black;
  border-bottom: 1px solid black;
  padding: 5px 0;
}

.ingredientInfo {
  float: right;
}

.ingredientCount {
  font-size: 23px;
  margin: 0 8px;
}
.flags {
  margin-top: 10px;
  margin-left: 5px;
  align-self: flex-end;
 
}

.flags img {
  width: 110px;
  height: 87px;
}

.flags img:hover {
  cursor: pointer;
}

</style>
