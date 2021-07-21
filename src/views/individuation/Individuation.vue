<template>
  <div class='individuation'>
    <individuation-swiper :banners='banners' />
    <recommend-song :recommend-songs="recommendSongs"></recommend-song>
    <mv :str="'独家放松'" :mv="privateContent"/>
    <new-song :new-songs="newSongs"/>
    <mv :str="'推荐MV'" :mv="mv"/>
    <div class="box"></div>
  </div>
</template>

<script>
import {
  reqBannerData,
  reqRecommend,
  reqNewRecommend,
  reqMvRecommend,
  reqRecommendList,
  reqPrivatecontent
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
      mv: [],
      privateContent: []
    }
  },
  async created () {
    const { data: res } = await reqBannerData()
    const { data: response } = await reqRecommend()
    const { data: newSong } = await reqNewRecommend()
    const { data: mv } = await reqMvRecommend()
    // const { data: reList } = await reqRecommendList() // 请求出错
    const { data: privateContent } = await reqPrivatecontent()
    this.banners = res.banners
    this.recommendSongs = response.result
    this.newSongs = newSong.result.slice(0,9)
    this.mv = mv.result.slice(0, 3)
    // this.recommendSongs.unshift(reList.recommend[0])
    this.privateContent = privateContent.result
    if (res.code !== 200) return this.$message.error('获取数据失败!')
  }
}
</script>

<style scoped lang="less">
.individuation {
  width: 100%;
  height: 100%;
}
.box {
  width: 100px;
  height: 100px;
  margin: 0  200px;
}
</style>
