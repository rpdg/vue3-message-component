import type { App } from 'vue';
import Message from './message';

const plugins = [
    Message,
    // ....
]
const install = (app:App) =>{ // 注册全局的ui时 会调用每个组件的install
    plugins.forEach(plugin=>{
        app.use(plugin as any);
    })
}

export default {
    install
}