<template>
  <div class="singersimi">
    <div class="item"
    v-for="(item, index) in artists" :key="index"
    @click="itemClick(item)"
    >
      <img v-lazy="item.img1v1Url" alt="">
      <div class="text_hidden">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'singerSimi',
 props: {
   artists: {
     type: Array,
     default () { return [] }
   }
 },
 methods: {
   itemClick (item) {
     console.log(item, window.sessionStorage.getItem('singerId'))
     window.sessionStorage.setItem('singerId', item.id)
     this.$emit('simiClick')
   }
 }
}
</script>

<style lang="less" scoped>

.item {
  display: inline-block;
  width: 20%;
  text-align: center;
  // margin: 10px 50px;
  img {
    width: 80%;
    border-radius: 5px;
  }
  div {
    margin: 5px 0;
    text-align: left;
    text-indent: 2em;

  }
}
</style>
