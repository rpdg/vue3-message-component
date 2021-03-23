<template>
  <button @click="showMessage">显示弹框</button>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import {Message} from '../packages/message'
export default defineComponent({
    setup(){ // vue3 代码的入口  compositionApi
        const showMessage = () =>{
            Message({
                center:true,
                type:'success'
            })
        }
        return {
            showMessage
        }
    },
    methods:{
        // showMessage(this:{$message:()=>void}){
        //     this.$message()
        // }
    }
})
</script>
