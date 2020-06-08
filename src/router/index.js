import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'index',
    component: () => import('../views/Index.vue'),    
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/project/Index.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/projects/create',
    name: 'projects.create',
    component: () => import('../views/project/Create.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/projects/:id',
    name: 'projects.show',
    component: () => import('../views/project/Show.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('../views/Tasks.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        name: 'index',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
