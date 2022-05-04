import Dynamic from './pages/Dynamic.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
         {path: '/', name: "home", component: Home},
         {path: '/about', name: "about", component: About},
         {path: '/dynamic/:name', name: "dynamic", component: Dynamic}, 
    ]
})

<template>
   <Display :name=name></Display>
</template>
<script setup>
import Display from '../components/Display.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const route = useRoute()
const name = ref(route.params.name)
watch(
      () => route.params.name,
       newValue => {
        name.value = route.params.name
      }
    )
</script>