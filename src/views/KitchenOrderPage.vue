<template>
  <div>
    <Navbar :titleProperty='uiLabels["Orders_state"]' />
	<div class="flags">
          <img src="@/assets/sweden.png" v-on:click="changeLenguageToSwedish">
          <img src="@/assets/uk.png" v-on:click="changeLenguageToEnglish">
    </div>


    <div class="boxes2">
        <div class="item2" v-for="(object, index) in orders[0]" :key="index">
          <div class="top2">
            <h2 id="name">{{uiLabels["Order"]}} #{{ index }}</h2>
          </div>

          <div class="middle2">
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
        <div class="bottom2" id="orderFinished" v-if="object.status==='finished'" v-on:click="changeStatus(object)">
          {{ uiLabels[object.status] }}<br> {{ uiLabels[object.place] }}
        </div>
        <div class="bottom2" v-else v-on:click="changeStatus(object)">
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
  background-color: white;
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

.boxes2 {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0px, 279.52px));
  grid-gap: 20px;
  justify-content: center;
}
/* Boxes is the group of boxes, formed by items */

.item2 {
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: white;
}

/* Items are divided into three parts: top, middle and bottom */
.item2 .top2 {
  display: flex;
  height: 30px;
  background-color: black;
  border-radius: 0px;
}

#name {
  color: white;
  position: unset;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  margin: 0 auto;
}

#title{
  color: black;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}

.item2 .middle2 {
  overflow: auto;
  max-height: 187px;
  /* height: auto; */
  padding: 5px 5px;
  border-radius: 0px;
}

.item2 .bottom2 {
  height: auto;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  border-radius: 100px;
  background-color: #05C46B;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));
  /* Text */
  color: white;
  line-height: 25px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;

}
#orderFinished {
  color: 	#008000;
}
.item2 .bottom:hover {
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
  margin-top: 70px;
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
