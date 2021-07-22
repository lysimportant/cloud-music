import { ajax } from '@/lib/ajax'
// 手机号码登录
export const reqPhoneLogin = data => {
  return ajax({
    method: 'POST',
    url: '/login/cellphone',
    data
  })
}
// /login/status
export const reqLoginState = () => {
  return ajax({
    url: '/login/status'
  })
}

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const reqUserSub = () => {
  return ajax({
    url: '/user/subcount'
  })
}
//  /user/playlist
// 获取用户歌单
export const reqUserPlayList = uid => {
  return ajax({
    url: '/user/playlist',
    params: {
      uid,
      limit: 30,
      offset: 0
    }
  })
}
