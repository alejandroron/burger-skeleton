import Vue from 'vue';
import Router from 'vue-router';

// page definitions
import StartPage from './views/StartPage.vue';
import OrderPage from './views/OrderPage.vue';
import OrderSummaryPage from './views/OrderSummaryPage.vue';
import OrderCompletedPage from './views/OrderCompletedPage.vue';
import BurgerConstruction from './views/BurgerConstruction.vue';
import KitchenOrderPage from './views/KitchenOrderPage.vue';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: 'Welcome to Burger Heaven',
      },
      name: 'Start',
      component: StartPage
    },
    {
      path: '/OrderPage/:orderPageString',
      meta: {
        title: 'Order Screen',
      },
      name: 'OrderPage',
      component: OrderPage
    },
    {
      path: '/BurgerConstruction',
      meta: {
        title: 'Create your own burger',
      },
      name: 'BurgerConstruction',
      component: BurgerConstruction
    },
    {
      path: '/OrderSummary/:orderString',
      meta: {
        title: 'Order Summary'
      },
      name: 'Summary',
      component: OrderSummaryPage
    },
    {
      path: '/OrderCompleted',
      meta: {
        title: 'Order Completed',
      },
      name: 'Completed',
      component: OrderCompletedPage
    },
    {
      path: '/Kitchen',
      meta: {
        title: 'Kitchen',
      },
      name: 'Kitchen',
      component: KitchenOrderPage
    }
    // {
    //   path: '/KitchenOrderPage',
    //   meta: {
    //     title: 'Kitchen Order Screen',
    //   },
    //   name: 'KitchenOrderPage',
    //   component: KitchenOrderPage
    // },
    // {
    //   path: '/Kitchen',
    //   meta: {
    //     title: 'Kitchen',
    //   },
    //   name: 'Kitchen',
    //   component: () => import('./views/KitchenStartPage.vue')
    // }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

export default router;
