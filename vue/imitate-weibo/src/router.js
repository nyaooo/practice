import Vue from 'vue'
import VueRouter from 'vue-router'

import Trend from './components/Trend.vue'
import Hot from './components/Hot.vue'
import Findperson from './components/Findperson.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/trend',
        component: Trend
    },
    {
        path: '/hot',
        component: Hot
    },
    {
        path: '/findperson',
        component: Findperson
    },
    {
        path: '/',
        redirect: '/trend'        
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router