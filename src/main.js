import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import 'prismjs';
import 'prismjs/components/prism-javascript.min.js'; // Подключите язык, который вы будете использовать
import 'prismjs/themes/prism.css'; // Основные стили Prism

const app = createApp(App)
app.use(router)
app.mount('#app')
