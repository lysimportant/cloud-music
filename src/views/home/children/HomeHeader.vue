<template>
  <div class='HomeHeader'>
     <div class="left_">

       <span class="header_icon" @click="$router.push('/home')">
         <i class="iconfont icon-wangyiyunyinle"></i>
       </span>

       <span class='history_select'>
         <el-button type="info" size="small" class="clear-icon el-icon-arrow-left" @click="go(-1)" circle></el-button>
         <el-button type="info" size="small" class="clear-icon el-icon-arrow-right" @click="go(1)" circle></el-button>
       </span>
       <span class="search">
         <input
           v-model="inputVal"
           type="text"
           @keyup.enter="searchMusic"
           placeholder="输入搜索的音乐"/>
         <i class="iconfont icon-search" @click="searchMusic"></i>
       </span>
     </div>

    <!-- 登录 -->
    <div class="login_box">

      <div class="dropdown_">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" divided>
            <!-- 二级 项目代码地址 -->
            <el-dropdown-item>
              <el-dropdown>
              <span class="el-dropdown-link">
                项目代码地址<i class="el-icon-arrow-down el-icon--right"></i><i class="dropdown_text el-icon-arrow-up"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <a href="https://gitee.com/lysimportant" target="_blank">
                      <i class="iconfont item_active  icon-mayun"></i>Gitte 仓库地址
                    </a>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="https://github.com/lysimportant" target="_blank">
                      <i class="iconfont icon-huaban88"></i>Github 仓库地址 x
                    </a>
                  </el-dropdown-item>

                  <el-dropdown-item>
                    <a href="https://blog.csdn.net/weixin_46858768?spm=1000.2115.3001.5343" target="_blank">
                      <i class="iconfont item_active icon-csdn"></i>CSDN 博客地址
                    </a>
                  </el-dropdown-item>

                </el-dropdown-menu>
              </el-dropdown>
            </el-dropdown-item>
            <!-- 二级 项目部署站点-->
            <el-dropdown-item>
              <el-dropdown divided>
              <span class="el-dropdown-link">
                项目部署站点<i class="el-icon-arrow-down el-icon--right"></i><i class="dropdown_text el-icon-arrow-up"></i>
              </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <a :style="{color: 'green'}" href="http://admin.lianghj.top" target="_blank">
                        <span>Vue_Shop 后台管理项目</span>
                      </a>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <a href="http://mall.lianghj.top" target="_blank">
                        <span>mallSuper移动端商城</span>
                      </a>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <a href="http://shop.lianghj.top" target="_blank">
                        <span>Pink品优购商城_PC</span>
                      </a>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <a href="http://myweb.lianghj.top" target="_blank">
                        <span>自作网站</span>
                      </a>
                    </el-dropdown-item>
                    <el-dropdown-item>
                    <a href="http://web.lianghj.top" target="_blank">
                      <span>模仿网站</span>
                    </a>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </el-dropdown-item>
            <!-- 二级 项目相关推荐 -->
            <el-dropdown-item>
                <el-dropdown>
              <span class="el-dropdown-link">
                项目相关推荐<i class="el-icon-arrow-down el-icon--right"></i><i class="dropdown_text el-icon-arrow-up"></i>
              </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <a href="https://neteasecloudmusicapi.vercel.app" target="_blank">
                        <span>API文档参考网址</span>
                      </a>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <a href="https://www.bilibili.com/video/BV1RE411W776?p=1" target="_blank">Bili_教程-API网络请求参考</a>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <a href="https://aplayer.netlify.app/docs/" target="_blank">APlayer播放器插件</a>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </el-dropdown-item>

          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- icon链接 -->
      <div class='icon_a'>
        <a href="https://gitee.com/lysimportant" target="_blank">
          <i class="iconfont icon-mayun"></i>
        </a>
        <a href="https://github.com/lysimportant" target="_blank">
          <i class="iconfont icon-huaban88"></i>
        </a>
      </div>
      <div class="login_text" @click='loginClick'>
        <i v-show="!userInfo.avatarUrl" class="icon-denglu iconfont"></i>
        <img  v-show="userInfo.avatarUrl" v-lazy="userInfo.avatarUrl" alt="">
        {{ userInfo.nickname ? userInfo.nickname : '登录 / 注册' }}
      </div>
      <el-switch
        v-model="asidevalue"
        @change="asideChange(asidevalue)"
        active-color="#13ce66"
        inactive-text="侧边栏"
        inactive-color="#DCDFE6">
      </el-switch>
      <el-switch
        v-model="musicvalue"
        @change="musicChange(musicvalue)"
        active-color="#13ce66"
        inactive-text="音乐栏"
        inactive-color="#DCDFE6">
      </el-switch>
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
    return {
      inputVal: '', // 输入的内容
      asidevalue: true,
      musicvalue: true
    }
  },
  methods: {
    go (index) {
      window.history.go(index)
    },
    searchMusic () {
      if (this.inputVal.trim() === '') {
        return this.$message.warning('请输入内容!')
      }
      if (this.$route.name !== 'search') {
        this.$router.push('/home/search/' + this.inputVal)
      }
      this.$bus.$emit('searchClick', this.inputVal)
      console.log(this.$root)
    },
    loginClick () {
      if (!this.userInfo.nickname) {
        this.$router.push('/login')
      }
    },
    asideChange (val) {
      val ? this.$bus.$emit('asideChange', true) : this.$bus.$emit('asideChange', false)
    },
    musicChange (val) {
      val ? this.$bus.$emit('musicChange', true) : this.$bus.$emit('musicChange', false)
    },
    Detect () {
      if (window.sessionStorage.getItem('token')) {
        if (!this.userInfo.avatarUrl) {
          this.$store.dispatch('getUserData')
        }
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted () {
    this.Detect()
  }
//   watch: {
//     'userInfo.avatarUrl': {
//       handler (newValue, oldValue) {
//         this.$store.dispatch('getUserData')
//       }
// }
//   }
}
</script>

<style scoped lang="stylus">
.iconfont
  font-size 19px
.HomeHeader
  display flex
  align-items  center
  .left_
    line-height 40px
    float left
    overflow hidden
    width 58%
    .history_select
      position relative
      top -10px
      text-align left
      margin 0 30px
      color #ccc
      overflow hidden
      .icon-arrows-r
        font-size 30px
        padding 5px
      .icon-jiantou
        font-size 30px
        padding 5px
    .header_icon
      padding  10px 15px
      .icon-wangyiyunyinle
        color red
        font-size 35px
    .search
      position: relative;
      top -5px
      left  0
      line-height 40px
      padding 10px 15px
      overflow: hidden;
      input
        padding 5px 20px
        padding-left 35px
        width 300px
        height 25px
        border-radius 20px
        border 1px solid #ccc
        background-color rgba(249, 249, 249, .3)
      .icon-search
        position absolute
        top 3px
        left 50px
        margin-left -25px
  .login_box
    float right
    width 40%
    //margin 20px
    line-height 40px
    font-size 20px
    cursor pointer
    .el-switch
      padding 20px
    div
      float right
      overflow hidden
      margin 0 5px
    .login_text
      line-height 60px
      .icon-mayun
        font-size 30px
    img
        width 50px
        height 50px
        vertical-align middle
        border-radius 50%
    .icon_a
      width 120px
      i
        display inline-block
        font-size 43px
        line-height 50px
        margin 5px 5px 0
        &:hover
          color #FF0000
      .icon-huaban88
        font-size 45px
    .dropdown_
      width 90px
      line-height 60px
      margin 0 50px 0 -20px
      .el-dropdown-link
        position relative
        top 0
        left 0
        font-size 15px
.dropdown_text
  position absolute
  top 10px
  right -25px
</style>
