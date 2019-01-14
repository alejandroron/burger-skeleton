<script>
  export default {
    props: [
      'displayButtons',
      'orderPage',
  
      'backAddressProperty',
      'backTextProperty',
  
      'titleProperty',
  
      'nextAddressProperty',
      'nextTextProperty',
  
      'customizedOrder',
      'customizedPrice'
    ],
    methods: {
      addCustomizedToOrder: function() {
	    
        /*convert the customized order array into an item
        and add it to the footer*/
        var item = {
          title: 'Custom Order',
          imgSrc: require('@/assets/Burgers/Beef/beef1.png'),
          price: this.customizedPrice,
          isBurger: true,
          ingredients: this.customizedOrder
        };
        this.$parent.$emit('added_customized_to_order', item);
      },
	  goSummaryOrder: function(){
		
	  }
    }
  }
</script>

<template>
  <div class='fixed navbar'>

      <a :href="backAddressProperty" v-if="displayButtons" >
        <div class="button" id="backButton"> {{ backTextProperty }} </div>
      </a>

      <h1>{{ titleProperty }}</h1>

      <a :href="nextAddressProperty" v-if="displayButtons">
        <div class="button" id="nextButton" v-on:click="goSummaryOrder()"> {{ nextTextProperty }} </div>
      </a>

      <!-- <a :href="nextAddressProperty" v-else-if="displayButtons">
        <div class="button" id="nextButton" v-on:click="addCustomizedToOrder()"> {{ nextTextProperty }} </div>
      </a> -->

  </div>
</template>

<style>
  a {
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .fixed {
    position: fixed;
    top: 0;
    z-index: 2;
  }
  
  .blank {
    grid-area: c;
    width: 150px;
    height: 40px;
  }
  
  .navbar {
    display: grid;
    grid-template-areas: "a b c";
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16);
    background-color: #416451;
  }
  
  .navbar h1 {
    grid-area: b;
    color: white;
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    font-size: 40px;
    text-transform: uppercase;
  }
  
  .button {
    width: 150px;
    height: 40px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    align-self: center;
    /* Text content */
    color: white;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    line-height: 40px;
  }
  
  #backButton {
    grid-area: a;
    margin-left: 15px;
    background-color: #ff3f34;
  }
  
  #nextButton {
    grid-area: c;
    margin-right: 15px;
    background-color: #05c46b;
  }
  
  
  /* Queries */
  
  @media only screen and (max-width: 730px) {
    .navbar h1 {
      font-size: 25px;
    }
    .button {
      width: 35px;
      height: 35px;
    }
    #backButton {
      margin-left: 10px;
    }
    #nextButton {
      margin-right: 10px;
    }
  }
  
  @media only screen and (max-width: 340px) {
    .navbar h1 {
      font-size: 20px;
    }
  }
</style>
