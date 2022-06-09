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

import bmsRequest from './main'
import { BASE_TIMEOUT, BASE_URL } from './config'

//封装一个axios模块
const BMSRequest = new bmsRequest({
  baseURL: BASE_URL,
  timeout: BASE_TIMEOUT,
  interceptors: {
    requestInterceptor(config) {
      console.log('请求拦截成功')
      return config
    },
    responseInterceptor(res) {
      console.log('响应拦截成功！')
      console.log(res)
      return res
    }
  }
})

export default BMSRequest
