/*
  @function:封装网络请求模块
  @author:cxf
  @time:2022-6-9
*/

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { BMSRequest, BMSRequestConfig } from './type'

class bmsRequest {
  private instance: AxiosInstance
  private interceptors?: BMSRequest
  constructor(config: BMSRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }
  request(config: AxiosRequestConfig) {
    this.instance.request(config)
  }
}

export default bmsRequest
