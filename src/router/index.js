import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '', name: 'Home', component: () => import('../views/home.vue')},
        {path: '/search', name: 'Search', component: () => import('../views/search.vue')},
        {path: '/notifications', name: 'Notifications', component: () => import('../views/notifications.vue')},
        {path: '/libary', name: 'Libary', component: () => import('../views/libary.vue')},
        {path: '/history', name: 'History', component: () => import('../views/history.vue')},
    ]
})

export default router;