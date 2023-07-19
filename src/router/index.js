// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { VueNavigationClient, hook } from './helpers'
import { auth } from '@/stores/auth'
import { NavigationClient } from '@azure/msal-browser'

const unmatched = '/:pathMatch(.*)*'
const unguarded = [
  '/',
  '/login',
  '/logout',
  '/signin'

]

const routes = [
  {
    path: '/app',
    component: () => import('@/layouts/default/Default.vue'),
    props: true,
    children: [
      {
        path: '/app',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/app/activities',
        name: "Activities",
        component: () => import('@/views/Activities.vue')
      },
      {
        path: '/login',
        name: "Login",
        component: () => import('@/views/Login.vue'),
      }
    ],
  },
  {
    path: '/',
    name: "Welcome",
    component: () => import('@/views/Welcome.vue')
  },
  hook('/signin', auth.login),
  hook('/logout', auth.logout)

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})




/// AUTHENTICATION

// hook MSAL into router
const client = new NavigationClient()

// set up auth and guard routes
router.beforeEach(async (to, from, next) => {
  // 404
  if (to.matched[0]?.path === unmatched) {
    return next()
  }

  // guarded
  const guarded = unguarded.every(path => path !== to.path)
  if (guarded) {
    // initialized
    if (!auth.initialized) {
      await auth.initialize(client)
    }

    // authorised
    if (auth.account) {
      return next()
    }
    // unauthorised
    return next({path: '/login', query: {
      redirectPath: encodeURIComponent(to.fullPath)
    }})
  }

  // unguarded
  next()
})




export default router
