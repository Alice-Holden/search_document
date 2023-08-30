import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from "axios";



/* Axios setup */
axios.defaults.baseURL = process.env.VUE_APP_API_URL_DOCS;
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.mount('#app')
