import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import Booking from '../views/Booking.vue'
import Contact from '../views/Contact.vue'
import Trip from '../views/Trip.vue'
import Category from '../views/Category.vue'
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/sign-up',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/log-in',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
  },

  {
    path: '/:category_slug/:trip_slug',
    name: 'Trip',
    component: Trip
  },
  {
    path: '/:category_slug',
    name: 'Category',
    component: Category
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.matched.some(record=>record.meta.requireLogin)&& !store.state.isAuthenticated){
    next({name:'Login', query: {to: to.path } }); 
  }
  else{
    next()
  }
})

export default router