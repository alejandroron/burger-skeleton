<template>
  <div class="container" v-if="currentPage.length===3">
    <NavbarSummary
    :titleProperty='"ORDER SUMMARY"'
    />

    <OrderSummary
    :order='currentOrderSummary'
    :price='orderTotalSummary'
    @delete_item="deleteItem"
    @modify_order="modifyOrder"
    @emit_order="sendOrder"
    />
  </div>

</template>


<script>
  import NavbarSummary from '@/components/NavbarSummary.vue';
  import OrderSummary from '@/components/OrderSummary.vue';

  export default {
    name: 'OrderSummaryPage',
    props: [
      'currentPage',
      'currentOrderSummary',
      'orderTotalSummary'
    ],
    components: {
      NavbarSummary,
      OrderSummary
    },
    data: function() {
      return {
        finalOrder: this.currentOrderSummary,
        finalTotal: this.orderTotalSummary
      }
    },
    methods: {
    deleteItem: function(index)
    {
    this.$emit('item_delete', index);
    },
    sendOrder: function()
    {
    this.$emit('send_order');
    this.$emit('changeview', 'OrderCompletedPage');
    },
    modifyOrder: function()
    {
    this.$emit('changeview', 'Tabs');
    }

    }
  }
</script>

<style scoped>
</style>
