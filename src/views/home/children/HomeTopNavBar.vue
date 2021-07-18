<template>
<div class="homenav">
   <div>
      <router-link to="/home/individuation">个性推荐</router-link>
   </div>
   <div>
    <span>
      <router-link to="/home/playlist">歌单推荐</router-link>
    </span>
   </div>
   <div>
    <span>
      <router-link to="/home/songs">最新音乐</router-link>
    </span>
   </div>
  <div>
    <span>
      <router-link to="/home/mv">最新mv</router-link>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeTopNavBar'
}
</script>

<style scoped lang="less">
.homenav {
  position: fixed;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 30px;
  background-color: #FFF;
  z-index: 999;
  // margin-bottom: 40px;
  margin-left: -100px;
  div {
    margin: 0 25px;
    text-align: center;
    width: 100px;
      a {
        display: inline-block;
        width: 100%;
        color: #000;
    }
  }
}
.router-link-exact-active {
  border-bottom: 3px solid #FF0000;
}

</style>
