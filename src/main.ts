import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/style.css'
import 'web-animations-js'
createApp(App).use(router).mount('#app')
