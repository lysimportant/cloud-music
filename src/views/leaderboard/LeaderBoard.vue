<template>
  <div class="privateContent">
<!--    排行榜-->
    <div class="pxbs">
      <h1>官方榜</h1>
      <div class="pxb" v-for="(item, index) in TopList" :key="index">
        <span @click="itemClick (item)">
          <i :style="{ position: 'absolute'}" class="iconfont play_icon icon-bofang"></i>
          <img v-lazy="item.coverImgUrl" alt="">
          <span class="text_pxb">{{ item.updateFrequency }}</span>
        </span>
        <ul>
          <li @click="playMusic(songItem)" v-for="(songItem, index) in NavTopList[index]" :key="index">
            <span :style="{ margin: '0 5px'}" :class="{ item_active: index + 1 < 4 }"> {{ index + 1 }} </span>
            <span> {{ songItem.name }} </span>
            <span v-show="songItem.alia[0]" :style="{ color: 'gray'}">( {{ songItem.alia[0] }} )</span>
            <span :style="{ color: 'gray', float: 'right', marginRight: '5px'}" v-for="(authors, index) in songItem.ar" :key="index">
               {{ authors.name }}
            </span>
          </li>
        </ul>
        <span @click="itemClick(item)" :style="{ margin: '20px 0 0 225px', cursor: 'pointer'}">查看全部
          <i :style="{ fontSize: '12px'}" class="iconfont icon-jiantou1"></i></span>
      </div>

    </div>
    <!--  歌手榜 -->
    <div class="pxb">
        <span @click="$router.push('/home/singerleaderboard')">
          <i class="image_bg"></i>
          <span class="text_bg">歌手榜</span>
          <img v-show="singer[0].picUrl" v-lazy="singer[0].img1v1Url" alt="">
        </span>
      <ul>
        <li @click="singerClick(singerItem)" v-for="(singerItem, index) in singer" :key="index">
          <span :style="{ margin: '0 5px'}" :class="{ item_active: index + 1 < 4 }"> {{ index + 1 }} </span>
          <span> {{ singerItem.name }} </span>
        </li>
      </ul>
      <span @click="$router.push('/home/singerleaderboard')" :style="{ margin: '20px 0 0 225px', cursor: 'pointer'}">查看全部
          <i :style="{ fontSize: '12px'}" class="iconfont icon-jiantou1"></i></span>
    </div>
    <!--  全球榜-->
    <div class="global">
      <div class="globalItme" @click="itemClick(item)" v-for="(item, index) in globalList" :key="index">
        <div class="img-wrap">
          <img v-lazy="item.coverImgUrl" alt="">
          <i class="iconfont playCOunt icon-bofang"></i>
          <span class="playcount">
            <i class="iconfont icon-caret-right"></i>
            {{ item.playCount | ellipsisPlayVolume }}
          </span>
        </div>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>

</template>

<script>
import {
  reqTopListDetail,
  reqTopSinger
} from '@/api/songPlayList'
import { reqSongListDetail } from '@/api/discover'
export default {
  name: 'LeaderBoard',
  data () {
    return {
      TopList: [], // 歌曲排行榜
      NavTopList: [], // 前几排行榜
      globalList: [], // 全球榜
      singer: [] // 歌手榜
    }
  },
  async created () {
    const { data: res } = await reqTopListDetail()
    // console.log(res)
    this.globalList = res.list.slice(4 ,res.list.length)
    this.TopList = res.list.slice(0, 4)
    this.TopList.map(async item => {
      const { data: { playlist: res } } = await reqSongListDetail(item.id)
      this.NavTopList.push(res.tracks.slice(0, 5))
    })
    const { data: resSinger } = await reqTopSinger()
    this.singer = resSinger.list.artists.slice(0 , 5)
    console.log(this.singer)
  },
  methods: {
    // 进入歌单详情
    itemClick (item) {
      window.sessionStorage.setItem('id', item.id)
      this.$router.push(`/home/detail/${item.id}`)
    },
    // 点击歌手进入歌手详情
    singerClick (item) {
      window.sessionStorage.setItem('singerId', item.id)
      this.$router.push('/home/singerdetail')
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 10px 0;
}
.pxb {
  max-height: 200px;
}
.pxb {
  position: relative;
  top: 0;
  left: 0;
  max-height: 100%;
  margin: 10px 0 20px;
  overflow: hidden;
}
.pxb img {
  height: 200PX;
}
.pxb ul {
  display: inline-block;
  margin-left: 20px;
  width: 85%;
  height: 100%;
}
.pxb ul li {
  /*display: inline-block;*/
  width: 100%;
  height: 45px;
  line-height: 40px;
}
.pxb ul li:hover {
  background: rgba(159, 159, 159, .2);
}
.play_icon {
  position: absolute;
  top: 75px;
  left: 75px;
  color: #FF0000;
  display: none;
}
.pxb span:hover .play_icon {
  display: block!important;
}
/*
 排行榜end
 */
.globalItme {
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
  margin: 10px 25px;
}
.globalItme .img-wrap img {
  cursor: pointer;
  width: 200px;
  border-radius: 10px
}
.globalItme span {
  cursor: pointer;
  margin: 10px 0;
}
.globalItme .img-wrap .playcount {
  position: absolute;
  top: 0;
  right: 5px;
  color: #FFFFFF;
}
.globalItme .img-wrap .playCOunt {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FF0000;
  display: none;
}
.globalItme .img-wrap:hover .playCOunt {
  display: block;
}
.image_bg {
  position: absolute;
  z-index: 9;
  text-align: center;
  width: 200px;
  height: 207px;
  display: block;
  cursor: pointer;
  background: rgba(128, 0, 128, .5)
}
.text_bg {
  position: absolute;
  top: 80px;
  left: 50px;
  font-size: 30px;
  color: #FFFFFF;
  z-index: 999;
  cursor: pointer;
}
.text_pxb {
  position: absolute;
  bottom: 50px;
  left: 60px;
  font-size: 18px;
  color: #FFFFFF;
  z-index: 999;
}
</style>
