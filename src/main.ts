import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import globalComponents from '@/components'
import globalDirectives from '@/directives'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(globalComponents)
app.use(globalDirectives)
app.use(router)

app.mount('#app')
