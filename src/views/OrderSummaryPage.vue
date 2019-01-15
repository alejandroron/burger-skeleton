<template>
  <div class="container" v-if="currentPage.length===3">
    <NavbarSummary
    :titleProperty='"ORDER SUMMARY"'
    />

    <OrderSummary
    :order='finalOrder'
    :price='finalTotal'
    @delete_item="deleteItem"
    @decrement_item="decrementItem"
    @increment_item="incrementItem"
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
      'currentOrder',
      'orderTotal'
    ],
    components: {
      NavbarSummary,
      OrderSummary
    },
    data: function() {
      return {
        finalOrder: this.currentOrder,
        finalTotal: this.orderTotal
      }
    },
    methods: {
    deleteItem: function(index)
    {
    this.$emit('item_delete', index);
    },

    decrementItem: function(indexItem, indexIngredient)
    {
    this.$emit('decrement_ingredient', indexItem, indexIngredient);
    },

    incrementItem: function(indexItem, indexIngredient)
    {
    this.$emit('increment_ingredient',indexItem, indexIngredient);
    },

    }
  }
</script>

<style scoped>
</style>
