import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios, { Axios } from 'axios'

Axios.defaults.baseUrl= 'http://17.0.0.1:8000'
createApp(App).use(store).use(router,axios).mount('#app')
