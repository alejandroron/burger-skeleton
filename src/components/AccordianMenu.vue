<template>
<div class="component">
  <ul class="cd-accordion-menu">
    <li v-for="dropdown in menuData" :key="dropdown">
      <DropDownComponent :model="dropdown"></DropDownComponent>
    </li>
  </ul>
</div>
</template>

<script>
import DropDownComponent from '../components/DropDownComponent.vue';

export default{
  name: 'Bars',
  props: {
    menuData: Object,
  },
  components: { DropDownComponent },
}
</script>

<style>
.component {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
