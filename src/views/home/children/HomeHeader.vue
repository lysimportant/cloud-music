<template>
  <div class='HomeHeader'>
    <div class="header_icon">
      <i class="iconfont icon-wangyiyunyinle"></i>
    </div>
    <div class='history_select'>
      <i class="iconfont icon-arrows-r"></i>
      <i class="iconfont icon-jiantou"></i>
    </div>
    <div class="search">
      <input type="text" placeholder="输入搜索的音乐">
      <i class="iconfont icon-search" @click="searchMusic"></i>
    </div>
    <!-- 登录 -->
    <div class="login_box">
      <span @click='logunClick'>
        <i v-show="!userInfo.avatarUrl" class="icon-denglu iconfont"></i>
      <img :src="userInfo.avatarUrl" alt="">
       {{ userInfo.nickname ? userInfo.nickname : '登录 / 注册' }}
      </span>
      <!-- icon链接 -->
      <span class='icon_a'>
        <a href="https://gitee.com/lysimportant" target="_blank">
          <i class="iconfont icon-mayun"></i>
        </a>
        <a href="https://github.com/lysimportant" target="_blank">
         <i class="iconfont icon-huaban88"></i>
        </a>
      </span>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  props: {},
  components: {},
  data () {
    return {}
  },
  methods: {
    searchMusic () {
      console.log('searchMusic')
    },
    logunClick () {
      if (!this.userInfo.nickname) {
        this.$router.push('/login')
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style scoped lang="stylus">
.iconfont
  font-size 19px
.HomeHeader
  display flex
  align-items center
  font-size 20px
  .history_select
    padding 10px 15px
    color #ccc
    .icon-arrows-r
      font-size 30px
      padding 5px
    .icon-jiantou
      font-size 30px
      padding 5px
  .header_icon
    display inline-block
    padding  10px 15px
    .icon-wangyiyunyinle
      color red
      font-size 35px
  .search
    padding 10px 15px
    input
      padding 5px 10px
      width 300px
      height 25px
      border-radius 20px
      border 1px solid #ccc
      background-color rgba(249, 249, 249, .3)
    .icon-search
      position absolute
      top 17px
      margin-left -25px
  .login_box
    position absolute
    right 200px
    span
      margin-left 35px!important
      img
        wdith 40px
        height 40px
        vertical-align: middle;
        border-radius 50%
    .icon_a
      position absolute
      //top 5px
      margin 0 20px
      .icon-mayun
        font-size 40px
        color black
        &:hover
          color red
      .icon-huaban88
        color black
        padding 0 10px
        font-size 41px
        &:hover
          color #0085A1
</style>
