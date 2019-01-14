<script>
  export default {
    name: 'Footer',
    props: [
      'currentOrder',
      'orderTotal'
    ],
    methods: {
      removeItem: function(itemIndex) {
        this.$emit('removeItemFromOrder', itemIndex); //talking to orderpage
      },
      formatTotal: function(total){
        if(total < 0){
          total = 0;
        }
        return total.toFixed(2);
      }
    }
  }
</script>

<template>
  <div class="footer">
    <div class="currentOrder">
  
      <div class="orderItem" v-for="(item, index) of currentOrder" :key="index" @click="removeItem(index)">
        <img :src='require("@/assets/Food/" + item.item.imgSrc)'>
        <p>{{ item.item.title }}</p>
      </div>
    </div>
  
    <div class="total">
      <span>TOTAL:</span>
      <p class="totalValue">
        €{{ formatTotal(orderTotal[0]) }}
      </p>
    </div>
  </div>
</template>

<style>
  .footer {
    position: fixed;
    bottom: 0;
    height: 110px;
    width: 100%;
    background-color: #1e272e;
    z-index: 2;
    overflow: auto;
    white-space: nowrap;
    display: grid;
    grid-template-columns: 1fr 110px;
    grid-template-rows: 110px;
    grid-template-areas: "a b";
  }
  
  .currentOrder {
    grid-area: a;
    height: 110px;
  }
  
  .orderItem {
    display: inline-block;
    height: 110px;
    width: 110px;
  }
  
  .orderItem:hover {
    cursor: pointer;
  }
  
  .orderItem img {
    max-height: 75%;
    margin: 5% 10px 0 10px;
  }
  
  .orderItem p {
    color: white;
    text-align: center;
    font-size: 12px;
  }
  
  .total {
    grid-area: b;
    padding-top: 25px;
    background-color: #416451;
    color: #ffffff;
    display: inline-block;

    /* Text */
    text-align: center;
    font-weight: bold;
    font-size: 25px;
  }
  
  .totalValue {
    line-height: 40px;
    vertical-align: center;
    text-align: center;
    font-weight: bold;
    font-size: 25px;
  }
  
  @media only screen and (max-width: 730px) {
    .footer {
      height: 78px;
      width: 100%;
      grid-template-columns: 1fr 78px;
      grid-template-rows: 78px;
    }
    .currentOrder {
      height: 78px;
    }
    .orderItem {
      height: 78px;
      width: 78px;
    }
    .orderItem img {
      max-height: 65%;
      margin: 10px 10px;
    }
    .orderItem p {
      color: white;
      text-align: center;
      font-size: 10px;
      margin: 0px;
      margin-top: -12px;
    }
    .total {
      padding: 0px;
      padding-top: 15px;
      font-size: 18px;
      text-align: center;
    }
    .totalValue {
      line-height: 30px;
      font-size: 18px;
    }
  }
</style>

