<template>
  <div class="detail">
    <div class="info">
      <h1>简介: </h1>
     <pre> {{ detail.briefDesc }}</pre>

    </div>
    <div class="info" v-for="(item, index) in detail.introduction" :key="index">
      <h1>{{ item.ti }}</h1>
      <pre>{{ item.txt }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singerDetail_detail',
  props: {
    detail: {
      type: Object,
      default () { return {} }
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin: 10px 0;
}
pre {
  font-size: 20px;
  font-weight: 400;
}
    div {
      margin: 35px 0;
      pre {
        font-size: 20px;
        width: 100%;
        white-space: pre-wrap;
        word-wrap: break-word;
        line-height: 35px;
      }
    }
</style>
