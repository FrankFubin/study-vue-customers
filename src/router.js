import Vue from 'vue'
import Router from 'vue-router'
import Customers from './views/Customers'
import About from './views/About'
import Add from './views/Add'
import CustomerDetails from './views/CustomerDetails'
import Edit from './views/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/customer/:id',
      name: 'customerDetails',
      component: CustomerDetails
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    }
  ]
})
