// styles
import '@/scss/main.scss'

// core
import { createApp } from 'vue'

/* Vue. Main component */
import App from './App.vue'

/* Router & Store */
import router from './router'
import store from './store'

import axios from 'axios'

axios.defaults.baseURL= 'http://127.0.0.1:8000'
createApp(App).use(store).use(router,axios).mount('#app')
