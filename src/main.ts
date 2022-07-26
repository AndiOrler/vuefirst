import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import main from './assets/main.css'
import base from './assets/base.css'



const app = createApp(App)

app.use(router)

app.mount('#app')
