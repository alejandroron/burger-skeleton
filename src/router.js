import Vue from 'vue';
import Router from 'vue-router';

// page definitions
import OrderPage from './views/OrderPage.vue';
import KitchenOrderPage from './views/KitchenOrderPage.vue';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: 'Order Screen',
      },
      name: 'OrderPage',
      component: OrderPage
    },
    {
      path: '/KitchenOrderPage',
      meta: {
        title: 'Kitchen Order Screen',
      },
      name: 'KitchenOrderPage',
      component: KitchenOrderPage
    },
    {
      path: '/Kitchen',
      meta: {
        title: 'Kitchen',
      },
      name: 'Kitchen',
      component: () => import('./views/KitchenStartPage.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

export default router;
