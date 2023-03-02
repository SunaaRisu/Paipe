import { createApp } from 'vue'

import './assets/themes.css'
import App from './App.vue'
import store from './store'

const app = createApp(App).use(store).mount('#app')

