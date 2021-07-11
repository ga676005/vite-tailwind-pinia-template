import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { pinia } from './stores'
import AppLink from './components/AppLink.vue'
import './index.css'

createApp(App)
  .component('AppLink', AppLink)
  .use(router)
  .use(pinia)
  .mount('#app')
