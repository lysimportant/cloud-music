import axios from 'axios'
import NProgress from 'nprogress'
/**
 *  @BSER_URL 网络请求路径
 * **/
const BASE_URL = process.env.NODE_ENV === 'development' ? '/api' : 'https://lianghj.top:3000'
export function ajax (config) {
  // axios实例
  const instance = axios.create({
    // baseURL: 'http://120.78.137.246:3000',
    // baseURL: 'https://lianghj.top:3000',
    baseURL: BASE_URL,
    timeout: 3000
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
    NProgress.start()
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    NProgress.done()
    return res
  })
  return instance(config)
}
