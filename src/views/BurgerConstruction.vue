<template>
  <div id="container">
    <Navbar
	  :uiLabels='uiLabels'
      :displayButtons='true'
	  :currentOrder='currentOrder'
      :orderPage='false'
      :backAddressProperty='"./#/OrderPage/customizedBurger"'
      :backTextProperty="uiLabels.btnMainPage"
      :titleProperty='uiLabels.titleCustomBurger'
      :nextAddressProperty='"./#/OrderPage/customizedBurger"'
      :nextTextProperty='uiLabels.btnFinishBurger'
      :customizedOrder='currentOrder'
      :customizedPrice='orderTotal'
	  @CustomOrder="finishCreatedBurger"/>
    <AccordianMenu
	  :currentOrder="currentOrder"
      :menuData="menuData"
      :decitem = "decitem"
      @addIngredientToBurger="addIngredient"
      @deleteIngredientFromBurger="removeItembyname"/>
    <Footer
	  :totalProperty='uiLabels.lblTotal'
      :currentOrder='currentOrder'
      :orderTotal='orderTotal'
      @removeItemFromOrder=""/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import AccordianMenu from '@/components/AccordianMenu.vue';
import Footer from '@/components/Footer.vue';
import customBurgerMenu from '@/components/customBurgerMenu.js';


var runningTotal = [ 0.00 ];
var runningOrder = [];
var en=require("../../data/ui_en.json");
export default {
  name: 'BurgerConstruction',
  components: {
    AccordianMenu,
    Navbar,
    Footer
  },
  data () {
    return {
      menuData: customBurgerMenu,
      currentOrder: runningOrder,
      orderTotal: runningTotal,
      decitem: '',
	  uiLabels: en
    }
  },
  methods: {
    addIngredient: function(ingredient) {

        var i;
        var counter = 0;
        var flag = false;
        for(i=0 ; i<runningOrder.length; i++){
            if(runningOrder[i].item.name == ingredient.name && counter == 0){
                flag = true;
                runningOrder.splice(i,1, {item: ingredient});
         
                runningTotal.push(runningTotal[0]+ingredient.price);
                runningTotal.splice(0,1);
                counter++;

        }


        }
        
        if(!flag){
            runningOrder.push({item: ingredient});
            runningTotal.push(runningTotal[0]+ingredient.price);
            runningTotal.splice(0,1);
        
        }


    },
    removeItem: function(itemIndex) {
      runningTotal.push(runningTotal[0] - runningOrder[itemIndex].item.price);
      runningTotal.splice(0, 1);
      this.decitem = runningOrder[itemIndex].item.name;
      runningOrder.splice(itemIndex, 1);
    },
    removeItembyname: function(model) {
    var i;
    var counter = 0;
    
        var flag = false;
        for(i=0 ; i<runningOrder.length; i++){
            if(runningOrder[i].item.name == model.name && counter == 0){
                flag = true;
                runningTotal.push(runningTotal[0]-model.price);
                runningTotal.splice(0,1);
                counter++;
                console.log(model.quantity);
                if(model.quantity!=1){
                runningOrder.splice(i,1, {item: model});
                }
                else if(model.quantity==1){
                runningOrder.splice(i,1);
                }
                
                
        }


        }
        
        

        
    },
	finishCreatedBurger: function(){
		//if(this.nextTextProperty=="FINISH BURGER"){
		console.log("I have finished building my the delicious burger, ummmmm que rico");
        /*convert the customized order array into an item
        and add it to the footer*/
		var arrIngredients=[];
		var i;
		for(i=0;i<this.currentOrder.length;i++){
			arrIngredients.push(this.currentOrder[i]["item"]);
		
		}
        var item = {
          title: 'CustomOrder',
          imgSrc: "beef1.png",
          price: this.orderTotal[0],
          isBurger: true,
          ingredients: arrIngredients
        };
		console.log("burgerConstruction");
		console.log(item);
		this.$store.state.socket.emit('custo',item);
		runningOrder=[];
		runningTotal=[0.00];
		this.currentOrder=runningOrder;
		this.orderTotal=runningTotal;
		//}
	}
  },
  created: function(){
     this.$store.state.socket.on('label',function(data) {
		en=data;
		this.uiLabels=data;
		// if(data["btnPay"].localeCompare("PAY")!=0){		    
			// customBurgerMenu=customBurgerMenuSV;
			// this.menuData=customBurgerMenuSV;
			
		// }else{
			// customBurgerMenu=customBurgerMenuEN;
			// this.menuData=customBurgerMenuEN;
		// }

	}.bind(this));
  }
}
</script>

<style scoped>
</style>
