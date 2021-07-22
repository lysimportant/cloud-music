<template>
  <div class="detailtable">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- 歌曲 -->
      <el-tab-pane :label="'歌曲列表( '+ musicList.length +')'" name="songs">
        <el-table
          :data="musicList"
          border
          style="width: 100%"
          @row-click="playMusic"
        >
          <el-table-column type="index" label="#"> </el-table-column>
          <el-table-column label="#" width="150">
            <template v-slot="scope">
              <img
                :style="{ width: '110px' }"
                v-lazy="scope.row.al.picUrl"
                alt=""
              />
            </template>
          </el-table-column>
          <el-table-column label="音乐标题">
            <template v-slot="scope">
              <span>{{ scope.row.name }}</span>
              <!-- <span class="zj">( {{ scope.row.tns[0] }} )</span> -->
            </template>
          </el-table-column>
          <el-table-column label="歌手" prop="ar[0].name"> </el-table-column>
          <el-table-column label="专辑">
            <template v-slot="scope">
              <span>{{ scope.row.al.name }}</span>
              <!-- <span class="zj">( {{ scope.row.al.tns[0] }} )</span> -->
            </template>
          </el-table-column>
          <el-table-column label="时长">
            <template v-slot="scope">
              {{ scope.row.dt | formatDuration }}
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!-- 评论区 -->
      <el-tab-pane
        :label="
          '评论列表 (' + (newCommentData.total + hotCommentList.total) + ')'
        "
        name="comment"
      >
        <div class="comment">
          <textarea v-model="commentText" name="comment" id="comment"></textarea>
          <el-button @click="sendComment" class="sendComment">发送</el-button>
        </div>
        <!--            精彩评论-->
        <comment :list="hotCommentList.list" :str="'精彩评论'" />
        <div class="load">
          <el-button
            round
            @click="loadHot"
            v-show="hotCommentList.total > queryInfo.limit"
          >
            加载更多精彩评论
            <i class="iconfont icon-jiantou1"></i>
          </el-button>
        </div>
        <!--            最新评论-->
        <comment :list="newCommentData.list" :str="'最新评论'" />
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="num"
          :page-sizes="[15, 30, 60, 100]"
          :page-size="queryInfo.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="newCommentData.total"
        >
        </el-pagination>
      </el-tab-pane>
      <!-- 收藏者区 -->
      <el-tab-pane label="收藏者" name="love">
        <div class="subItems">
          <div
            class="subItem"
            v-for="(item, index) in subscribers.list"
            :key="item.userId"
          >
            <div class="subImg" @click="subCLick(item)">
              <img v-lazy="item.avatarUrl" alt="" />
            </div>
            <div class="info">
              {{ item.nickname }}
              <i
                v-show="item.gender === 1"
                class="iconfont icon-xingbienan"
              ></i>
              <i v-show="item.gender === 2" class="iconfont icon-xingbienv"></i>
              <i v-show="item.gender === 0" class="iconfont icon-xingbie"></i>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {
  reqComment,
  reqSongSub,
  reqCommentNew
} from '@/api/songPlayList'
import { reqSendComment } from '@/api/discover'
import comment from '@/components/content/comment'
export default {
  name: 'detailTable',
  components: {
    comment
  },
  props: {
    musicList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      activeName: 'songs', // 导航栏双向绑定
      subscribers: { // 收藏者
        list: [],
        total: 0
      },
      commentInfo: {
        t: 1,
        type: 2,
        id: this.$route.params.id * 1,
        content : ''
      },
      queryInfo: { // 请求体
        id: 0,
        type: 2,
        limit: 15,
        offset: 0
      },
      hotCommentList: { // 热门评论
        list: [],
        total: 0
      },
      newCommentData: { // 最新评论
        list: [],
        total: 0
      },
      num: 1, // 分页当前页码
      count: 2,
      commentText: ''
    }
  },
  methods: {
    // 发送评论
    async sendComment () {
     if (window.sessionStorage.getItem('token')) {
       if (this.commentText.trim() === '') {
         return this.$message.warning('请填写内容!再发评论~')
       }
       this.commentInfo.content = this.commentText
       const { data: res } = await reqSendComment(this.commentInfo)
       if (res.code !== 200 || res.code !== 201) {
         return this.$message.error('发送失败!')
       }else {
         return this.$message.success('发送成功!')
       }
     } else {
       this.$message.error('请先登录帐号!再评论~')
     }
    },
    handleClick (e) {
      console.log(e)
    },
    /** @加载更多热门评论 **/
    loadHot () {
      const val = this.queryInfo.limit
      this.count += 3
      this.queryInfo.limit = this.queryInfo.limit * this.count
      this.getHotComment()
      this.queryInfo.limit = val
    },
    /** @获取热门评论 **/
    getHotComment () {
      reqComment(this.queryInfo).then(res => {
        this.hotCommentList.list = res.data.hotComments
        this.hotCommentList.total = res.data.total
      })
    },
    /** @获取最新评论 **/
    getNewComment () {
      reqCommentNew(this.queryInfo).then(res => {
        this.newCommentData.list = res.data.comments
        this.newCommentData.total = res.data.total
      })
    },
    /** @获取收藏者 **/
    getSubscribers () {
      reqSongSub(this.queryInfo.id, 200).then(res => {
        this.subscribers.list = res.data.subscribers
        this.subscribers.total = res.data.total
        console.log(res)
      })
    },
    handleSizeChange (val) {
      this.queryInfo.limit = val
      this.getNewComment()
    },
    handleCurrentChange (val) {
      this.queryInfo.offset = (val - 1) * this.queryInfo.limit
      this.getNewComment()
    },
    /** @收藏者点击 **/
    subCLick (item) {
      console.log(item)
      // /user/detail
    }
  },
  created () {
    this.queryInfo.id = window.sessionStorage.getItem('id')
    /** @获取评论 **/
    // console.log(window.sessionStorage.getItem('id'), this.queryInfo)
    this.getHotComment()
    this.getNewComment()
    this.getSubscribers()
  }
}
</script>

<style scoped>
.detailtable {
  width: 100%;
}

.zj {
  color: #9f9f9f;
}

.el-tabs {
  margin: 0 0 100px;
}

.load {
  text-align: center;
}

.load .el-button {
  /*width: 100%;*/
  margin: 10px auto;
}

.subItems {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.subItem {
  display: flex;
  align-items: center;
  width: 25%;
  margin: 20px 0;
}

.subItem .subImg img {
  width: 100px;
  border-radius: 50%;
  vertical-align: middle;
}

.subItem .info {
  margin: 20px;
}

.iconfont {
  margin: 0 10px;
}

.icon-xingbienan,
.icon-xingbienv,
.icon-xingbie {
  display: inline-block;
  color: skyblue;
  text-align: center;
  font-size: 20px;
  width: 23px;
  height: 23px;
  line-height: 23px;
  background: rgba(135, 206, 253, 0.6);
  border-radius: 50%;
}

.icon-xingbienv {
  color: pink;
  background: rgba(255, 192, 203, 0.6);
}

.icon-xingbie {
  color: green;
  background: rgba(255, 255, 0, 0.1);
}
/*评论区*/
.comment {
  height: 150px;
}
textarea {
  display: inline-block;
  margin: 10px 20px;
  border: 1px solid #9f9f9f;
  width: 95%;
  height: 95%;
}
.sendComment {
  float: right;
  margin-right: 60px;
}
</style>
