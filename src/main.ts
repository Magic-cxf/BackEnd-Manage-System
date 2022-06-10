import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import BMSRequest from './network/index'

createApp(App).use(store).use(ElementPlus).use(router).mount('#app')
BMSRequest.request({
  method: 'get',
  params: {
    name: 'cxf',
    age: 10
  }
}).then((res) => {
  console.log(res)
})
