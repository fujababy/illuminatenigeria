import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home.vue'
import aboutUs from '../views/aboutUs.vue'
import purpose from '../views/purpose.vue'
import donate from '../views/donate.vue'
import terms from '../views/terms.vue'
import privacy from '../views/privacy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/purpose',
      name: 'purpose',
      component: purpose
    },
    {
      path: '/donate',
      name: 'donate',
      component: donate
    },
    {
      path: '/terms',
      name: 'terms',
      component: terms
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
