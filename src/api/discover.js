import { ajax } from '@/lib/ajax'
// 获取轮播图数据
export const reqBannerData = () => {
  return ajax({
    url: '/banner'
  })
}
// 获取推荐歌单
export const reqRecommend = () => {
  return ajax({
    url: '/personalized?limit=10'
  })
}
/**
 * @获取每日推荐歌单
 * **/
export const reqRecommendList = () => {
  return ajax({
    url: '/recommend/resource'
  })
}
/**
 * @获取每日推荐歌曲
 * **/
export const reqRecommendSongs = () => {
  return ajax({
    url: '/recommend/songs'
  })
}
// 获取推荐新音乐
export const reqNewRecommend = () => {
  return ajax({
    url: '/personalized/newsong'
  })
}
/** @独家放松  /personalized/privatecontent **/
export const reqPrivatecontent = () => {
  return ajax({
    url: '/personalized/privatecontent'
  })
}

// 获取推荐mv
export const reqMvRecommend = () => {
  return ajax({
    url: '/personalized/mv'
  })
}
/**
 * @获取歌单详情 /playlist/detail
 * */
export const reqSongListDetail = id => {
  return ajax({
    url: '/playlist/detail',
    params: { id }
  })
}
/**
 * @reqPlayMusic_播放音乐
 * **/
export const reqPlayMusic = (id) => {
  return ajax({
    url: '/song/url',
    params: { id }
  })
}

/**
* @获取歌曲信息
 **/
export const reqSongDetail = (...ids) => {
  return ajax({
    url: `/song/detail?ids=${ids}`
  })
}
/**
 * @获取歌词
 * **/
export const reqMusicLyric = id => {
  return ajax({
    url: `/lyric?id=${id}`
  })
}
