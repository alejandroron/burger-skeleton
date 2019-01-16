<template>
<div class="container">
  <div class="boxes">
    <div class="item" v-for="(item, index) in order" :key="index">

      <div class="top">
        <button id="delete" v-on:click="$emit('delete_item', index)">
        <img src="@/assets/redX.png" id="minus" width="30px" height="30px">
        </button>
        <h2 id="name">{{ item.item.title }}</h2>
      </div>

      <div class="middle">

        <div v-if="item.item.isBurger">
          <ul class="ingredientList">
            <li class="ingredient" v-for="(ingredient, indexIngredient) in item.item.ingredients" :key="indexIngredient">
            <span>
              {{ ingredient }}
            </span>
            </li>
          </ul>
        </div>

        <div v-if="!item.item.isBurger">
          <ul class="ingredientList">
            <li class="ingredient" v-for="(ingredient, indexIngredient) in item.item.ingredients" :key="indexIngredient">
            <span>
              {{ ingredient["item"]["name"] }}
            </span>
            </li>
          </ul>
        </div>

      </div>

      <div class="bottom">
      <p>
      {{ item.item.price.toFixed(2) }} €
      </p>
      </div>

    </div>
  </div>


  <div class="totalPrice">
    <p>TOTAL: {{ this.price.toFixed(2) }} </p>

  </div>

  <div class="modify" v-on:click="$emit('modify_order')">
    <p>ADD AN ITEM</p>
  </div>

  <div class="pay" v-on:click="$emit('emit_order')">
    <p>PAY</p>
  </div>

</div>
</template>

<script>
export default {
name: 'OrderSummary',
props:[
'order',
'price'
]
}
</script>


<style>
h1,
h2,
h3,
h4,
h5,
p {
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

#delete {
width: 30px;
cursor: pointer;
margin-right: -5px;
margin-top: -5px;
border-radius: 50%;
background-color: transparent;
border: none;
}

.boxes {
margin-top: 110px;
margin-bottom: 140px;
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
background-color: #485460;
/* The colour depends, all the options are, i think we'd need JS for this:
Gray: #485460
Black: #000000
Purple: #3C40C6 */
}


/* Items are divided into three parts: top, middle and bottom */

.item .top {
display: flex;
height: 58px;
border-radius: 5px 5px 0px 0px;
background-color: #333C45;
/* Options:
Gray: #333C45
Black: #171717
Purple: #303398
*/
}

.plus,
.minus {
background-color: transparent;
cursor: pointer;
border-radius: 50%;
width: 20px;
height: 20px;
border: none;
}

.minus img,
.plus img {
margin: -2px 0 0 -8px;
width: 20px;
height: 20px;
}

#name {
color: white;
font-size: 20px;
text-align: center;
line-height: 58px;
margin-left: 60px;
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
background-color: #333C45;
/* Options:
Gray: #333C45
Black: #171717
Purple: #303398
*/
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


/* Modify and Pay buttons */

.totalPrice {
top: 60px;
position: fixed;
width: 100%;
height: 30px;
background-color: #000000;
}

.modify {
cursor: pointer;
bottom: 40px;
position: fixed;
width: 100%;
height: 40px;
background-color: #05C46B;
}

.pay {
cursor: pointer;
bottom: 0px;
position: fixed;
width: 100%;
height: 40px;
background-color: #0C44D1;
}

.pay p,
.modify p,
.totalPrice p {
text-align: center;
line-height: 40px;
color: white;
font-size: 20px;
}

.totalPrice p {
text-align: center;
line-height: 30px;
color: white;
font-size: 15px;
}
</style>
