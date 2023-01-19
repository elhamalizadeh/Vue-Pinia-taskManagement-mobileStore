import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')