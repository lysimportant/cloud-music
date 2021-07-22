<template>
  <div class='singerMv'>
    <div class="item" v-for="item in mvs"
    :key="item.id"
    @click="mvClick(item.id)"
    >
      <img v-lazy="item.imgurl" alt="">
      <span class="playcount"><i class="iconfont icon-caret-right"></i>{{ item.playCount | ellipsisPlayVolume }}</span>
      <span class="play">{{ item.duration | formatDuration }}</span>
      <div class="name">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singerMv',
  components: {},
  props: {
    mvs: {
      type: Array,
      default () { return [] }
    }
  },
  data () {
    return {}
  },
  created () {},
  mounted () {},
  update () {},
  methods: {
    mvClick (id) {
      this.$router.push(`/home/mvdetail/${id}`)
    }
  },
  filter: {},
  computed: {},
  watch: {}
}
</script>

<style scoped lang="less">
.item {
  position: relative;
  top: 0;
  display: inline-block;
  width: 20%;
  text-align: center;
  // margin: 10px 50px;
  img {
    width: 80%;
    border-radius: 5px;
  }
  .name {
    margin: 10px 0;
    text-align: left;
    text-indent: 2em
  }
  .playcount {
    position: absolute;
    top: 2px;
    right: 35px;
    color: #fff;
  }
    .play {
    position: absolute;
    bottom: 45px;
    right: 35px;
    color: #fff;
  }
}
</style>
