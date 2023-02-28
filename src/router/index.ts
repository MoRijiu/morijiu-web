/*
 * @Author: zhengduo
 * @Date: 2023-02-28 10:23:48
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-02-28 10:24:03
 * @Descripttion: 
 */
import { createRouter, createWebHistory,  } from 'vue-router'
 
export const routes = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        name: 'index',
        path: '/index',
        component: () => import("../pages/index.vue")
    },
 
]
 
const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createWebHistory(),
    routes,
})
 
 
router.beforeEach((to,from, next) => {
    next()
})
 
 
export default router