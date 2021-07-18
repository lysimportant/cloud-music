<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    open () {
      this.$notify({
        title: '主域名项目已换为某易云音乐',
        type: 'success',
        dangerouslyUseHTMLString: true,
        message: '<strong>Shop后台管理项目链接: <i><a style="color: red" href="http://admin.lianghj.top" target="_blank">点击跳转 </a></i> 或查看 <i style="color: red">下拉菜单-></i> 项目地址 </strong>',
        offset: 100,
        duration: 0
      })
    }
  },
  mounted () {
    this.open()
  },
  created () {

  }
}
</script>

<style>
</style>
