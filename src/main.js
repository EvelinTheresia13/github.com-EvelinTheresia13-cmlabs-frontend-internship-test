import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router' 
import Categori from './views/Categori.vue'
import PastaMeals from './views/PastaMeals.vue'
import FettucineAlfredo from './views/FettucineAlfredo.vue'
import './assets/home.css'

//konfigurasi vue-router
const router = createRouter({
    history: createWebHistory(),
    routes:[
         {path: '/', name: "categori", component: Categori}, 
         {path: '/PastaMeals', name: "PastaMeals", component: PastaMeals},
         {path: '/FettucineAlfredo', name: "FettucineAlfredo", component: FettucineAlfredo},
    ]
})
createApp(App).
use(router).
mount('#app')