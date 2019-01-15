<template>
<div class="component">
  <ul class="cd-accordion-menu">
    <li v-for="(dropdown, dropdownIndex) in menuData" :key="dropdownIndex">
      <DropDownComponent :model="dropdown[dropdownIndex]"
      :deccount = "decitem"
      @delete_ingredient_from_burger="deleteIngredient"
      @add_ingredient_to_burger="addIngredient"
      />
    </li>
  </ul>
</div>
</template>

<script>
import DropDownComponent from '../components/DropDownComponent.vue';
export default {
  name: 'AccordianMenu',
  props: {
    menuData: Object,
    decitem: String
  },
  components: { DropDownComponent },
  methods: {

  deleteIngredient: function(ingredient) {
  console.log('hi from Accordian');
  this.$emit('delete_ingredient_from_burger', ingredient);
  },

  addIngredient: function(ingredient) {
  console.log('hi from Accordian');
  this.$emit('add_ingredient_to_burger', ingredient);
  }

  }

}
</script>

<style>
.component {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
