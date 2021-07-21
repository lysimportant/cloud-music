<template>
  <div>

    <h3>
      <router-link to="/home/songs"> 最新音乐 <i class="iconfont icon-jiantou1"></i> </router-link>
    </h3>

    <div class="newSong">
      <div class="rsitem"
           @click=playMusic(item)
           v-for="(item, index) in newSongs"
           :key="item.id"
           @mousemove="isShow = index"
           @mouseleave="isShow = false"
      >
        <img  v-lazy="item.picUrl" alt="">
        <div class="new_name">{{ item.name }}</div>
        <div class="new_author">{{ item.song.artists[0].name }}</div>
        <i v-show="isShow === index" class="iconfont play_icon icon-bofang"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewSongs',
  props: {
    newSongs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style scpoed lang="less">
h3 {
  margin: 0 0 10px 15px;
  font-size: 20px;
  cursor: pointer;
}
.newSong {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

}
.rsitem {
  width: 30%;
  margin: 10px 20px 10px 30px;
  position: relative;
  overflow: hidden;
  .new_name {
    position: absolute;
    left: 120px;
    top: 20px;
    font-size: 18px;
  }
  .play_icon {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 50px;
    color: #FF0000;
  }
  .new_author {
    position: absolute;
    left: 120px;
    bottom: 20px;
    font-size: 16px;
    color: gray;
  }
  img {
    vertical-align: middle;
    width: 100px;
    border-radius: 10px;
  }
}
</style>
