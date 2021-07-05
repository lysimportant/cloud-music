import { ajax } from '@/lib/ajax'
// 手机号码登录
export const reqPhoneLogin = data => {
  return ajax({
    method: 'POST',
    url: '/login/cellphone',
    data
  })
}
