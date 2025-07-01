import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'


/* import { getCategory } from "@/apis/testAPI"
getCategory().then(res => {
    console.log(res)
}) */
//引入懒加载插件并注册
import { lazyPlugin } from '@/directives'
//引入全局组件插件
import { componentsPlugin } from '@/components'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugin)
app.mount('#app')
//定义全局指令
