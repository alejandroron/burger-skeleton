<template>
  <div class="container">

    <div id="frontpage">

        <div class="flags">
          <img src="@/assets/sweden.png" v-on:click="changeLenguageToSwedish">
          <img src="@/assets/uk.png" v-on:click="changeLenguageToEnglish">
        </div>

      <div class="title">
         {{uiLabels.titleStartPage}}
      </div>

      <div class="buttons">
        <a class="dine_in" :href="'./#/OrderPage/' + emptyOrderStringIn()" v-if="uiLabels.languageProp==='eng'">
          <img class="dineIN" src="@/assets/dine_in.png" v-on:click="sendPlace">
        </a>
        <a class="dine_in" :href="'./#/OrderPage/' + emptyOrderStringIn()" v-else-if="uiLabels.languageProp==='swe'">
          <img class="dineIN" src="@/assets/dine_in_sv.png" v-on:click="sendPlace">
        </a>

        <a class="take_out" :href="'./#/OrderPage/' + emptyOrderStringOut()" v-if="uiLabels.languageProp==='eng'">
          <img class="takeOUT" src="@/assets/take_out.png" v-on:click="sendPlace">
        </a>
        <a class="take_out" :href="'./#/OrderPage/' + emptyOrderStringOut()" v-else-if="uiLabels.languageProp==='swe'">
          <img class="takeOUT" src="@/assets/take_out_sv.png" v-on:click="sendPlace">
        </a>
      </div>

</div>

    </div>


  </div>

</template>

<script>
  import OrderPage from './OrderPage.vue';
  import BurgerConstruction from './BurgerConstruction.vue';
  import sharedVueStuff from '@/components/sharedVueStuff.js';
  var en=require("../../data/ui_en.json");
  export default {
    name: 'StartPage',
    components: {
      OrderPage,
      BurgerConstruction
    },
	data () {
	   return{
	       uiLabels: en,
	   }
	},
    methods: {
      emptyOrderStringIn: function() {

        var emptyOrder = {
          price: [0.001],
          order: [],
          place: "dine in"
        };
        return JSON.stringify(emptyOrder);
      },
      emptyOrderStringOut: function() {
        var emptyOrder = {
          price: [0.001],
          order: [],
          place: "take away"
        };
        return JSON.stringify(emptyOrder);
      },
      sendPlace: function() {
        this.$store.state.socket.emit('selectedPlace');
		this.$store.state.socket.emit('label',this.uiLabels);

      },
	  changeLenguageToEnglish: function() {

		en=require("../../data/ui_en.json");
	    this.uiLabels=require("../../data/ui_en.json");
		},
	  changeLenguageToSwedish: function() {
		en=require("../../data/ui_sv.json");
	    this.uiLabels=require("../../data/ui_sv.json");

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


  /* .flags {
    margin-top: 10px;
    margin-right: 10px;
    align-self: flex-end;
  } */

  .title {
    margin-top: 80px;
    align-self: center;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 60px;
    text-align: center;
    color: #fff;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }

  .buttons {
    display: flex;
    flex-direction: row;
    padding: 35px;
    align-self: center;
    align-items: center;
    justify-content: center;
  }


  .dine_in:hover {
    cursor: pointer;
  }


  /*    Responsiveness*/
  @media screen and (max-width: 760px),
  screen and (max-height: 420px) {
    /* .flags {
      margin-top: 5px;
      margin-right: 5px;
    }

    .flags img {
      width: 90px;
      height: 67px;
    } */
    .title {
      margin-top: 55px;
      font-size: 50px;
    }
    .buttons {
      padding: 30px;
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
  @media screen and (max-width: 320px) and (max-height: 568px),
  (max-width: 568px) and (max-height: 320px) {
    .title {
      font-size: 40px;
    }
  }
</style>
