import { createApp } from 'vue'
import App from './App.vue'

import UI from '../packages'
// Vue2 vue3  使用插件(插件必须要有个install方法) .use(X)
import '../packages/theme-chalk/index.scss'
createApp(App).use(UI).mount('#app')
