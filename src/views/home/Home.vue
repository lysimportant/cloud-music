<template>
    <el-container>
      <el-header>
        <home-header/>
      </el-header>
      <el-container>
        <el-aside
          width="200px"
          :class="{ aside_hide: !asideIsActive }"
        >
          <home-aside-nav-bar/>
        </el-aside>
        <el-main>
          <!-- <home-top-nav-bar v-show="$route.meta.noTopNav !== true"/> -->
<!--          <keep-alive exclude=/detailIndex, mvIndex/>-->
            <router-view />
<!--          </keep-alive>-->
        </el-main>
        <play-music  />
      </el-container>
    </el-container>
</template>

<script>
import HomeHeader from './children/HomeHeader'
import HomeAsideNavBar from './children/HomeAsideNavBar'
import HomeTopNavBar from './children/HomeTopNavBar'

import PlayMusic from '@/views/playmusic/PlayMusic'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeAsideNavBar,
    HomeTopNavBar,
    PlayMusic
  },
  mounted () {
    this.$bus.$on('asideChange', val => {
      console.log(val)
      this.asideIsActive = val
    })
  },
  data () {
    return {
      asideIsActive: true
    }
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
  overflow: hidden;
}
.el-header {
  background-color: rgba(249, 249, 249, .5);
  box-shadow: 0 1px 1px red;
  padding: 0;
  max-height: 50px;
  min-height: 48px;
  margin-bottom: 2px;
}
.el-aside {
   /*background-color: #F9F9F9;*/
  transition: all .3s;
  border-right: 1px solid rgba(200, 200, 200, .3);
}
.el-main {
  position: relative;
  padding:  0 100px 10px;
}
.aside_hide {
  transform: rotateY(90deg);
  width: 0px !important;
}

</style>
