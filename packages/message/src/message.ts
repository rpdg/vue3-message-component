import { createVNode, render, VNode } from 'vue';
import type {IMessageParams} from './message.types';
import MessageComponent from './message.vue';


const instances:VNode[] = [];

const Message = (options:IMessageParams) =>{
    // 函数的参数个数不一致 可以使用ts的重载
    if(typeof options == 'string'){ // ts 类型保护
        options = {
            message:options
        }
    }
    // 到这里肯定是一个对象
    
    // options 就是一个对象  根据这个选项渲染一个组件

    // 1.元素应该渲染到哪里？  body   手动挂载，而不是内置 ， 此时是动态创建组件
    // 2. new Vue(render:()=>h(Message)).mount()  Vue2
    // 3. createVNode(component) => render(component,container)
    let offset = options.offset || 20;
    instances.forEach(vm=>{
        offset += vm.el!.offsetHeight + 20
    }); // 创建组件的时候 给他传入偏移量

    let userClose = options.onClose
    let opts = {
        ...options,
        offset,
        onClose:()=>{
            // 当移除的时候 需要把位置进行一个调整，把当前的位置向上移，移除实例
            // 根据id 移除掉对应的弹框
            userClose?.() // es10的链判断运算符 userClose && userClose()
        }
    }
    const container = document.createElement('div');
    // 1.渲染组件
    const vm = createVNode(MessageComponent,opts as any);
    vm.props!.onDestroy = ()=>{

        // vue3的render方法
        render(null,container); // 此render会移除dom vue2的卸载不会移除
    }
    render(vm,container);
    // 2.我需要将渲染后的结果 将其放到body下
    
    document.body.appendChild(container.firstElementChild!)
    instances.push(vm);
}


export default Message;