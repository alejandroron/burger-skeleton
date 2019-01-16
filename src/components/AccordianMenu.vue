<template>
<div class="component">
  <ul class="cd-accordion-menu">
    <li v-for="(dropdown, index) in menuData" :key="index">
      <DropDownComponent :model=menuData[index]
      :deccount = "decitem"
	  :currentOrder="currentOrder"
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
    currentOrder: Array,
    menuData: Object,
    decitem: String
  },
  components: { DropDownComponent }
}
</script>

<style>
.component {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>