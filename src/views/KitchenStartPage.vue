<template>
    <div class="container">
      <div class="title">
        ORDERS STATE
      </div>
      <div class="buttons">
        <a class="orders_queue" href="./#/KitchenOrderPage" >
          <img class="orderqueue" src="@/assets/ORDERSQUEUE.png">
        </a>
        <a class="finished_orders" href="./#/KitchenOrderPage">
          <img class="orderfinish" src="@/assets/finishedOrders.png">
        </a>
      </div>
    </div>
</template>

<script>
import OrderPage from './OrderPage.vue';


export default {
  name: 'StartPage',
  components:{
    OrderPage
  },
  data:function(){
    return{
      view:'frontpage'
    }
  },
  methods:{
    changeView:function(view){
      this.view=view;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.container {
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
}

.flags {
  margin-top: 10px;
  margin-right: 10px;
  align-self: flex-end;
}

.title {
  margin-top: 20px;
  align-self: center;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
}

.buttons {
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  align-self: center;
  align-items: center;
  justify-content: center;
}

/*    Responsiveness*/
@media screen and (max-width: 760px), screen and (max-height: 420px) {
  .flags {
    margin-top: 5px;
    margin-right: 5px;
  }

  

  .title {
    margin-top: 10px;
    font-size: 50px;
  }

  .buttons {
    margin-top: 12px;
    flex-direction: column;
  }

  .buttons img {
    width: 154px;
    height: 168px;
  }
}
@media screen and (orientation: landscape) {
  .buttons {
    margin-top: 12px;
    flex-direction: row;
  }
}

/*iPhone 5/5S/SE*/
@media screen and (max-width: 320px) and (max-height: 568px), (max-width: 568px) and (max-height: 320px){
  .title {
    font-size: 40px;
  }
}
</style>
