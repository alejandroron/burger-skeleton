<template>
  <div class="container" v-if="currentPage.length===1">

    <Navbar
    :currentPage='currentPage'
    :displayButtons='true'
    :backTextProperty='"START OVER"'
    :titleProperty='"CREATE YOUR MENU"'
    :nextTextProperty='"FINISH ORDER"'
    @added_customized_to_order="addItem"
    @back_address_property="changeView"
    @next_address_property="changeView"
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
      changeView: function(identifier) {
      console.log('hi from changeView Tabs');
      this.$emit('changeview',identifier);
      }
    }
  }
</script>

<style scoped>

</style>
