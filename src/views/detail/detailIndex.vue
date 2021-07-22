<template>
  <div class="detail">
    <detail-header @loadmusic="loadmusic" :song-detail-list="songDetailList"/>
    <detail-table :music-list="musicList"/>
    <!-- table区域 -->
  </div>
</template>

<script>
import {
  reqSongListDetail,
  reqSongDetail,
} from '@/api/discover'

import detailHeader from './children/detailHeader.vue'
import detailTable from './children/detailTable.vue'
export default {
  name: 'detailIndex',
  components: {
    detailHeader,
    detailTable
  },
  data () {
    return {
      songDetailList: {},
      musicList: []
    }
  },
  methods: {
    getSongDetail (id) {
      let getId = window.sessionStorage.getItem('id')
      reqSongListDetail(id || getId).then(res => {
        this.songDetailList = res.data.playlist
        let arr = []
        res.data.playlist.trackIds.find(item => {
          arr.push(item.id)
        })
        reqSongDetail(arr).then(res => {
          this.musicList = res.data.songs
        })
      })
    },
    loadmusic () {
      // 添加音乐
      this.musicList.forEach(item => {
        this.playMusic(item)
      })
    }
  },
  mounted () {
    this.$bus.$on('newDetail', id => {
      this.getSongDetail(id)
    })
  },
  created () {
    this.getSongDetail()
  }
}
</script>

<style scoped lang="less">
.detail {
  margin: 10px 50px;

}
</style>
