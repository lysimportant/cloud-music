import {
  RECEIVE_USER_INFO
} from './mutations-type'

import {
  reqPhoneLogin
} from '@/api/user'

export default {
  // 获取用户登录信息
  async getUserInfo ({ commit }, payload) {
    const { data: res } = await reqPhoneLogin(payload)
    window.sessionStorage.setItem('token', res.token)
    commit(RECEIVE_USER_INFO, res.profile)
  }
}
