<template>
  <div class='asidenav'>
    <el-menu
    router
    active-text-color	= 'red'
    default-active='/home/individuation'
    >
      <el-menu-item :index="item.path" v-for="(item,index) in navMenu">
        <template slot="title">
          {{ item.menu }}
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'HomeAsideNavBar',
  data () {
    return {
      navMenu: [
        {menu: '个性推荐', path: '/home/individuation'},
        {menu: '歌单推荐', path: '/home/playlist'},
        {menu: '最新音乐', path: '/home/songs'}
      ]
    }
  }
}
</script>

<style scoped>
</style>
