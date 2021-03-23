// 为了每个组件能单独使用 我们需要 给他提供一个install方法
import type { App } from 'vue'
import Message from './src/message'

(Message as any).install = function (app:App):void {
    // 这个写法为了兼容vue2 否则无法在this上使用
    app.config.globalProperties.$message = Message
}

export { // 用户可以去引入组件 通过use的方式，或者可以直接导入
    Message
}
export default Message;