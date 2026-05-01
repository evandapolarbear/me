import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ResumeView from './views/ResumeView.vue'
import PhotosView from './views/PhotosView.vue'
import '@/assets/css/base.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/resume' },
    { path: '/resume', component: ResumeView },
    { path: '/photos', component: PhotosView }
  ]
})

createApp(App).use(router).mount('#app')
