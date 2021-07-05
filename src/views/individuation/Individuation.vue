<template>
  <div class='individuation'>
    <individuation-swiper :banners='banners' />
    <div class="box">

    </div>
    123321321`32111111111111
  </div>
</template>

<script>
import { reqBannerData } from '@/api/discover'

import individuationSwiper from './children/individuationSwiper'
export default {
  name: 'Individuation',
  props: {},
  components: {
    individuationSwiper
  },
  data () {
    return {
      banners: []
    }
  },
  async created () {
    const { data: res } = await reqBannerData()
    if (res.code !== 200) return this.$message.error('获取数据失败!')
    this.banners = res.banners
    console.log(res, this.banners)
  }
}
</script>

<style scoped>
.individuation {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.box {
  width: 500px;
  height: 500px;
  background-color: pink;
}
</style>
