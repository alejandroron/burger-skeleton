<template>
  <div id="container">
    <Navbar2
    :backAddressProperty='"./#/OrderPage"'
    :backTextProperty='"MAIN PAGE"'
    :titleProperty='"CREATE YOUR OWN BURGER"'
      />
    <Bars
      :treedata="tree"
      :meatdata="meat"
      :ingredientsdata="ingredients"
      :saucesdata="sauces"
      />
    <Footer
      :currentOrder='currentOrder'
      :orderTotal='orderTotal'
      @removeItemFromOrder="removeItem"
      />
  </div>
</template>

<script>

import Navbar2 from '@/components/Navbar2.vue';
import Bars from './Test1.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Test',
  components:{
    Bars,
    Navbar2,
    Footer
  },
  data: ()=> ({

tree: {
  name: "BREAD",
  children: [
    {
      name: "Flat Bread"},{
      name: "Fat Bread"},{
      name: "Light Bread"},{
      name: "Ugly Bread"},{
      name: "Cute Bread"}


  ]
},
meat:{
 name: "MEAT",
  children: [
    {
      name: "Flat Bread"},{
      name: "Fat Bread"},{
      name: "Light Bread"},{
      name: "Ugly Bread"},{
      name: "Cute Bread"}


  ]
},
ingredients:{
 name: "INGREDIENTS",
  children: [
    {
      name: "Flat Bread"},{
      name: "Fat Bread"},{
      name: "Light Bread"},{
      name: "Ugly Bread"},{
      name: "Cute Bread"}


  ]
},
sauces:{
 name: "SAUCES",
  children: [
    {
      name: "Flat Bread"},{
      name: "Fat Bread"},{
      name: "Light Bread"},{
      name: "Ugly Bread"},{
      name: "Cute Bread"}
  ]
}
  })
}


</script>

<style scoped>
</style>
