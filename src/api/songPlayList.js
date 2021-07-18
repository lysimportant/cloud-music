import { ajax } from '@/lib/ajax'
/**
 * @获取精品歌单推荐
 * **/
export const reqTopPlayList = (cat = '全部', limit = 1) => {
  return ajax({
    url: '/top/playlist/highquality',
    params: {
      limit,
      cat
    }
  })
}
/**
 * @歌单推荐列表
 * **/
export const reqRecommendPlayList = (offset = 0, limit = 15, cat = '全部') => {
  return ajax({
    url: '/top/playlist',
    params: {
      offset,
      limit,
      cat
    }
  })
}
/**
 * @获取最新音乐 全部:0 华语:7 欧美:96 日本:8  韩国:16
 **/
export const reqNewSongs = (id = 0) => {
  return ajax({
    url: '/top/song',
    params: { type: id }
  })
}
/**
 * @获取歌曲热门评论 /comment/hot  0: 歌曲 1: mv2: 歌单3: 专辑4: 电台5: 视频
 **/
export const reqComment = params => {
  return ajax({
    url: '/comment/hot',
    params
  })
}
/**
 * @获取歌曲最新评论 /comment/playlist
 * **/
export const reqCommentNew = params => {
  return ajax({
    url: 'comment/playlist',
    params
  })
}
/** 获取歌单收藏者 */
export const reqSongSub = (id, limit) => {
  return ajax({
    url: '/playlist/subscribers',
    params: {
      id,
      limit
    }
  })
}
