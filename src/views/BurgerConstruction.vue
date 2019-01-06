<template>
<div>
<Bars :treedata="tree"
:meatdata="meat"
:ingredientsdata="ingredients"
:saucesdata="sauces"
></Bars>
</div>
</template>

<script>

import Bars from './Test1.vue'

export default {
  name: 'Test',
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
  }),
    components:{
    Bars,
  },
}
</script>
