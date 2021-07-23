<template>
  <div class="mv">
    <div class="mv-wrap">
      <router-link to="/home/mv">
        <h1><i class="iconfont icon-youjiantou"></i>mv详情</h1>
      </router-link>
<!--      视频-->
      <div class="video-wrap">
        <video width="90%" :poster="image" controls height="400px">
          <source :src="url" type="video/mp4">
          </source>
          <source :src="url" type="video/ogg">
          </source>
          <source :src="url" type="video/webm">
          </source>
          <object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
            <param name="movie" value="myvideo.swf" />
            <param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
          </object>
          当前浏览器不支持 video直接播放，点击这里下载视频： <a href="myvideo.webm">下载视频</a>
        </video>
      </div>
      <div class="info-wrap">
<!--        头像-->
        <div class="icon_name">
          <img :src="mv_Data.data.artists[0].img1v1Url" alt="">
          <span>{{ mv_Data.data.artists[0].name}}</span>
          <span v-if="mv_Data.data.artists[1]"> /
            {{ mv_Data.data.artists[1].name}}</span>
        </div>
<!--        标题-->
        <div class="title">
          <h1>{{ mv_Data.data.name }}</h1>
          <span class="date">发布：{{ mv_Data.data.publishTime }}</span>
          <span class="number">播放：{{ mv_Data.data.playCount }}次</span>
          <p class="desc">{{ mv_Data.data.desc }}</p>
        </div>
      </div>
      <!-- 评论区 -->
      <div class="comment-wrap">
          <!-- 精彩评论 -->
           <comment v-if="commentData.hotList.length > 0" :list="commentData.hotList" :str="'精彩评论'"/>
          <!-- 最新评论 -->
          <comment  v-if="commentData.newList.length > 0" :list="commentData.newList" :str="'最新评论'"></comment>
      </div>
    </div>
    <!-- 相关推荐 -->
    <div class="recommend-wrap">
      <h1>相关推荐</h1>
      <div class="recommend-video">
<!--        推荐-->
        <div class="item"
        v-for="(item, index) in mv_Data.mvs"
        @mouseover="mv_move = index"
        @mouseleave="mv_move = false"
        @click="SimiClick(item.id)"
        >
          <div class="image">
            <img :src="item.cover" alt="">
            <div class="num-wrap">
              <i v-show="mv_move === index" class="iconfont icon-bofang"></i>
              <i class="iconfont icon-caret-right"></i>
              <span class="num">{{ item.playCount | ellipsisPlayVolume }}</span>
            </div>
            <div class="playTime">{{ item.duration | formatDuration }}</div>
          </div>
          <div class="info">
            <div class="title">
              {{ item.name }}
            </div>
            <div class="auhtor">
              {{ item.artistName }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import { reqMvComment } from '@/api/reqMv'
import comment from '@/components/content/comment'
export default {
  name: 'mvDetail',
  components: {
    comment
  },
  data () {
    return {
      mv_move: false,
      commentInfo: { // 存放评论的数据请求体
        id: this.$route.params.id,
        limit: 20
      },
      commentData: { // 存放评论数据对象
        newList: [0],
        hotList: [0],
        total: 0
      },
      image: '', // 图片双向绑定
      url: ''
    }
  },
  created () {
    // 组件创建发送 视频 评论 请求
    this.$store.dispatch('getMvDetail', this.$route.params.id)
    this.getComment(this.commentInfo)
  },
  computed: { // vuex中的state的数据
    ...mapState(['mv_Data'])
  },
  methods: {
    SimiClick (id) { // 获取推荐视频函数
      this.$store.dispatch('getMvDetail', id)
      this.commentInfo.id = id
      this.getComment(this.commentInfo)
    },
    getComment (id) { // 获取评论函数
      reqMvComment(id).then(res => {
        this.commentData.newList = res.data.comments
        this.commentData.hotList = res.data.hotComments
        this.commentData.total = res.data.total
        console.log(res)
      })
    },
    loadHot () {} // 加载评论
  },
  watch: { // 数据改变进行双向绑定
    'mv_Data' (newValue, oldValue) {
      console.log(newValue)
      this.image = newValue.data.cover
      this.url = newValue.url
    }
  }
}
</script>

<style scoped lang="less">
  .mv {
    width: 100%;
    height: 100%;

    h1 {
      margin: 20px 10px;
      font-size: 20px;
    }

    .mv-wrap {
      float: left;
      width: 55%;
      height: 100%;

      .info-wrap {
        margin: 20px 0;

        .icon_name {
          img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            vertical-align: middle;
          }

          span {
            margin: 0 10px;
          }
        }

        .title {
          h1 {
            font-size: 30px;
          }
          span {
            color: gray;
            margin-right: 20px;
          }
        }
      }
    }
    .recommend-wrap {
      float: right;
      width: 35%;
      height: 100%;
      .item {
        position: relative;
        margin: 10px 10px;
        .image {
          width: 40%;
          position: relative;
          top: 0;
          left: 0;
          img {
            width: 100%;
            height: 120px;
            border-radius: 5px;
            vertical-align: middle;
          }
          .num-wrap {
            position: absolute;
            top: 5px;
            right: 10px;
            color: #FFFFFF;
            .icon-bofang {
              position: absolute;
              top: 35px;
              left: -55px;
              color: #FF0000;
            }
          }
          .playTime {
            position: absolute;
            right: 10px;
            color: #FFFFFF;
            bottom: 10px;
          }
        }
        .info {
          position: absolute;
          top: 0;
          right: 0;
          width: 60%;
          text-align: left;
          .title {
            margin: 20px;
            font-size: 20px;
          }
          .auhtor {
            margin: 0 20px 10px;
            font-size: 16px;
            color: gray;
          }
        }
      }
    }
  }
</style>
