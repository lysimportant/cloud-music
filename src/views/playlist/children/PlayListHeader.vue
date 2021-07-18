<template>
  <header>
    <div class="header">
      <img  v-lazy="TopData.coverImgUrl" alt="" class="bg">
      <div class="img_box">
        <img  v-lazy="TopData.coverImgUrl" alt="">
      </div>
      <div class="userinfo">
        <div class="tag">
          <span><i class="iconfont icon-V"></i>精品歌单</span>
        </div>
        <div class="title">
          {{ TopData.name }}
        </div>
        <div class="info">
          {{ TopData.copywriter }}
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PlayListHeader',
  props: {
    TopData: {
      type: Object,
      default () { return {} }
    }
  }
}
</script>

<style scoped>
header {
  position: relative;
  top: 0;
  display: flex;
  /* margin-top: 10px; */
  width: 100%;
  height: 200px;
  overflow: hidden;
}
header .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  filter: blur(50px);
  z-index: 0;
}

.header .img_box img {
  margin: 20px;
  width: 160px;
  height: 160px;
}
.userinfo {
  width: 100%;
  height: 100%;
  left: 200px;
}
.img_box, .userinfo {
  position: absolute;
  background: rgba(0, 0, 0, .3);
  top: 0;
}
.userinfo .tag {
  margin: 30px 0;
}
.userinfo .tag span {
  padding: 5px;
  color: #FFC063;
  border-radius: 10px;
  border: 2px solid #FFC063;
}
.userinfo .tag span i {
  padding:  0 5px;
}
.userinfo .title {
  margin: 15px 0;
  color: #fff;
}
.userinfo .info {
  margin: 10px 0 0;
  color: gray;
  font-size: 16px;
}
</style>
