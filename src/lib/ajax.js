import axios from 'axios'
export function ajax (config) {
	// axios实例
	const instance = axios.create({
		baseURL: '/api',
		timeout: 5000
	})
	// 请求拦截
	instance.interceptors.request.use(config => {
		return config
	})
	// 响应拦截
	instance.interceptors.response.use(res => {
		return res
	})
	return instance(config)
}
