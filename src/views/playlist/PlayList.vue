<template>
  <div id="playlist">
    <play-list-header v-show="TopData != null" :top-data="TopData"/>
     <play-recommend @tarclick="getTopHeader"/>
  </div>
</template>

<script>
import { reqTopPlayList } from '@/api/songPlayList'
import PlayListHeader from './children/PlayListHeader'
import PlayRecommend from './children/PlayRecommend'
export default {
  name: 'PlayList',
  components: {
    PlayListHeader,
    PlayRecommend
  },
  created () {
    this.getTopHeader()
  },
  data () {
    return {
      TopData: {}
    }
  },
  methods: {
    async getTopHeader (cat) {
      const { data: res } = await reqTopPlayList(cat)
      this.TopData = res.playlists[0]
    }
  },
  watch: {
    TopData: {
      handler (n, o) {
        if (n === undefined) {
          this.Saveing('切换分类~', '如内容不够看,可以点击分页切换条数显示~~')
        }
      }
    }
  }
}
</script>

<style scoped>
#playlist {
  box-sizing: border-box;
  /* margin: 10px 40px 0; */
  margin-top: 10px;
  padding: 0 20px;
  width: 100%;
  height: 100%;
}
</style>
