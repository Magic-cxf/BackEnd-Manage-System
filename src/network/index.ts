// let BASE_URL = ''
// let BASE_NAME = ''

// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'https://httpbin.org'
//   BASE_NAME = 'DEVELOPMENT'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'https://httpbin.org'
//   BASE_NAME = 'production'
// } else {
//   BASE_NAME = 'test'
// }

// export { BASE_URL, BASE_NAME }

import bmsRequest from "./main"
import { BASE_TIMEOUT, BASE_URL } from "./config"

import { ElLoading } from "element-plus"

//封装一个axios模块

let loadingInstance: any = null

const BMSRequest = new bmsRequest({
  baseURL: BASE_URL,
  timeout: BASE_TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = "token ceshi"
      loadingInstance = ElLoading.service({
        lock: true,
        text: "loading"
      })
      if (token && config.headers) {
        config.headers.Authorization = token
      }
      console.log("请求拦截成功")
      return config
    },
    responseInterceptor(res) {
      loadingInstance.close()
      console.log("响应拦截成功！")
      console.log(res)
      return res.data
    }
  }
})

export default BMSRequest
