import {
  RECEIVE_USER_INFO,
  RECEIVE_SONGS_DETAIL,
  RECEIVE_MUSIC_LIST,
  RECEIVE_MUSIC_MV,
  RECEIVE_MUSIC_DATA
} from './mutations-type'

import {
  reqPhoneLogin,
  reqLoginState
} from '@/api/user'

import {
  reqSongListDetail,
  reqPlayMusic,
  reqSongDetail,
  reqMusicLyric
} from '@/api/discover'
import { reqMvDetail, reqMvDataDetail, reqMvSimi } from '@/api/reqMv'
export default {
  // 获取用户登录信息
  async getUserInfo ({ commit }, payload) {
    const { data: res } = await reqPhoneLogin(payload)
    window.sessionStorage.setItem('token', res.token)
    commit(RECEIVE_USER_INFO, res.profile)
  },
  async getUserData ({ commit }) {
    const { data: { data: res } } = await reqLoginState()
    commit(RECEIVE_USER_INFO, res.profile)
  },
  /**
   * @_mv视频数据获取
   **/
  async getMvDetail ({ commit }, id) {
    const { data: res } = await reqMvDetail(id)
    const {
      data: { data: mvData }
    } = await reqMvDataDetail(id)
    const { data: res1 } = await reqMvSimi(id)
    const obj = {}
    obj.data = res.data
    obj.url = mvData.url
    obj.mvs = res1.mvs
    commit(RECEIVE_MUSIC_MV, obj)
  },
  /**
   * @获取歌单详情
   * **/
  async getSongListDetail ({ commit }, id) {
    const res = await reqSongListDetail(id)
    commit(RECEIVE_SONGS_DETAIL, res.data.playlist)
    commit(RECEIVE_MUSIC_LIST, res.data.playlist.tracks)
    // console.log(res.data.playlist.tracks)
  },
  /**
   * @获取播放音乐信息
   * **/
  async getAudioInfo ({ commit }, payload) {
    console.log(payload)
    const {
      data: { data: res }
    } = await reqPlayMusic(payload.id)
    const { data: song } = await reqSongDetail(payload.id)
    const { data: lyric } = await reqMusicLyric(payload.id)
    console.log(lyric)
    const obj = {}
    obj.info = song.songs[0]
    lyric.lrc ? (obj.lyric = lyric.lrc.lyric) : '没有歌词!'
    obj.url = res[0].url
    commit(RECEIVE_MUSIC_DATA, obj)
  }
}
