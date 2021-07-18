import {
  RECEIVE_USER_INFO,
  RECEIVE_SONGS_DETAIL,
  RECEIVE_MUSIC_LIST,
  RECEIVE_MUSIC_DATA,
  RECEIVE_MUSIC_MV,
  SAVE_SONGS_ID
} from './mutations-type'
export default {
  // 获取用户登录信息
  [RECEIVE_USER_INFO] (state, payload) {
    state.userInfo = payload
  },
  // 保存歌单列表
  [RECEIVE_SONGS_DETAIL] (state, payload) {
    state.songDetailList = payload
  },
  // 保存歌单 id
  [SAVE_SONGS_ID] (state, id) {
    state.songId = id
  },
  // 保存音乐id信息
  [RECEIVE_MUSIC_LIST] (state, payload) {
    state.musicList = payload
  },
  // 保存音乐播放信息
  [RECEIVE_MUSIC_DATA] (state, data) {
    state.musicData = data
  },
  // 保存mv信息
  [RECEIVE_MUSIC_MV] (state, data) {
    state.mv_Data = data
  }
}
