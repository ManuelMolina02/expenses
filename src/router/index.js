import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        icon: 'home', title: 'Home'
      },
      component: () => import(/* webpackChunkName: "about" */ '../pages/home/Home')
    },
    {
      path: '/charts',
      name: 'charts',
      meta: {
        icon: 'chart-bar', title: 'Charts'
      },
      component: () => import(/* webpackChunkName: "about" */ '../pages/charts/Chart')
    },
    {
      path: '/expenses-list',
      name: '/expenses-list',
      meta: {
        icon: 'list-ul', title: 'Lista Gastos'
      },
      component: () => import(
        /* webpackChunkName: "about" */
        '../pages/expenses-list/ExpensesList')
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: 'Login' },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../pages/login/Login')
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Expenses `
  if (!window.uid && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
