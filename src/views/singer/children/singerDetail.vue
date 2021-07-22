<template>
  <div class='singerDetail'>
    <div class="header">
      <img :src="singer.cover" alt="">

      <div class="info">
        <h1><span>歌手</span>{{ singer.name }}</h1>
        <div>
          <el-button>收藏</el-button>
        </div>
        <div><span>歌曲:  </span> <i>{{ singer.musicSize}}</i></div>
        <div><span>专辑:  </span> <i>{{ singer.albumSize}}</i></div>
        <div><span>MV:  </span> <i>{{ singer.mvSize}}</i></div>
      </div>
    </div>
   <div :style="{marginTop: '20px'}">
      <el-tabs v-model="activeName" @tab-click="handleClick(activeName)">
      <el-tab-pane label="专辑" name="album">
        <singer-album :ablum="ablum" :ablum-list="ablumList"/>
      </el-tab-pane>
      <el-tab-pane label="MV" name="mv">
        <singer-mv :mvs="mv"/>
      </el-tab-pane>
      <el-tab-pane label="歌手详情" name="detail">
        <singer-detail_detail :detail="detail" />
      </el-tab-pane>
      <el-tab-pane label="相似歌手" name="simi">
        <singer-simi @simiClick='simiClick' :artists="artists"/>
      </el-tab-pane>
    </el-tabs>
   </div>
  </div>
</template>

<script>
import {
  reqSingerDesc,
  reqSingerDetail,
  reqSingerSimiArtist,
  reqSingerAlbum,
  reqSingerMv,
  reqAlbum,
  reqSingerHotSong
} from '@/api/singer'

import singerDetail_detail from './singerDetail_detail.vue'
import singerSimi from './singerSimi'
import singerMv from './singerMv'
import singerAlbum from './singerAlbum'
export default {
  name: 'singerDetail',
  components: {
    singerDetail_detail,
    singerSimi,
    singerMv,
    singerAlbum
  },
  props: {},
  data () {
    return {
      activeName: 'album',
      id: window.sessionStorage.getItem('singerId'),
      singer: {}, //
      detail: {},
      artists: [],
      mv: [],
      ablum: [],
      ablumList: []
    }
  },
  async created () {
    this.getSingerData(window.sessionStorage.getItem('singerId'))
  },
  mounted () {},
  update () {},
  methods: {
    handleClick (name) {},
    simiClick (id) {
      this.getSingerData(window.sessionStorage.getItem('singerId'))
    },
    async getSingerData (id) {
      const { data: desc } = await reqSingerDesc(id)
      const { data: { data: detail } } = await reqSingerDetail(id)
      const { data: artist } = await reqSingerSimiArtist(id)
      const { data: ablum } = await reqSingerAlbum(id)
      const { data: mv } = await reqSingerMv(id)
      this.singer = detail.artist
      this.detail = desc
      this.artists = artist.artists
      this.mv = mv.mvs
      this.ablum = ablum.hotAlbums
      ablum.hotAlbums.find(item => {
        reqAlbum(item.id).then(res => {
          this.ablumList.push(res.data)
        })
      })
    }
  },
  filter: {},
  computed: {}
}
</script>

<style scoped lang="less">
.header {
  margin-top: 30px;
  overflow: hidden;
  img {
    float: left;
    width: 300px;
    overflow: hidden;
  }
  .info {
    float: left;
    margin-left: 50px;
    h1 {
      font-size: 30px;
      span {
        padding: 5px 15px;
        font-size: 20px;
        margin: 20px 20px 10px 0;
        color: #E83C3C;
        border: 1px solid #E83C3C;
        border-radius: 5px;
      }
    }
    div {
      margin: 20px 0;
    }

  }
}
</style>
