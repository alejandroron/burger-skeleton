<template>
  <div id="container">
    <Navbar
	  :uiLabels='uiLabels'
      :displayButtons='true'
      :orderPage='true'
	  :currentOrder='currentOrder'
      :backAddressProperty='"./#/"'
      :backTextProperty='uiLabels.start'
      :titleProperty='uiLabels.titleCreateYourMenu'
      :nextAddressProperty='"./#/OrderSummary/" + convertOrdersToString()'
      :nextTextProperty='uiLabels.btnGoSummary' />
    <Tabs
	  :menu='menu'
	  :uiLabels="uiLabels"
	  :BurgerTabTextProperty='"tbBurgers"'
	  :DrinksTabTextProperty='"tbDrinks"'
	  :SidesTabTextProperty='"tbSides"'
	  :CreateBurgerTextProperty='uiLabels.btnPersonalizedBurger'	  
	  @createOwnBurger="createdBurgerF"
      @addedItemToOrder="addItem"
      @changeview="$emit('changeview','BurgerConstruction')" />

    <Footer
	:totalProperty='uiLabels.lblTotal'
    :currentOrder='currentOrder'
    :orderTotal='orderTotal'
    @removeItemFromOrder="removeItem" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Tabs from '@/components/Tab.vue';
import Footer from '@/components/Footer.vue';
import menuEN from '@/components/menuen.js';
import menuSV from '@/components/menusv.js';
 
// wanted to do something like this to utilize the url bar
//var runningTotal = passedTotal();
//var runningOrder = passedOrder();
"use strict";
var runningTotal = [ 0.00 ];
var runningOrder = [];
var runningPlace = "";

var anyCreatedBurger = 0;
var en=require("../../data/ui_en.json");
var vmenu=menuEN;

export default {
  name: 'OrderPage',
  components: {
    Navbar,
    Tabs,
    Footer
  },
 
  data () {
    return {
      currentOrder: runningOrder,
      orderTotal: runningTotal,
	  place: runningPlace,
	  createdBurger: anyCreatedBurger,
	  counter:0,
	  uiLabels:en,
	  menu:vmenu

    }
  },
  
  computed: {
    modifyUrl: function(){
      runningTotal=JSON.parse(this.$route.params.orderPageString).price;

    },
    passedTotal: function() {
      console.log("passedTotal");
      return  JSON.parse(this.$route.params.orderPageString).price;

    },
    passedOrder: function(){
	    return JSON.parse(this.$route.params.orderPageString).order; 
	},
	passedPlace: function(){
	    return JSON.parse(this.$route.params.orderPageString).place; 
	},
	passedCreatedBurger: function(burger){
		var arr=[];
		console.log(burger);
		this.addItem(burger);
		return runningOrder;
	}

  },
  methods: {
    addItem: function(item) {
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
	createdBurgerF: function() {
	  console.log("entro createdBurgerF");
      this.createdBurger=1;
	 
    },
    convertOrdersToString: function() {
      var order = {
        price: runningTotal,
        order: runningOrder,
        place: this.place

      };

      var truncatedOrderString = JSON.stringify(order);
      // regex expression for removing the imgSrc property of the string
      // vue doesn't like this property being passed
	  
      return truncatedOrderString.replace(/,"imgSrc":"\/img\/[a-zA-Z0-9,-]*.[a-zA-Z0-9]*.png"/g,'');
    }
	
  },
  created: function () {
	console.log("created");
	this.$store.state.socket.on('modified',function() {		
		runningOrder=this.passedOrder;
		runningTotal=this.passedTotal;
		this.orderTotal=this.passedTotal;
		this.currentOrder=this.passedOrder;
	}.bind(this));
	this.$store.state.socket.on('custo',function(burger) {
		console.log(this.createdBurger);
		if(this.createdBurger==1){		    
			this.createdBurger=0;
			anyCreatedBurger = 0;
			console.log(burger);
			this.addItem(burger);
		}		
	}.bind(this));
	this.$store.state.socket.on('selectedPlace',function() {
		runningPlace=this.passedPlace;
		this.place=this.passedPlace;
	}.bind(this));
	this.$store.state.socket.on('label',function(data) {
		en=data;
		this.uiLabels=data;
		if(data["btnPay"].localeCompare("PAY")!=0){		    
			vmenu=menuSV;
			this.menu=menuSV;
			console.log(this.menu["burgers"]["beef"][0]["title"]);
		}else{
			vmenu=menuEN;
			this.menu=menuEN;
		}
	}.bind(this));
	
}

}
</script>

<style scoped>
</style>
