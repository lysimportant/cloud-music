<template>
  <div class="album">
    <div class="item" @click="itemClick(item)" v-for="(item, index) in ablum" :key="index">
      <div class="image"><img v-lazy="item.picUrl" alt=""></div>
      <div class="content">
        <div class="name"><h1>{{ item.name }}</h1></div>
        <ul>
          <li @click="playMusic(item)" v-for="(item, index) in ablumList[index].songs" :key="index">
            <span>{{ index + 1 }}</span>
            <span>{{ item.name }}</span>
            <span :style="{float: 'right'}">{{ item.dt | formatDuration }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singerAlbum',
  props: {
    ablum: {
      type: Array,
      default () { return [] }
    },
    ablumList: {
      type: Array,
      default () { return [] }
    }
  },
  methods: {
    itemClick (item) {
      console.log(item)
      // this.$router.push(`/home/detail/${item.id}`)
      console.log(this.ablum)
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  margin: 10px 0 100px;
  display: flex;
  .image {
    img {
      width: 200px;
      border-radius: 5px;
    }
  }
  .content {
    margin-left: 20px;
    display: inline-block;
    width: 100%;
    .name {
      margin: 0 10px;
      font-size: 20px;
    }
    ul {
      margin-top: 10px;
      width: 100%;
      li {
        line-height: 30px;
        width: 100%;
        span {
          margin: 0 10px;
        }
        &:hover {
          background: rgba(159, 159, 159, .2);
        }
      }
    }
  }
}

</style>
