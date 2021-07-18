import axios from 'axios'
import nprogress from 'nprogress'
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
    timeout: 5000
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
    nprogress.start()
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    nprogress.done()
    return res
  })
  return instance(config)
}
