<template>
  <li :class="[hasChildren ? 'folder' : 'file']">
    <label :class="{'open': open}" @click="toggle">
        {{ uiLabels[model.name] }}
        
        <div class="numbers" v-if="!hasChildren">
          <div class = "minuses" v-if="counter!=0">
            <button class="minus" @click="deleteIngredient(model)"><img src ="../assets/minus2.png">
            </button>
          </div>
          
          <div class="number">{{ counter }}</div>
          <div class ="pluses">
          
            <button class="plus" @click="addIngredient(model)"><img src ="../assets/plus2.png"></button>
          </div>
        </div>
      </label>
    <ul v-show="open" v-if="hasChildren" :class="{'open': open}">
      <DropDownComponent v-for="(model, index) in model.children" :key="index" :model="model" @removeItemFromOrder="deleteIngredient(this.currentOrder[itemIndex])">
      </DropDownComponent>
    </ul>
  </li>
</template>

<script>
  var en=require("../../data/ui_en.json");

  export default {
    name: "DropDownComponent",
    props: {
	  currentOrder: Array,
      model: Object,
      deccount: String
    },
    data: function() {
      return {
	    uiLabels:en,
	    open: false,
        counter: 0
      };
    },
    computed: {
      hasChildren: function() {
        return this.model.children;
      }
    },
    methods: {
      toggle: function() {
        if (this.hasChildren) {
          this.open = !this.open;
        }
      },
      deleteIngredient: function(ingredient) {
  
        this.$parent.$parent.$emit('deleteIngredientFromBurger', ingredient);
        this.counter--;
        ingredient["quantity"] = this.counter;
      },
      addIngredient: function(ingredient) {
  
        this.$parent.$parent.$emit('addIngredientToBurger', ingredient);
        this.counter++;
        ingredient["quantity"] = this.counter;
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

<style>
  /* @import url(https://fonts.google.com/specimen/Roboto); */
  
  body {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
  }
  
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  ol, ul {
    list-style: none;
    padding: 0px;
  }
  
  .cd-accordion-menu {
    width: 100%;
    /* max-width: 800px; */
    margin-top: 70px;
    margin-bottom: 110px;
    background: #24392e;
  }
  
  .cd-accordion-menu li {
    user-select: none;
  }
  
  .cd-accordion-menu label {
    position: relative;
    display: block;
    padding: 16px 140px 16px 45px;
    box-shadow: inset 0 -0.1px #ffffff;
    color: #ffffff;
    font-size: 30px;
  }
  
  .cd-accordion-menu li.folder>label {
    cursor: pointer;
  }
  
  .cd-accordion-menu li.folder>label::before {
    padding-right: 3vh;
    content: url(../assets/down-arrow.png);
    left: 10px;
  }
  
  .cd-accordion-menu label .numbers {
    float: right;
    position: relative;
    display: flex;
    /* width: 100px; */
    height: 20px;
    justify-content: space-around;
  }
  
  .cd-accordion-menu label .numbers .minuses .minus {
    width: 4vh;
    height: 4vh;
    display: inline-block;
    position: relative;
    float: left;
    margin: 0px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    padding: 0;
  }
  
  .cd-accordion-menu label .numbers .number {
    font-size: 25px;
    font-weight: 400;
    position: relative;
    float: center;
    display: inline-block;
    /* margin-left: 3vh; */
  }
  
  .cd-accordion-menu label .numbers .pluses .plus {
    width: 4vh;
    height: 4vh;
    display: inline-block;
    position: relative;
    background-color: transparent;
    float: right;
    margin-left: 15px;
    border-radius: 50%;
    border: none;
    padding: 0;
  }
  
  .cd-accordion-menu ul label {
    background-color: #18271f;
    box-shadow: inset 0 -1px #141617;
    padding-left: 82px;
    font-size: 20px;
  }
  
  @media only screen and (max-width: 730px) {
    .cd-accordion-menu {
      width: 100%;
      /* max-width: 800px; */
      margin-top: 70px;
      margin-bottom: 78px;
    }

    .cd-accordion-menu label {
      font-size: 20px;
      padding: 12px 50px 12px 30px;
    }
    .cd-accordion-menu label .numbers .number {
      font-size: 15px;
      margin-left: 5px;
    }

    .cd-accordion-menu ul label {
      padding-left: 30px;
      font-size: 15px;
    }
  }
</style>