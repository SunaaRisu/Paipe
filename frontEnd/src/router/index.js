import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '', name: 'Home', component: () => import('../views/home.vue')},
        {path: '/search', name: 'Search', component: () => import('../views/search.vue')},
        {path: '/notifications', name: 'Notifications', component: () => import('../views/notifications.vue')},
        {path: '/libary', name: 'Libary', component: () => import('../views/libary.vue')},
        {path: '/history', name: 'History', component: () => import('../views/history.vue')},
        {path: '/watch/:vid', name: 'Watch', component: () => import('../views/watch.vue')},
        {path: '/login', name: 'Login', component: () => import('../views/login.vue')},
        {path: '/signup', name: 'Signup', component: () => import('../views/signup.vue')},
        {path: '/redirect', name: 'Redirect', component: () => import('../views/redirect.vue')},
    ]
})

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
      // Start the route progress bar.
      // LoadingBar.start()
    }
    next()
  })
  
  router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    // LoadingBar.done()
  })
  


export default router;