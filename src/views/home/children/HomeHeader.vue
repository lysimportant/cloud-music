<template>
  <div class='HomeHeader'>
    <!-- 导航 -->

    <ul>
      <li @click="$router.push('/home')">
        <i class="iconfont icon-wangyiyunyinle"></i>
      </li>
      <li>
        <el-button type="info" size="small" class="clear-icon el-icon-arrow-left" @click="go(-1)" circle></el-button>
        <el-button type="info" size="small" class="clear-icon el-icon-arrow-right" @click="go(1)" circle></el-button>
      </li>
      <li>
        <input
          v-model="inputVal"
          type="text"
          @keyup.enter="searchMusic"
          placeholder="输入搜索的音乐"/>
        <i class="iconfont icon-search" @click="searchMusic"></i>
      </li>
    </ul>

    <!--  登录  -->
    <ol>
      <li>
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
        <el-switch
          v-model="miniValue"
          @change="miniChange(miniValue)"
          active-color="#13ce66"
          inactive-text="mini音乐栏"
          inactive-color="#DCDFE6">
        </el-switch>
      </li>
      <li  @click='loginClick'>
        <span>
          <i v-show="!userInfo.avatarUrl" class="icon-denglu iconfont"></i>
        <img  v-show="userInfo.avatarUrl" v-lazy="userInfo.avatarUrl" alt="">
        {{ userInfo.nickname ? userInfo.nickname : '登录 / 注册' }}
        </span>
      </li>
      <!--      icon跳转  -->
      <li>
        <a href="https://gitee.com/lysimportant" target="_blank">
          <i class="iconfont icon-mayun"></i>
        </a>
        <a href="https://github.com/lysimportant" target="_blank">
          <i class="iconfont icon-huaban88"></i>
        </a>
      </li>
<!--      下拉菜单  -->
      <li>
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
      </li>

    </ol>
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
      musicvalue: true,
      miniValue: false
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
      this.$bus.$emit('musicChange', val)
    },
    miniChange (val) {
      this.$bus.$emit('miniChange', val)
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
.HomeHeader
  box-sizing border-box
  overflow hidden
  /* left 新的样式*/
  ul
    display inline-block
    max-height 50px!important
    max-width  750px!important
    li
      float left
      max-height 50px!important
      &:first-child
        line-height 50px
        i
          color #FF0000
          font-size 35px
          margin 0 10px
      &:nth-child(2)
        margin 10px
        .el-button
          margin auto 10px
      &:last-child
        margin 0 10px 10px
        input
          border 1px solid #cccccc
          margin 10px
          border-radius 20px
          padding-left 30px
          width 300px
          height 28px
        i
          margin-left -91%

  /*right 新样式*/
  ol
    float right
    margin-right 50px
    max-height 50px!important
    max-width  750px!important
    li
      float left
      //display inline-block
      max-height 50px!important
      font-size 20px
      line-height 50px;
      margin 0 10px
      &:first-child
        .el-switch
          margin 0 5px
      &:nth-child(2)
        font-size 20px
      &:nth-child(3)
        i
          margin 5px
          font-size 35px
          &:hover
            color #FF0000
      &:last-child
        span
          font-size 16px
          font-weight 600

</style>
