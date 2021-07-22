<template>
  <div class="search">
<!--    头部-->
    <div class="title">
      <h1> {{ searchQueryInfo.keywords }}</h1>
      <span v-show="activeName === 'songs'">共找到 {{ songData.total }} 个结果</span>
      <span v-show="activeName === 'lists'">共找到 {{ songDataList.total }} 个结果</span>
      <span v-show="activeName === 'mv'">共找到 {{ MvData.total }} 个结果</span>
    </div>
<!--    选择导航-->
    <el-tabs v-model="activeName" @tab-click="handleClick(activeName)">
<!--      歌曲的显示-->
      <el-tab-pane label="歌曲" name="songs">
        <el-table
          :data="songData.list"
          stripe
          style="width: 100%"
          @row-click="playMusic"
        >
          <el-table-column label="#" type="index">
          </el-table-column>
          <el-table-column
            label="音乐标题"
            prop="name">
            <template v-slot="scope">
              <span>{{ scope.row.name }}</span>
              <el-tooltip
                class="item"
                effect="dark"
                content="添加到播放列表"
                placement="top">
                <span @click="playMusic" :style="{margin: '0 10px', color: 'red'}" class="iconfont icon-tianjia"></span>
              </el-tooltip>
              <span v-if="scope.row.alias.length !== 0 ">{{ scope.row.alias[0] }}</span>
            </template>
          </el-table-column>
          <el-table-column
          label="歌手"
          prop="artists[0].name"
          ></el-table-column>
          <el-table-column label="专辑" prop="album.name"></el-table-column>
          <el-table-column label="时长">
            <template v-slot="scope">
              {{ scope.row.duration | formatDuration }}
            </template>
          </el-table-column>
        </el-table>
        <search-pagintion
          :num="num"
          :limit="searchQueryInfo.limit"
          :total="songData.total"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        />
      </el-tab-pane>
<!--      歌单的显示-->
      <el-tab-pane label="歌单" name="lists">
          <recommend-song :recommend-songs="songDataList.list"/>
        <search-pagintion
          :num="num"
          :limit="searchQueryInfo.limit"
          :total="songDataList.total"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        />
      </el-tab-pane>
<!--      mv的显示-->
      <el-tab-pane label="MV" name="mv">
       <div class="mva">
         <div class="items" >
           <div class="item" v-for="(item, index) in MvData.list" :key="item.id">
             <img  v-lazy="item.cover" alt="">
             <!--        播放数量-->
             <div class="playCount">
              <span>
                <i class="iconfont icon-caret-right"></i>
                {{ item.playCount | ellipsisPlayVolume }}
              </span>
             </div>
             <!-- 时间 -->
             <span class="time">{{ item.duration | formatDuration }}</span>
             <!-- 信息 -->
             <div class="info-wrap">
               <div class="name">{{ item.name }}</div>
               <address>{{ item.artistName }}</address>
             </div>
           </div>

         </div>
         <search-pagintion
           :num="num"
           :limit="searchQueryInfo.limit"
           :total="MvData.total"
           :page-size="mvPick"
           @handleSizeChange="handleSizeChange"
           @handleCurrentChange="handleCurrentChange"
         />
       </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import recommendSong from '@/components/content/recommendSong'
import { reqSearch } from '@/api/search'
import searchPagintion from './children/searchPagintion'
export default {
  name: 'searchIndex',
  components: {
    recommendSong,
    searchPagintion
  },
  data () {
    return {
      activeName: 'songs',
      mvPick: [8, 12, 16, 20],
      songData: { // 存放歌曲搜索结果
        list: [],
        total: 0
      },
      songDataList: { // 存放歌单搜索结果
        list: [],
        total: 0
      },
      MvData: { // 存放MV搜索结果
        list: [],
        total: 0
      },
      // 数据请求体
      searchQueryInfo: {
        keywords: this.$route.params.content,
        limit: 10,
        offset: 0,
        type: 1 // 歌曲:1 歌单:1000 MV:1004
      },
      num: 1
    }
  },
  mounted () {
    this.$bus.$on('searchClick', (val) => {
      this.searchQueryInfo.keywords = val
      this.getSongData()
    })
  },
  methods: {

    handleClick (e) {
      if (e === 'lists') {
        this.searchQueryInfo.type = 1000
      } else if (e === 'mv') {
        this.searchQueryInfo.limit = 8
        this.searchQueryInfo.type = 1004
      } else if (e === 'songs') {
        this.searchQueryInfo.type = 1
      }
      if (this.songData.total !== 0 && this.songDataList.total !== 0 && this.MvData.total !== 0) return null
      this.getSongData()
    },
    // 获取搜索的歌单数据
    getSongData () {
      reqSearch(this.searchQueryInfo).then(res => {
        if (this.searchQueryInfo.type === 1) {
          this.songData.list = res.data.result.songs
          this.songData.total = res.data.result.songCount
        } else if (this.searchQueryInfo.type === 1000) {
          this.songDataList.list = res.data.result.playlists
          this.songDataList.total = res.data.result.playlistCount
        } else if (this.searchQueryInfo.type === 1004) {
          this.MvData.list = res.data.result.mvs
          this.MvData.total = res.data.result.mvCount
        }
        console.log(this.MvData, res)
      })
    },
    // 分页页码的改变
    handleSizeChange (val) {
      this.searchQueryInfo.limit = val
      console.log(val)
      this.getSongData()
    },
    handleCurrentChange (val) {
      this.searchQueryInfo.offset = (val - 1) * this.searchQueryInfo.limit
      console.log(val)
      this.getSongData()
    }
  },
  created () {
    this.getSongData()
  }
}
</script>

<style scoped lang="stylus">
.search
  .title
    padding  50px 0 10px 0
    display flex
    text-align bottom
    align-items: flex-end;
    border-bottom 2px solid #FF0000
    overflow hidden
    h1
      font-size 45px
      margin-right  20px
  .tar-bar
    width 100%
    height 40px
    line-height 40px
    margin-top 20px
    background pink
    span
      padding 10px
  .items
    display flex
    flex-wrap wrap
    justify-content space-around
    width 100%
    .item
      position relative
      top 0
      width 23%
      height 200px
      margin 20px 0
      img
        width 100%
        border-radius 10px
      .playCount
        position: absolute;
        top: 0;
        width: 100%;
        color: #FFFFFF;
        height: 20px;
        line-height: 20px;
        border-radius: 15px 15px 0 0;
        text-align: right;
        // background: linear-gradient(to right,rgba(255, 255, 255, .01), rgba(0, 0, 0, .5))!important;
        span
          height 20px
          line-height 20px
          margin 10px 15px 0
      .time
        position absolute
        bottom 10px
        right 10px
        color #FFFFFF
      .info-wrap
        .name
          margin 5px 0 0
        address
          margin 5px 0
          font-size 15px
          color #CCCCCC!important

</style>
