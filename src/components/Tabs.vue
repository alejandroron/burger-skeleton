<template>
  <div class="container" v-if="currentPage.length===0">

    <Navbar
    :currentPage='currentPage'
    :displayButtons='true'
    :backAddressProperty='"./#/"'
    :backTextProperty='"START OVER"'
    :titleProperty='"CREATE YOUR MENU"'
    :nextAddressProperty='"./#/OrderSummary/"'
    :nextTextProperty='"FINISH ORDER"'
    :order='currentOrder'
    :totalPrice='orderTotal'
    @added_customized_to_order="addItem"
    />

    <Tab
    @added_item_to_order="addItem"
    @changeview='changeView'
    />

    <TabsFooter
    :currentOrder='currentOrder'
    :orderTotal='orderTotal'
    @removeItemFromOrder="removeItem"
    />

  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import Tab from '@/components/Tab.vue';
  import TabsFooter from '@/components/TabsFooter.vue';

  export default {
    name: 'Tabs',
    props: [
      'currentPage'
    ],
    components: {
    Navbar,
    Tab,
    TabsFooter
    },
    data: function() {
      return {
      }
    },
    methods: {
      addItem: function(item) {
        this.$emit('addedItemToOrder', item); // talking to order page
      },
      changeView: function() {
      this.$emit('changenavbar','BurgerConstruction');
      this.$emit('changeview','BurgerConstruction');

      }
    }
  }
</script>

<style scoped>

</style>
