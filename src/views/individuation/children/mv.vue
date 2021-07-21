<template>
  <div>
    <h1>
      <router-link to="/home/mv">
        {{ str }} <i class="iconfont icon-jiantou1"></i>
      </router-link>
    </h1>
    <div class="mv">
      <div class="mv_item"
           v-for="(item, index) in mv"
           :key="item.id"
           @mouseleave="MvMouseMove = false"
           @MvMouseMove="MvMouseMove =  index"
           @click="mvDetail(item)"
      >
        <img  v-lazy="item.picUrl" alt="" />
       <!-- 播放数量 -->
        <span class="playCount"
              v-show="MvMouseMove !==  index"
              :class="{ songs_top_bottom: MvMouseMove === index }"
        >

        <span v-if="item.playCount">
            <i class="icon-caret-right iconfont"></i>
          {{ item.playCount | ellipsisPlayVolume }}
        </span>

        <span v-else>
          <i class="el-icon-video-play"></i>
        </span>
        </span>
        <!-- 遮罩文字 -->
        <span class="write"
              v-show="MvMouseMove ===  index"
              :class="{ songs_top_bottom: MvMouseMove === index }">
          {{ item.copywriter }}
        </span>
        <!-- 歌名 -->
        <p class="text_hidden">{{ item.name }}</p>
        <!-- 作者 -->
        <address>{{ item.artistName }}</address>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mv',
  props: {
    mv: { /** @数据的显示接收 **/
      type: Array,
      default () {
        return []
      }
    },
    str: String
  },
  data () {
    return {
      MvMouseMove: '' // 记录鼠标经过离开
    }
  },
  methods: {
    mvDetail (item) {
      // 获取mv的详情数据并跳转到mv路由
      console.log(item)
      this.$store.dispatch('getMvDetail', item.id)
      this.$router.push(`/home/mvdetail/${item.id}`)
    }
  }
}
</script>

<style scoped lang="less">
@import "~assets/style/css/animation.css";
.songs_top_bottom {
  animation: songs_top_bottom .5s linear forwards;
}
.el-icon-video-play {
  font-size: 30px;
}
h1 {
  margin: 10px 0 10px 15px;
  font-size: 20px;
}
.mv {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  .text_hidden {
    -webkit-line-clamp : 1;
  }
  .mv_item {
    position: relative;
    overflow: hidden;
    width: 30%;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 250px;
      border-radius: 10px;
    }
    .playCount {
      position: absolute;
      top: 5px;
      right: 15px;
      color: #fff;
      font-size: 12px;
    }
    .write {
      position: absolute;
      top: -20%;
      display: block;
      font-size: 18px;
      height: 20px;
      width: 100%;
      border-radius:  10px 10px 0 0;
      background: rgba(0, 0, 0, .3);
    }
    p {
      margin: 10px 0;
    }
  }
}
</style>
