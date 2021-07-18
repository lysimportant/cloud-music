<template>
  <div class='individuation'>
    <individuation-swiper :banners='banners' />
    <recommend-song :recommend-songs="recommendSongs"></recommend-song>
    <new-song @playMusic="playMusic" :new-songs="newSongs"/>
    <mv :mv="mv"/>
  </div>
</template>

<script>
import {
  reqBannerData,
  reqRecommend,
  reqNewRecommend,
  reqMvRecommend
} from '@/api/discover'
import individuationSwiper from './children/individuationSwiper'
import recommendSong from '@/components/content/recommendSong'
import NewSong from './children/newSong'
import mv from './children/mv'

export default {
  name: 'Individuation',
  props: {},
  components: {
    individuationSwiper,
    recommendSong,
    NewSong,
    mv
  },
  data () {
    return {
      banners: [],
      recommendSongs: [],
      newSongs: [],
      mv: []
    }
  },
  async created () {
    const { data: res } = await reqBannerData()
    const { data: response } = await reqRecommend()
    const { data: newSong } = await reqNewRecommend()
    const { data: mv } = await reqMvRecommend()
    this.recommendSongs = response.result
    this.banners = res.banners
    this.newSongs = newSong.result
    this.mv = mv.result
    if (res.code !== 200) return this.$message.error('获取数据失败!')
    // console.log(this.recommendSongs, 'individuation')
  }
}
</script>

<style scoped lang="less">
.individuation {
  width: 100%;
  height: 100%;
}
.box {
  width: 500px;
  height: 500px;
  margin: 200px;
  background-color: #021611;
}
</style>
