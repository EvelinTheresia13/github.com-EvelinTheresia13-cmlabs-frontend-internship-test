import Vue from 'vue'
import Categori from './views/Categori.vue'
import PastaMeals from './views/PastaMeals.vue'
import FettucineAlfredo from './views/FettucineAlfredo.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Categori',
        component: Categori
    },
    {
        path: '/PastaMeals',
        name: 'PastaMeals',
        component: PastaMeals
    },
    {
        path: '/FettucineAlfredo',
        name: 'FettucineAlfredo',
        component: FettucineAlfredo
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router;
