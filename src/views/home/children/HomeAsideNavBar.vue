<template>
  <div class='asidenav'>
    <el-menu
    router
    active-text-color	= 'red'
    default-active='/home/individuation'
    >
      <el-menu-item :index="item.path" :key="index" v-for="(item,index) in navMenu">
        <template slot="title">
         <i class="iconfont" :class="item.icon"></i> {{ item.menu }}
        </template>
      </el-menu-item>
    </el-menu>
    <div class="author">
        <a href="https://www.bookbook.cc/views/About/author.html" target="blank">
          <el-tooltip class="item" effect="dark" placement="top">
            <div slot="content">
              如果你有什么奇怪的想法或者疑惑都可以联系我<br />
              希望我能帮助到你。<br />
              WeChat：lhj1415797580<br />
              QQ：1415797580
            </div>
            <img src="~assets/image/wx.jpg" alt="" />
          </el-tooltip>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAsideNavBar',
  data () {
    return {
      navMenu: [
        { menu: '个性推荐', path: '/home/individuation', icon: 'icon-airec-zhinengtuijian' },
        { menu: '歌单推荐', path: '/home/playlist',icon: 'icon-gedan' },
        { menu: '最新音乐', path: '/home/songs', icon: 'icon-yinyue'  },
        { menu: '最新mv', path: '/home/mv', icon: 'icon-MV'  },
        { menu: '排行榜', path: '/home/leaderboard', icon: 'icon-paihang'  }
      ]
    }
  }
}
</script>

<style scoped>
.el-menu-item {
  font-size: 16px;
}
.author {
  width: 100%;
}
img {
  position: absolute;
  bottom: 100px;
  width: 200px;
}
</style>
