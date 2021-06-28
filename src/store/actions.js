import {
	RECEIVE_USER_INFO
} from './mutations-type'

import {
	reqPhoneLogin
} from '@/api/reqlogin'

export default {
	// 获取用户登录信息
	async getUserInfo ({ commit }, payload) {
		const { data: res } = await reqPhoneLogin(payload)
		console.log(res)
		commit(RECEIVE_USER_INFO, res.profile)
	}
}
