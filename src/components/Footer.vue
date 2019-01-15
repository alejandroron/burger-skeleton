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
      formatTotal: function(total) {
        if (total < 0) {
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
      <span>TOTAL</span>
      <p class="totalValue">
        {{ formatTotal(orderTotal[0]) }} €
      </p>
    </div>
  </div>
</template>

<style>
  .footer {
    /* Position */
    position: fixed;
    bottom: 0;
    z-index: 2;
    width: 100%;
  }

  .currentOrder {
    /* Behaviour */
    overflow: auto;
    white-space: nowrap;
    /* Visual Properties */
    height: 110px;
    width: calc(100% - 110px);
    background-color: #1A1E22;
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
    max-height: 70%;
    margin: 8px 0px 0px 17px;
  }
  
  .orderItem p {
    color: white;
    text-align: center;
    font-size: 11px;
  }
  
  .total {
    /* Position */
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 3;
    /* Visual Properties */
    height: 110px;
    width: 110px;
    background-color: #323B43;
    /* Text */
    padding-top: 30px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    font-weight: bold;
  }
  
  @media only screen and (max-width: 730px) {
    .currentOrder {
      height: 78px;
      width: calc(100% - 78px);
    }
    .orderItem {
      height: 78px;
      width: 78px;
    }
    .orderItem img {
      margin: 4px 0px 2px 11.5px;
    }
    .orderItem p {
      font-size: 9px;
    }
    .total {
      height: 78px;
      width: 78px;
      /* Text */
      padding-top: 20px;
      font-size: 18px;
    }
  }
</style>

