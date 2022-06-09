import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface BMSRequest {
  //设置拦截器的接口
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}
//拦截器接口继承自axiosconfig类型
export interface BMSRequestConfig extends AxiosRequestConfig {
  interceptors?: BMSRequest
}
