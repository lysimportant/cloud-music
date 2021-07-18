import { ajax } from '../lib/ajax'

export const reqAllMv = params => {
  return ajax({
    url: 'mv/all',
    params
  })
}

// 获取mv数据 url
export const reqMvDetail = id => {
  return ajax({
    url: '/mv/detail?mvid=' + id
  })
}
// 获取mv视频
export const reqMvDataDetail = id => {
  return ajax({
    url: '/mv/url?id=' + id
  })
}
// simi/mv 相关mv
export const reqMvSimi = mvid => {
  return ajax({
    url: '/simi/mv',
    params: { mvid }
  })
}
// comment/mv mv评论
export const reqMvComment = params => {
  return ajax({
    url: '/comment/mv',
    params
  })
}
