<template>
  <div class="playre">
  <div class="tar">
    <el-popover
      placement="bottom"
      trigger="hover">
      <el-button slot="reference">全部歌单 <i class="iconfont icon-jiantou1"></i></el-button>
        <ul class="classification" v-for="(items, index) in classification" :key="index">
          <li class="li_" :key="index" v-for="(item, index) in items">
            <span
              :class="[{ [item.icon]: index < 1 }, {iconfont : index < 1}]"
              @click="tarBarClick(item.name)">
              {{ item.name }}
            </span>
          </li>
        </ul>
    </el-popover>

        <ul class="tab-bar">
          <li class="item"
              :class="{item_active: songPlayList.cat === item}"
              v-for="(item, index) in TabBar"
              @click="tarBarClick(item)"
              :key="index"
          > {{ item }}</li>
        </ul>
      </div>
  <!--    歌单列表-->
      <ul class="items">
        <li class="item_list"
            v-for="(item, index) in list"
            @mouseleave="PlayMove = false"
            @mousemove="PlayMove = index"
            @click="itemClick(item)"
            :key="item.id">
          <img  v-lazy="item.coverImgUrl" alt="">

         <div v-show="PlayMove === index">
           <div
             class="playCount"
             :class="{ songs_top_bottom: PlayMove === index }"
           >
             <i class="iconfont icon-caret-right"></i>
             {{ item.playCount | ellipsisPlayVolume }}
           </div>
           <i class="iconfont play_icon icon-bofang"></i>
         </div>
          <div class="text_hidden">{{ item.name }}</div>
        </li>
      </ul>
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        :current-page="songPlayList.num"
        :page-sizes="[10, 15, 30, 100]"
        :page-size="songPlayList.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="songPlayList.total"
      >
      </el-pagination>
  </div>
</template>

<script>
import {
  reqRecommendPlayList,
  reqPlayTag
} from '@/api/songPlayList'
export default {
  name: 'PlayRecommend',
  data () {
    return {
      TabBar: ['全部', '粤语', 'ACG', '华语', '流行', '欧美', '说唱', '摇滚', '民谣', '电子', '轻音乐', '影视原声', '怀旧'],
      PlayMove: '',
      list: [], /** @歌单数据 **/
      songPlayList: {
        total: 0, /** @总页数 **/
        num: 1, /** @当前显示的页数 **/
        cat: '全部', /** @显示的类型 **/
        size: 10, /** @当前页显示的数据 **/
        offset: 0 /** @分页数据的显示 **/
      },
      classification: {
        language: [],
        style: [],
        scenes: [],
        emotion: [],
        theme: []
      }
    }
  },
  async created () {
    this.getPlayList()
    const { data: res } = await reqPlayTag()
    res.sub.find(item => {
      if ( item.category === 0 ) {
        this.classification.language.push(item)
      } else if ( item.category === 1 ) {
        this.classification.style.push(item)

      } else if ( item.category === 2 ) {
        this.classification.scenes.push(item)
      } else if ( item.category === 3 ) {
        this.classification.emotion.push(item)
      } else if ( item.category === 4 ) {
        this.classification.theme.push(item)
      }
    })
    this.classification.language.unshift({name: '语言', icon: 'icon-diqiu'})
    this.classification.style.unshift({name: '风格', icon: 'icon-fengge'})
    this.classification.scenes.unshift({name: '场景', icon: 'icon-kafei'})
    this.classification.emotion.unshift({name: '情感', icon: 'icon-smile'})
    this.classification.theme.unshift({name: '主题', icon: 'icon-zhuti'})
    console.log(this.classification.style)
    console.log(this.classification)
  },
  methods: {
    tarBarClick (item) {
      this.songPlayList.cat = item
      this.songPlayList.num = 1
      this.getPlayList()
      this.$emit('tarclick', item)
    },
    async getPlayList () {
      const { data: res } = await reqRecommendPlayList(
        this.songPlayList.offset,
        this.songPlayList.size,
        this.songPlayList.cat
      )
      this.list = res.playlists
      this.songPlayList.total = res.total
      this.songPlayList.cat = res.cat
      console.log(res)
    },
    itemClick (e) {
      console.log(e.id)
      window.sessionStorage.setItem('id', e.id)
      this.$router.push(`/home/detail/${e.id}`)
    },
    // 分页数据改变
    handleSizeChange (val) {
      this.songPlayList.size = val
      this.getPlayList()
    },
    handleCurrentChange (val) {
      this.songPlayList.num = val
      this.songPlayList.offset = (val - 1) * this.songPlayList.size
      this.getPlayList()
    }
  }
}
</script>

<style scoped lang="less">
.tar {
  width: 100%;
  height: 40px;
}
.tab-bar {
  float: right;
  margin: 10px 0;
  overflow: hidden;
}
.tab-bar .item {
  margin: 10px 10px;
  float: left;
}
/**
  歌单列表
**/
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0 100px;
}
.items .item_list {
  position: relative;
  top: 0;
  left: 0;
  width: 200px;
  height: 250px;
  margin:  10px 25px 0;
  overflow: hidden;
}
.items .item_list img {
  width: 200px;
  height: 200px;
  border-radius: 10px;
}
.playCount {
  position: absolute;
  top: -20%;
  right: 0;
  width: 100%;
  padding: 3px 10px;
  color: #FFFFFF;
  text-align: right;
  background: linear-gradient(to right,rgba(255, 255, 255, .01), rgba(0, 0, 0, .5))!important;

}
.play_icon {
  position: absolute;
  bottom: 70px;
  right: 15px;
  color: #FF0000;
  font-size: 50px;
}
.el-pagination {
  position: relative;
  top: -115px;
}
.li_ {
  display: inline-block;
  margin: 5px 5px;
}

.li_:nth-child(n+2) {
  margin: 20px 10px;
  &:hover {
    color: #FF0000;
  }
  span {
    border: 1px solid #cccccc;
    padding: 5px;
    margin: 5px 0;
  }

}
.classification {
  width: 800px;
}
.el-button {
  margin: 10px 15px;
}
.icon-jiantou1 {
  font-size: 12px;
}
</style>
