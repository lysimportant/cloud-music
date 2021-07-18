<template>
  <div class="mv_index">
    <!--      地区选择-->
    <div class="order">
      <ul class="order_head">
        <li><span>地区:</span></li>
        <li v-for="(item, index) in TarBar.TarBarArea"
            :key="index" @click="PickClick(item, queryInfo.type, queryInfo.order)"
            :class="{item_active: queryInfo.area === item}">
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
    <!--      类型选择-->
    <div class="order">
      <ul class="order_head">
        <li><span>类型:</span></li>
        <li v-for="(item, index) in TarBar.TarBarType"
            :key="index" @click="PickClick(queryInfo.area, item, queryInfo.order)"
            :class="{item_active: queryInfo.type === item}">
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
<!--    排序选择-->
    <div class="order">
      <ul class="order_head">
        <li><span>排序:</span></li>
        <li v-for="(item, index) in TarBar.TarBarOrder"
            :key="index" @click="PickClick(queryInfo.area, queryInfo.type, item)"
            :class="{item_active: queryInfo.order === item}">
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

<!--    mv列表-->
    <div class="items">
      <div class="item"
           v-for="(item, index) in list"
           :key="item.id"
           @click="mvItmeClick(item)"
      >
        <img  v-lazy="item.cover" alt="">
<!--        播放数量-->
        <div class="playCount">
          <span>
            <i class="iconfont icon-caret-right"></i>
            {{ item.playCount | ellipsisPlayVolume }}
          </span>
        </div>
<!--        基本信息-->
        <div class="info">
          <div class="title text_hidden">
            {{ item.name }}
          </div>
          <div class="author">
            <address>{{ item.artistName }}</address>
          </div>
        </div>
      </div>
    </div>
<!--    分页器-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      :current-page="queryInfo.num"
      :page-sizes="[8, 12, 16, 20]"
      :page-size="queryInfo.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="queryInfo.total">
    </el-pagination>
  </div>
</template>

<script>
import { reqAllMv } from '@/api/reqMv'
export default {
  name: 'mvIndex',
  data () {
    return {
      // 导航
      TarBar: {
        TarBarArea: ['全部', '内地', '港台', '欧美', '日本', '韩国'],
        TarBarType: ['全部', '官方版', '原生', '现场版', '网易出品'],
        TarBarOrder: ['上升最快', '最热', '最新']
      },
      list: [], /** @存放数据体 **/
      /** @请求数据体 **/
      queryInfo: {
        area: '全部', /** @类型 **/
        type: '全部', /** @类型 **/
        order: '最热', /** @类型 **/
        limit: 8, /** @当前页显示的数据 **/
        offset: 0, /** @分页数据 **/
        total: 0, /** @总条数 **/
        num: 1 /** @当前页数 **/
      }
    }
  },
  methods: {
    mvItmeClick (item) {
      console.log(item)
      this.$router.push(`/home/mvdetail/${item.id}`)
    },
    // 分类获取数据
    PickClick (area, type, order) {
      this.queryInfo.offset = 1
      this.queryInfo.num = 1
      this.queryInfo.area = area
      this.queryInfo.type = type
      this.queryInfo.order = order
      console.log(this.queryInfo)
      this.getMvAll()
    },
    // 获取 mv数据
    getMvAll () {
      reqAllMv(this.queryInfo).then(res => {
        // 接口问题需要做判断
        if (res.data.count) {
          this.queryInfo.total = res.data.count
        }
        this.list = res.data.data
      })
    },
    // 分页改变
    handleSizeChange (val) {
      this.queryInfo.limit = val
      this.getMvAll()
    },
    handleCurrentChange (val) {
      this.queryInfo.num = val
      this.queryInfo.offset = (val - 1) * this.queryInfo.limit
      this.getMvAll()
    }
  },
  created () { // 组件创建发送网络请求
    this.getMvAll()
  }
}
</script>

<style scoped>
/*
  排序
*/
.order {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin: 10px 0;
}
.order_head {
  display: block;
}
.order_head li {
  float: left;
  margin: 0 20px;
}
/*
  mv列表
*/
.items {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item {
  position: relative;
  top: 0;
  left: 0;
  width: 23%;
  margin: 10px 0;
  overflow: hidden;
}
.item img {
  width: 100%;
  border-radius: 15px;
}
.playCount {
  position: absolute;
  top: 0;
  width: 100%;
  color: #FFFFFF;
  height: 20px;
  line-height: 20px;
  border-radius: 15px 15px 0 0;
  text-align: right;
  background: linear-gradient(to right,rgba(255, 255, 255, .01), rgba(0, 0, 0, .5))!important;
}
.playCount span {
  margin: 2px 15px;
}
.text_hidden {
  margin: 5px 0 0;
  -webkit-line-clamp: 1
}
.author {
  margin: 5px 0 0;
}
</style>
