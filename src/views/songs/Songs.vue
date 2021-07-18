<template>
  <div class="song">
    <!-- 选择导航 -->
    <ul class="song_tar">
    	<li
      class="song_item"
      :class="{ item_active: isActive === item.title }"
      v-for="item in TarBar"
      :key="item.id"
      @click="tarBarClick(item)"
      >{{ item.title }}</li>
    </ul>
    <!-- 表格渲染 -->
  <el-table
    :data="NewSongList"
    stripe
    style="width: 100%"
  >
    <el-table-column
      label="#"
      type="index">
    </el-table-column>
    <!-- Img -->
    <el-table-column
      label="#"
      width="200px">
      <template v-slot="scope">
        <i @click="playMusic(scope.row)" v-show="scope.row.id" class="iconfont play_icon icon-bofang"></i>
        <img :style="{width: '100px'}"  v-lazy="scope.row.album.picUrl" alt="">
      </template>
    </el-table-column>
    <!-- 音乐标题 -->
    <el-table-column
    label="音乐标题"
    prop="name"
    ></el-table-column>
    <!-- 歌手 -->
    <el-table-column
    label="歌手"
    prop="album.artists[0].name">
    </el-table-column>
    <!-- 专辑 -->
    <el-table-column
    label="专辑"
    prop="album.name"
    ></el-table-column>
    <!-- 时长 -->
    <el-table-column
    label="时长">
    <template v-slot="scope">
      {{ scope.row.duration | formatDuration }}
    </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { RECEIVE_MUSIC_DATA } from '@/store/mutations-type'
import { reqPlayMusic, reqSongDetail } from '@/api/discover'
import { reqNewSongs } from '@/api/songPlayList'
export default {
  name: 'Songs',
  data () {
    return {
      NewSongList: [],
      TarBar: [{ title: '全部', id: 0 }, { title: '华语', id: 7 }, { title: '欧美', id: 96 }, { title: '日本', id: 8 }, { title: '韩国', id: 16 }],
      isActive: '全部'
    }
  },
  methods: {
    tarBarClick (item) {
      this.isActive = item.title
      reqNewSongs(item.id).then(res => {
        this.NewSongList = res.data.data
        console.log(res)
      })
    },
    /** @音乐播放 **/
    async playMusic (row) {
      const { data: { data: res } } = await reqPlayMusic(row.id)
      const { data: { songs: res1 } } = await reqSongDetail(row.id)
      const obj = {}
      obj.info = res1[0]
      console.log(row.id, res1[0])
      obj.url = res[0].url
      this.$store.commit(RECEIVE_MUSIC_DATA, obj)
    }
  },
  created () {
    reqNewSongs().then(res => {
      this.NewSongList = res.data.data
      console.log(this.NewSongList)
    })
  }
}
</script>

<style scoped>
.song {
  width: 100%;
  height: 100%;
}
.song_tar {
  margin: 20px 10px 20px -20px;
  overflow: hidden;
}
.song_tar .song_item {
  float: left;
  margin: 5px 20px;
}
.play_icon {
  position: absolute;
  bottom: 50px;
  left: 40px;
  color: #FF0000;
  font-size: 50px;
}
</style>
