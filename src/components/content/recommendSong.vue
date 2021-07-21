<template>
  <div class="resong">
    <h1>
      <router-link to="/home/playlist">
        推荐歌单 <i class="iconfont icon-jiantou1"></i>
      </router-link>
    </h1>
    <!-- 一个歌单 -->

    <div class="item"
         v-for="(item, index) in recommendSongs"
         :key="index"
         @mouseleave="MouseMove = false"
         @mousemove="MouseMove =  index"
    >
    <!-- 鼠标经过显示 -->
      <div  v-show="MouseMove ===  index" >
        <i @click="loadMusic(item.id)" class="iconfont icon-bofang play_icon"></i>
        <div
        :class="{ songs_top_bottom: MouseMove === index }"
        class="title text_hidden"
        :style="{zIndex: 99}">
          {{ item.copywriter }}
        </div>
      </div>
    <!-- 鼠标离开隐藏 -->
      <div
      :class="{songs_top_bottom: MouseMove !== index}"
      class="title playCount text_hidden"
      v-show="MouseMove !== index">
        <i class="el-icon-headset"></i>
        <span v-if="item.playCount">
          {{ item.playCount | ellipsisPlayVolume }}
        </span>
        <span v-else>
          {{ item.playcount | ellipsisPlayVolume }}
        </span>
      </div>
      <!-- 图片 -->
      <img @click="itemClick(item)"
        v-lazy="item.picUrl || item.coverImgUrl">
        <!-- 名字 -->
      <span class="content text_hidden">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
import {
  reqSongListDetail,
  reqSongDetail
} from '@/api/discover'

export default {
  name: 'RecommendSong',
  props: {
    recommendSongs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      MouseMove: false,
      musicList: []
    }
  },
  methods: {
    itemClick (item) {
      window.sessionStorage.setItem('id', item.id)
      // this.$store.commit(SAVE_SONGS_ID, id)
      // this.$store.dispatch('getSongsDetail', window.sessionStorage.getItem('id'))
      this.$router.push(`/home/detail/${item.id}`)
    },
    loadMusic (val) {
      console.log(val)
      this.getSongDetail(val)
      this.loadmusic()
      this.Saveing('播放歌单音乐', '如网速原因播放不了,需要再点一下,请稍候~~')
    },
    getSongDetail (id) {
      reqSongListDetail(id).then(res => {
        this.songDetailList = res.data.playlist
        const arr = []
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
        console.log(item, 'recommend')
      })
    }
  }
}
</script>

<style scoped lang="less">
.resong {
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  flex-flow: wrap;
  margin-bottom: 50px;
  h1 {
    position: absolute;
    top: -30px;
    left: 20px;
    font-size: 20px;
    margin: 5px 0 10px;
    z-index: 9;
    cursor: pointer;
  }
  .item {
    position: relative;
    width: 250px;
    overflow: hidden;
    margin: 10px 20px 0;
    .title {
      position: absolute;
      top: -20%;
      left: 0;
      width: 91.5%;
      height: 19px;
      font-size: 16px;
      line-height: 22px;
      -webkit-line-clamp : 1;
      color: #ffffff;
      background: rgba(0, 0, 0, .5);
      padding: 5px 10px;
      border-radius: 10px 10px 0 0;
    }
    .playCount {
      text-align: right;
      background: linear-gradient(to right,rgba(255, 255, 255, .01), rgba(0, 0, 0, .5))!important;
    }
    .content {
      margin: 10px 0;
    }
    img {
      width: 250px;
      height: 250px;
      border-radius: 10px;
      overflow: hidden;
    }
  }
  .play_icon {
    position: absolute;
    bottom: 70px;
    right: 15px;
    color: #FF0000;
    font-size: 50px;
  }
  .songs_top_bottom {
    animation: songs_top_bottom .5s linear forwards;
  }
}
</style>
