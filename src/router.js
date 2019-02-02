import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
//import Projects from './views/Projects.vue'
//import Tasks from './views/Tasks.vue';
import Users from './views/Users.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "about" */ './views/Projects.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Tasks.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: Users
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/Users.vue')
    }
  ]
})
