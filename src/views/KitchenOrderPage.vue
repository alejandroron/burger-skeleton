<template>
  <div>
    <NavbarSummary
    :titleProperty='"Orders"'
    />

    <div class="boxes">
        <div class="item" v-for="(object, index) in orders[0]" :key="index">
          <div class="top">
            <h2 id="name">Order #{{ index }}</h2>
          </div>

          <div class="middle">
            <ul class="ingredientList">
              <li class="itemsInOrder" v-for="(orderItem, index) in object" :key="index">
                <span>{{ orderItem.item.title }}
                <li class="ingredient" v-if="orderItem.item.isBurger" v-for="(item, ingredientIndex) in orderItem.item.ingredients" :key="ingredientIndex">

                <span>
		{{item}}


</span>
</li>
  <li class="ingredient" v-if="!orderItem.item.isBurger" v-for="(item, ingredientIndex) in orderItem.item.ingredients" :key="ingredientIndex">

                <span>
		{{item["item"]["name"]}}

</span>
</li>



                </span>
                </li>
          </ul>



        </div>

        <div class="bottom" v-on:click="changeStatus(object)">
          {{ object.status }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavbarSummary from '@/components/NavbarSummary.vue';

var orders = [];

export default {
  name: 'KitchenOrderPage',
  components: {
    NavbarSummary
  },
  data () {
    return {
      orders
    }
  },
  created: function () {
    this.$store.state.socket.on('initialize', function (obj) {
      orders.push(obj.orders);
    }.bind(this)),
    this.$store.state.socket.on('newOrder', function (orderID, order) {

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
      if (object.status==='not-started')
      {
        object.status = 'started';
      }
      else if (object.status==='started')
      {
        object.status = 'finished';
      }
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
}
.item .bottom:hover {
cursor: pointer;
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
</style>
