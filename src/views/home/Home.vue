<template>
  <div class='home'>
    <el-container>
      <el-header>
        <home-header/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <home-aside-nav-bar/>
        </el-aside>
        <el-main>
          <home-top-nav-bar></home-top-nav-bar>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from './children/HomeHeader'
import HomeAsideNavBar from './children/HomeAsideNavBar'
import HomeTopNavBar from './children/HomeTopNavBar'
export default {
  name: 'Home',
  props: {},
  components: {
    HomeHeader,
    HomeAsideNavBar,
    HomeTopNavBar
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.el-container, .home{
  height: 100%
}
.el-header {
  background-color: rgba(249, 249, 249, .5);
  box-shadow: 0 1px 1px red;
  padding: 0;
  margin-bottom: 2px;
}
.el-aside {
  /* background-color: #F9F9F9; */
  border-right: 1px solid rgba(200, 200, 200, .3);
}
.el-main {
  padding: 10px 20px;
}
</style>
