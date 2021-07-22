<template>
    <!-- 头部区域 -->
    <div class="header">
      <img class="header_image"  v-lazy="songDetailList.coverImgUrl" alt="">
      <div class="songinfo">
        <!-- 标题区域 -->
        <div class="title">
          <span>歌单</span>
          <h3>{{ songDetailList.name }}</h3>
        </div>
        <!-- 用户信息区域 -->
        <div class="userinfo">
          <img class="iconHead" v-lazy="songDetailList.creator.avatarUrl" alt="">
          <span class="mini_icon">
            <img
            v-if="songDetailList.creator.avatarDetail !== null"
            v-lazy="songDetailList.creator.avatarDetail.identityIconUrl"
            alt="">
          </span>
          <span :style="{color: '#507DAF'}">{{ songDetailList.creator.nickname }}</span>
          <span>{{ songDetailList.createTime | dateShow }} 创建</span>
        </div>
        <!-- 功能区域 -->
        <div class="features">
         <div class="play">
          <span class="play_icon" @click="play_icon_music">
            <i class="el-icon-video-play"></i>
            播放全部
          </span>
          <el-tooltip class="item" effect="dark" content="添加到播放列表" placement="top">
                <span @click="loadmusic" class="iconfont add icon-icon-test"></span>
              </el-tooltip>
         </div>
        </div>
        <!-- 标签区域 -->
        <div class="tags">
          标签: <span v-for="(item, index) in songDetailList.tags" :key="index">
           {{ item }}
          </span>
          <div :style="{marginTop: '5px'}">
            <span>歌曲: {{ songDetailList.trackCount }}</span>
            <span>播放: {{ songDetailList.playCount | ellipsisPlayVolume }}</span>
          </div>
        </div>
        <!-- 简介区域 -->
        <div class="introduction" :class="{text_hidden: text_isShow}">
          简介:  <pre :style="{paddingTop: '10px'}">{{ songDetailList.description }}</pre>
          <i @click="text_isShow = !text_isShow" v-show="text_isShow" class="iconfont isShow icon-xiajiantou1"></i>
          <i @click="text_isShow = !text_isShow" v-show="!text_isShow" class="iconfont isShow icon-shangjiantou"></i>
        </div>
      </div>
    </div>
</template>
<script>

import { formatDate } from '@/lib/utils'
export default {
  name: 'detailHeader',
  props: {
    songDetailList: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      text_isShow: true
    }
  },
  methods: {
    // 1 添加到播放那个列表 2 播放全部
    loadmusic () {
      this.$emit('loadmusic')
      this.$bus.$emit('later', true)
    },
    play_icon_music () {
      this.$emit('loadmusic')
      this.$bus.$emit('later', false)
    }
  },
  mounted () {
    console.log(this.songDetailList)
  },
  filters: {
    /**
     *  @
     * **/
    dateShow (value) {
      const date = new Date(value * 1)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped lang="less">
 .header {
    display: flex;
    .header_image {
      width: 200px;
      height: 200px;
      border-radius: 10px;
      vertical-align: top;
    }
    .songinfo {
      width: 100%;
      margin: 10px 30px 10px;
      text-align: left;
      /**
        @.title 标题
      **/
      .title {
        height: 25px;
        line-height: 25px;
        // text-align: center;
        span {
          color: #FF0000;
          padding: 5px 10px;
          font-weight: 700;
          border-radius: 2px;
          border: 1px solid #FF0000;
        }
        h3 {
          display: inline-block;
          margin: 0 10px;
          font-size: 20px;
        }
      }
      /**
       @.userinfo 用户信息
     **/
      .userinfo {
        margin: 10px 0;
        &>img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .mini_icon {
          img {
            width: 15px!important;
            height: 15px!important;
            vertical-align: bottom;
            margin-left: -15px;
          }
        }

        span  {
          font-size: 15px;
          margin: 0 5px
        }
      }
      /**
        @features 功能区域
      **/
      .features {
        display: flex;
        .play {
          display: flex;
          color: #FFFFFF;
          background: red;
          border-radius: 50px;
          width: 150px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          overflow: hidden;
          .play_icon {
            display: block;
            padding: 0;
            margin: 0;
            width: 80%;
            &:hover {
              background: #DC443E;
            }
          }
          .add {
            flex: 1;
            display: inline-block;
            padding: 0 10px 0 5px;
            border-left: 1px solid rgba(255, 255, 255, .5);
            &:hover {
              background: #DC443E;
            }
          }
        }
      }
      /**
        @tags 标签区域
      **/
      .tags {
        margin-top: 10px;
        span {
          margin-right: 15px;
        }
      }
      .introduction {
        position: relative;
        margin-top: 5px;
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        pre {
          white-space: pre-wrap;
        }
        .isShow {
          position: absolute;
          top: 0;
          right: 15px;
          display: block;
        }
      }
    }
  }
</style>
