// import axios from 'axios'
// // axios.request({
// //   method: ' get',
// //   params: {
// //     name: 'cxf',
// //     password: 'csss'
// //   }
// // })

// axios.defaults.baseURL = 'https://httpbin.org'
// axios.defaults.timeout = 5000

// //模拟get请求
// axios.interceptors.request.use(
//   (config) => {
//     console.log('请求拦截成功！')
//     return config
//   },
//   (err) => {
//     console.log('请求拦截错误')
//     console.log(err)
//   }
// )
// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应拦截成功！')
//     console.log(res)
//     return res
//   },
//   (err) => {
//     console.log('响应拦截失败')
//     console.log(err)
//   }
// )

// axios
//   .get('/get', {
//     params: {
//       name: 'cxf',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// //模拟post请求
// axios
//   .post('/post', {
//     data: {
//       name: 'cxf',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// axios
//   .all([
//     axios.get('/get', { params: { name: 'cxf', age: 18 } }),
//     axios.post('/post', { data: { name: 'cxf', age: 10 } })
//   ])
//   .then((res) => {
//     console.log(res[0].data)
//     console.log
//   })

// //fun1  请求成功时候的函数  func2请求失败的函数
/*
@author:cxf
@function:封装了axios模块   axios模块的对外接口
*/

// import axios from 'axios'

// class
