<template>
  <div class="items">
    <h1>{{ str }} ({{ list.length }})</h1>
    <div class="hotItem" v-for="(item, index) in list" :key="item.id">
    <!--  头像  -->
      <div class="icon-wrap">
        <img  v-lazy="item.user.avatarUrl" alt="">
      </div>
      <div class="comment">
        <div class="author">
          <span class="name">{{ item.user.nickname }} :</span> {{ item.content }}
        </div>
        <div class="re-comment" v-if="item.beReplied[0]">
          <span class="name">@{{ item.beReplied[0].user.nickname }} : </span>
          <span class="rec">{{ item.beReplied[0].content }}</span>
        </div>
        <div class="date">
          <span>{{ item.time | LocaleDateString }}</span>
          <span class="likecount">
              <i class="iconfont icon-zan"></i> {{ item.likedCount }}
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CommentIndex',
  props: {
    list: {
      type: Array,
      default () { return [] }
    },
    str: String
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  margin: 10px 0;
}
  .items {
    width: 100%;
    margin-top: 20px;
  }
  .hotItem {
    /*box-sizing: border-box;*/
    position: relative;
    top: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 10px 0;
    /* height: 105px; */
    /*background: rgba(0,0 ,0, .1);*/
  }
  .icon-wrap {
    position: relative;
    top: 0;
    width: 100px;
    height: 100px;
  }
  .hotItem .icon-wrap img {
    position: absolute;
    top: 0;
    width: 80px;
    border-radius: 50%;
    padding: 10px 10px 0 10px;
  }
  .comment {
    margin-left: 10px;
    flex: 1;
  }
  .comment .author {
    margin: 15px 0 10px;
  }
  .name {
    margin-right: 5px;
    color: #517EAF;
  }
  .comment .re-comment {
    position: relative;
    margin: 10px 0 10px;
    line-height: 20px;
    background: rgba(0, 0,0 , .1);
    padding: 10px 20px 5px;
  }
  .comment .date {
    /*position: absolute;*/
    /*bottom: 5px;*/
    color: #cccccc;
  }
  .likecount {
    float: right;
    color: #FF0000;
  }
  .load {
    text-align: center;
  }
  .load .el-button {
    /*width: 100%;*/
    margin: 10px auto;
  }
</style>
