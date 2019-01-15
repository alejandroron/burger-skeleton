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
    @added_customized_to_order="addItem"
    />

    <Tab
    @added_item_to_order="addItem"
    @changeview='changeView'
    />

    <TabsFooter
    :currentOrder='currentOrderTabs'
    :orderTotal='orderTotalTabs'
    @remove_item_from_order="removeItem"
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
      'currentPage',
      'currentOrderTabs',
      'orderTotalTabs'
    ],
    components: {
    Navbar,
    Tab,
    TabsFooter
    },
    data: function() {
      return {
      currentOrders: this.currentOrderTabs,
      orderTotal: this.orderTotalTabs
      }
    },
    methods: {
      addItem: function(item) {
      console.log('addItem Tabs')
      this.$emit('added_item_to_order', item); // talking to order page
      },
      removeItem: function(item) {
      this.$emit('removed_item_from_order', item); // talking to order page
      },
      changeView: function() {
      this.$emit('changeview','BurgerConstruction');
      }
    }
  }
</script>

<style scoped>

</style>
