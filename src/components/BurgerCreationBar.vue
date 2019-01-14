<template>
<div>
<div class="burgerBar">
  <div class="currentBurger">
    <div class="burgerItem" v-for="(item, index) of currentBurger" :key="index" @click="removeItem(index)">
      <div class="removeItem">
        <img src="@/assets/redX.png" />
      </div>
      <img :src="getImagePath(item)">
      <p>{{ item.title }}</p>
    </div>
  </div>

  <div class="burgerTotal">
    <span>TOTAL:</span>
    <p class="totalValue">
      ${{ burgerTotal[0].toFixed(2) }}
    </p>
  </div>
</div>
</div>
</template>

<script>
var imagePath="@\\assets\\Food\\";
export default {
name: 'BurgerCreationBar',
props: [
  'currentBurger',
  'burgerTotal'
],
methods: {
      getImagePath: function(item){
		console.log("burgercreation");
		return imagePath+item.imgSrc;
	  }
  }



</script>

<style>
.burgerBar {
  position: relative;
  bottom: 100;
  height: 110px;
  width: 100%;
  background-color: #1e272e;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 110px;
  grid-template-rows: 110px;
  grid-template-areas: "a b";
}

.currentBurger {
  grid-area: a;
  height: 110px;
}

.burgerItem {
  display: inline-block;
  height: 110px;
  width: 110px;
}

.burgerItem:hover {
  cursor: pointer;
}

.burgerItem img {
  max-height: 75%;
  margin: 5% 10px 0 10px;
}

.burgerItem p {
  color: white;
  text-align: center;
  font-size: 12px;
}

.removeItem {
  position: fixed;
  height: 30px;
  width: 30px;
  z-index: 2;
  margin-left: 79px;
}

.removeItem img {
  max-width: 70%;
  margin-right: 15px;
}

.burgerTotal {
  padding: 5px;
  background-color: #416451;
  color: #ffffff;
  display: inline-block;
}

.totalValue {
  line-height: 80px;
  vertical-align: center;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
}
</style>
