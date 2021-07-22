<template>
  <div class="singerleaderboard">
    <h1>云音乐歌手榜</h1>
    <ul>
      <li v-for="(item, index) in area" :key="index">
        <span
        :class="{ item_active: item.name === pick}"
        @click="singer(item)"
        >{{ item.name }}</span>
      </li>
    </ul>
    <!-- 排序 -->
    <ol>
      <li
      v-for="(item, index) in singerList"
      :key="index"
      @click="singerDetailJump(item)"
      >
        <span class="pm">{{ index + 1}}</span>
        <span><img :src="item.img1v1Url" alt=""></span>
        <span class="singername">{{ item.name }}</span>
        <span :class="[{hotcount: index > 2}, {hot: index < 3}]">热度: {{ item.score }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
import {
  reqHotSingerList
} from '@/api/singer'
export default {
  name: 'singerLeaderBoard',
  data () {
    return {
      area: [{name: '华语', area: 1}, {name: '欧美', area: 2}, {name: '韩国', area: 3}, {name: '日本', area: 4}],
      singerList: [],
      pick: '华语'
    }
  },
  async created () {
    const { data: res } = await reqHotSingerList()
    this.singerList = res.list.artists
    console.log(this.singerList)
  },
  methods: {
    async singer (item) {
      this.pick = item.name
      const { data: res } = await reqHotSingerList(item.area)
      this.singerList = res.list.artists

    },
    singerDetailJump (item) {
      window.sessionStorage.setItem('singerId', item.id)
      this.$router.push('/home/singerdetail')
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin: 10px 0;
}
ul {
  overflow: hidden;
  li {
    float: left;
    margin: 20px 20px 20px 0;
  }
}
ol {
  li {
    margin: 10px 0;
    &:hover {
      background: rgba(159, 159, 159, .2);
    }
    &:nth-child(-n+3) {
      width: 30%;
      display: inline-block;
      margin-left: 30px;
      .pm {
        // float: left;
        font-size: 40px;
        color: #FEBBB8;
        overflow: hidden;
      }
      .hot, .singername {
        display: block;
        margin-left: 60px;
      }

      .hot {
        margin-bottom: 30px;
      }
      // line-height: 80px;
      span {
        img {
          float: right;
        }
      }
    }

    .hotcount {
      line-height: 80px;
      float: right;
    }
    span {
      margin: 10px;
      img {
        width: 100px;
        vertical-align: middle;
      }
    }
  }
}
.hotcount, .hot {
  color: gray;
}
</style>
