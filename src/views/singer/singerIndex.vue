<template>
  <div class="singerIndex">
    <div class="navBar">
<!--  地区   -->
      <ul>
        <li><span> 语种: </span></li>
        <li
          v-for="(item, index) in navBar.area"
          :key="index"
          @click="areaChange(item)"
        >
          <span :class="{item_active: item.name === area_}" >
            {{ item.name }}
          </span>
        </li>
      </ul>
      <!--  分类   -->
      <ul>
        <li><span> 分类: </span></li>
        <li
          v-for="(item, index) in navBar.type"
          :key="index"
          @click="sortChange(item)"
        >
          <span :class="{item_active: item.name === type_}" >
            {{ item.name }}
          </span>
        </li>
      </ul>
<!--  筛选    -->
      <ul>
        <li><span> 筛选: </span></li>
        <li
          v-for="(item, index) in initial"
          :key="index"
          @click="initialChange(item)"
        >
          <span :class="{item_active: item === initial_}"> {{ item }} </span>
        </li>
      </ul>
    </div>
<!--  歌手榜  -->
    <div class="item" v-show="type_ === '全部' && initial_ === '热门'">
      <div @click="$router.push('/home/singerleaderboard')">
        <div class="info-wrap">
          <i class="image_bg"></i>
          <span class="text_bg">歌手榜</span>
          <img v-lazy="artists[0].img1v1Url" alt="">
          <div class="name">
            <span :style="{cursor: 'pointer'}">歌手排行榜 <i class="iconfont icon-jiantou1"></i> </span></div>
        </div>
      </div>
    </div>
<!-- 歌手   -->
    <div
      class="item" v-for="(item, index) in artists"
      :key="index"
      @click="singerDetailJump(item)"
    >
     <div class="info-wrap">
       <img v-lazy="item.img1v1Url" alt="">
       <div><span>{{ item.name }}</span></div>
     </div>
    </div>
   <div class="nav">
     <el-pagination
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
       :current-page="num"
       :page-sizes="[30, 50, 80, 100]"
       :page-size="size"
       layout="sizes, prev, pager, next, jumper"
       background
       :total="950">
     </el-pagination>
   </div>
  </div>
</template>

<script>
import { reqSingerClassification } from '@/api/singer'

export default {
  name: 'singerIndex',
  data () {
    return {
      navBar: {
        area: [
          {name: '全部', id: -1},
          {name: '华语', id: 7},
          {name: '欧美', id: 96},
          {name: '日本', id: 8},
          {name: '韩国', id: 16},
          {name: '其他', id: 0}],
        type:[
          {name: '全部', id: -1},
          {name: '男歌手', id: 1},
          {name: '女歌手', id: 2},
          {name: '乐队组合', id: 3}],
      },
      initial: ['热门', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'],
      queryInfo: {
        type: -1,
        area: -1,
        limit: 30,
        offset: 0,
        initial: -1
      },
      type_: '全部',
      area_: '全部',
      initial_: '热门',
      artists: [], // axios返回的歌手数据
      num: 1,
      size: 0
    }
  },
  async created () {
    this.getSingerInfo()
  },
  methods: {
    async getSingerInfo () {
      const { data: res } = await reqSingerClassification(this.queryInfo)
      this.artists = res.artists
      this.num = 1
      console.log(res)
    },
    areaChange (item) {
      this.num = 1

      this.queryInfo.area = item.id
      this.area_ = item.name
      console.log(item, this.queryInfo)
      this.getSingerInfo()
      this.num = 1

    },
    sortChange (item) {
      this.queryInfo.type = item.id
      this.type_ = item.name
      console.log(item, this.queryInfo)
      this.getSingerInfo()
      this.num = 1

    },
    initialChange (item) {
      this.queryInfo.initial = item
      this.initial_ = item
      console.log(item, this.queryInfo)
      this.getSingerInfo()
      this.num = 1

    },
    singerDetailJump (item) {
      window.sessionStorage.setItem('singerId', item.id)
      this.$router.push('/home/singerdetail')
      console.log(item)
    },
    handleSizeChange (val) {
      this.queryInfo.limit = val
      this.getSingerInfo()
    },
    handleCurrentChange (val) {
      console.log(val)
      this.queryInfo.offset = (val -1 ) * this.queryInfo.limit
      this.getSingerInfo()
    }
  }
}
</script>

<style scoped lang="less">
.navBar {
  ul {
    margin: 20px 0 10px;
    overflow: hidden;
    li {
      float: left;
      margin: 0 10px;
    }
  }
}
.item {
  position: relative;
  top: 0;
  display: inline-block;
  width: 200px;
  margin: 20px 20px 5px;
 .info-wrap {
   //margin-left: 35px;
   img {
     width: 200px;
     border-radius: 5px;
   }
   div {
     margin: 5px 0 3px;
   }
 }
}
.image_bg {
  position: absolute;
  z-index: 9;
  text-align: center;
  width: 200px;
  height: 207px;
  display: block;
  cursor: pointer;
  background: rgba(128, 0, 128, .9)
}
.text_bg {
  position: absolute;
  top: 80px;
  left: 50px;
  font-size: 30px;
  color: #FFFFFF;
  z-index: 999;
  cursor: pointer;
}
.name {
  position: relative;
  top: 5px;
}
.nav{
  margin-bottom: 100px;
}
</style>
