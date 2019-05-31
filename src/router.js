import Vue from 'vue'
import Router from 'vue-router'
import Show from './views/Show.vue'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import addProject from './views/addProject.vue'
import updateProject from './views/updateProject.vue'
import tags from './views/Tags.vue'
import tag from './views/Tag.vue'
import Logout from './views/Logout.vue'
import AddReview from './views/AddReview.vue'
import GetReviews from './views/GetReviews.vue'
import Pledge from './views/Pledge.vue'
import Dashboard from './views/Dashboard.vue'
import resetPassword from './views/resetPassword.vue'


// TO project tHe routes (auth/not auth) => 
// 1 - Add meta requireAuth ou requireVisitor
// 2 -  at Main.js : make the functions 

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/show/:Pid',
      name: 'show',
      component: Show
    },
    {
      path: '/add',
      name: 'addProject',
      component: addProject,
      meta: {
        requiresAuth: true,
      }
    },
    {
       path: '/update/:Pid',
       name: 'updateProject',
       component: updateProject,
       meta: {
        requiresAuth: true,
      }
     },
     {
      path: '/tags',
      name: 'tags',
      component: tags
    },
    {
      path: '/tags/:tag',
      name: 'tag',
      component: tag
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/show/:Pid/addreview',
      name: 'AddReview',
      component: AddReview,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/show/:Pid/GetReviews',
      name: 'GetReviews',
      component: GetReviews,
    },
    {
      path: '/show/:Pid/Pledge',
      name: 'Pledge',
      component: Pledge,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      }
    },
     {
      path: '/account/reset/:token',
      name: 'resetPassword',
      component: resetPassword,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
