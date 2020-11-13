export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('../views/Menu.vue')
      },
      {
        path: 'shopbag',
        name: 'Shopbag',
        component: () => import('../views/Shopbag.vue')
      },
      {
        path: 'my',
        name: 'My',
        component: () => import('../views/My.vue')
      }
    ]
  },

  {
    path: '/detail/:pid',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },

  {
    path: '/pay',
    name: 'Pay',
    component: () => import('../views/Pay.vue')
  },

  {
    path: '/newAddress',
    name: 'NewAddress',
    component: () => import('../views/NewAddress.vue')
  },

  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/Address.vue')
  },

  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },

  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  }
]