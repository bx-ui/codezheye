import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import '@/components/index.js'
import '@/assets/css/zcm-main.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import '@/utils/util.ts'

import 'lib-flexible'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
