import {
	RECEIVE_USER_INFO
} from './mutations-type'
export default {
	// 获取用户登录信息
	[RECEIVE_USER_INFO] (state, payload) {
		state.userInfo = payload
	}
}
