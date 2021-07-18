<template>
  <div
    class="playmusic"
    :class="{music_hide: !musicIsActive}" >
    <aplayer
      ref="aplayer"
      :audio="audio"
      :lrcType="1"
      listFolded
      state
      :volume="0.1"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PlayMusic',
  computed: {
    ...mapState(['musicData'])
  },
  data () {
    return {
      audio: [
        {
          id: 718765, // 音频 id
          name: "ブルーバード",
          artist: "いきものがかり",
          url: 'http://m8.music.126.net/20210718124701/5d613573e0723f8a1fb6755d6efcc546/ymusic/3mk-MDuhwmYYOfXtMoHIMw==/509951162913305678',
          cover: "https://p1.music.126.net/FxdUoo1pt4x8tWx_1Xxo0Q==/109951165049992025.jpg", // prettier-ignore
          lrc: `"[00:00.000] 作词 : Yoshiki Mizuno
[00:00.200] 作曲 : Yoshiki Mizuno
[00:00.400]飛翔いたら戻らないと言って
[00:07.130]目指したのは 蒼い 蒼い あの空
[00:14.150]
[00:25.990]“悲しみ”はまだ覚えられず
[00:29.170]“切なさ”は今つかみはじめた
[00:32.390]あなたへと抱く この感情も
[00:35.450]今“言葉”に変わっていく
[00:38.720]未知なる世界の 遊迷(ゆめ)から目覚めて
[00:44.970]この羽根を広げ 飛び立つ
[00:51.200]飛翔(はばた)いたら 戻らないと言って
[00:57.570]目指したのは 白い 白い あの雲
[01:03.880]突き抜けたら みつかると知って
[01:10.390]振り切るほど 蒼い 蒼い あの空
[01:16.580]蒼い 蒼い あの空
[01:19.670]蒼い 蒼い あの空
[01:23.570]
[01:29.090]愛想尽きたような音で
[01:32.320]錆びれた古い窓は壊れた
[01:35.440]見飽きたカゴは ほら捨てていく
[01:38.640]振り返ることはもうない
[01:41.800]高鳴る鼓動に 呼吸を共鳴(あず)けて
[01:48.170]この窓を蹴って 飛び立つ
[01:54.480]駆け出したら 手にできると言って
[02:00.780]いざなうのは 遠い 遠い あの声
[02:07.050]眩しすぎた あなたの手も握って
[02:13.340]求めるほど 蒼い 蒼い あの空
[02:26.640]
[02:32.870]墜ちていくと わかっていた
[02:39.070]それでも 光を追い続けていくよ
[02:46.580]飛翔(はばた)いたら 戻らないと言って
[02:52.890]探したのは 白い 白い あの雲
[02:59.150]突き抜けたら みつかると知って
[03:05.490]振り切るほど 蒼い 蒼い あの空
[03:11.790]蒼い 蒼い あの空
[03:14.950]蒼い 蒼い あの空
[03:19.670]
"`
        },{
          id: 1345872140, // 音频 id
          name: '勾指起誓',
          artist: '洛天依',
          url: "http://m8.music.126.net/20210718124223/838e5b507ce1f7841406f650ff052d8a/ymusic/530b/5258/510b/da15b32b47e2d30c43cafa3bc328279c.mp3",
          cover: 'https://p1.music.126.net/eMyCr0gv0kPGlew9XTNjyA==/109951163944178164.jpg', // prettier-ignore
          lrc: `"[00:00.000] 作词 : ilem
[00:01.000] 作曲 : ilem
[00:03.578]编曲：ilem
[00:07.453]
[00:22.067]你是信的开头诗的内容
[00:25.001]童话的结尾
[00:27.190]你是理所当然的奇迹
[00:30.390]你是月色真美
[00:32.729]你是圣诞老人送给我
[00:36.230]好孩子的礼物
[00:38.588]你是三千美丽世界里
[00:41.711]我的一瓢水
[00:43.731]所以让我再靠近一点点
[00:47.278]因为你太温暖
[00:49.711]我会再变得坚强一点点
[00:53.005]因为你太柔软
[00:55.326]交换无名指金色的契约
[00:58.582]给彼此岁月
[01:01.127]说好从今以后都牵着手
[01:04.164]因为要走很远
[01:19.467]
[01:30.083]你是我万水千山的冒险
[01:33.017]要找的标记点
[01:35.121]你是分割我人生的线
[01:38.393]又将它们相连
[01:40.677]你是前世千次的回眸
[01:44.083]虔诚牵的手
[01:46.103]你是其余所有的一切
[01:49.364]是我的世界
[01:51.838]所以请你再闪亮一点点
[01:55.131]尽管我太平凡
[01:57.396]我会再变得柔软一点点
[02:01.216]因为你太敏感
[02:03.123]交换无名指金色的契约
[02:06.358]给彼此岁月
[02:08.754]说好从今以后都牵着手
[02:12.026]不管要走多远
[02:14.432]
[02:37.560]让我再靠近一点点
[02:40.313]因为你太温暖
[02:42.519]我会再变得坚强一点点
[02:45.986]因为你太柔软
[02:48.375]交换无名指金色的契约
[02:51.518]给彼此岁月
[02:54.054]说好从今以后都牵着手
[02:57.278]因为要走很远
[02:59.942]
[03:00.506]混音：Tolein
"`
        }
      ],
      musicIsActive: true
    }
  },
  mounted () {
    this.initCreateElement()
    this.$bus.$on('musicChange', val => {
      console.log(val)
      this.musicIsActive = val
    })
  },
  methods: {
    getMusicValue (n) {
      const music = {}
      music.id = n.info.id + new Date()
      music.url = n.url
      music.artist = n.info.ar[0].name
      music.name = n.info.name
      music.cover = n.info.al.picUrl
      music.lrc = n.lyric
      this.audio.push(music)
      /*       this.audio.id = n.info.id;
      this.audio.url = n.url;
      this.audio.artist = n.info.ar[0].name;
      this.audio.name = n.info.name
      this.audio.cover = n.info.al.picUrl;
      this.audio.lrc = n.lyric; */
    },
    initCreateElement () {
      const parent = document.querySelector('.aplayer-time')
      // 创建清空列表按钮
      const clearSpan = document.createElement('i')
      clearSpan.title = '清空播放列表'
      clearSpan.className = 'clearMusic iconfont icon-lajitong'
      parent.appendChild(clearSpan)
      clearSpan.addEventListener('click', this.clearMusic)
      // 上一首
      const BackEL = document.createElement('i')
      BackEL.title = '播放上一首'
      BackEL.className = 'backMusic iconfont icon-youqianjin'
      parent.appendChild(BackEL)
      BackEL.addEventListener('click', this.backMusic)
      // 暂停
      const StopEL = document.createElement('i')
      StopEL.title = '播放/暂停音乐'
      StopEL.className = 'stopMusic icon-bofang iconfont'
      parent.appendChild(StopEL)
      StopEL.addEventListener('click', this.StopMusic)
      // 播放下一首
      const NextEL = document.createElement('i')
      NextEL.title = '播放下一首'
      NextEL.className = 'nextMusic icon-zuoqianjin iconfont'
      parent.appendChild(NextEL)
      NextEL.addEventListener('click', this.NextMusic)
      // 显示/隐藏歌词
      const SongEL = document.createElement('i')
      SongEL.title = '显示/隐藏歌词'
      SongEL.className = 'songMusic icon-geci iconfont'
      parent.appendChild(SongEL)
      SongEL.addEventListener('click', this.SongMusic)
      // 鼠标放置显示文字提示
      const volume = document.querySelector('.aplayer-volume-wrap')
      volume.title = '音乐播放音量'
      const order = document.querySelector('.aplayer-icon-order')
      order.title = '播放顺序：列表或随机'
      const loop = document.querySelector('.aplayer-icon-loop')
      loop.title = '循环设置：列表循环、单曲循环、禁止循环'
      const menu = document.querySelector('.aplayer-icon-menu')
      menu.title = '播放列表显示'
    },
    SongMusic () {
      console.log('显示/隐藏歌词')
      this.$refs.aplayer.toggleLrc()
    },
    // 播放下一首
    NextMusic () {
      console.log('播放下一首')
      this.$refs.aplayer.skipForward()
    },
    // 清空播放列表
    clearMusic () {
      console.log('清空播放列表')
      if (this.audio.length > 0) {
        this.audio = []
        this.$refs.aplayer.pause()
        return this.$message.success('列表清空成功!')
      } else {
        return this.$message.error('列表已经清空!')
      }
    },
    // 播放上一首
    backMusic () {
      console.log('播放上一首')
      this.$refs.aplayer.skipBack()
    },
    // 停止播放
    StopMusic () {
      console.log('播放/暂停音乐')
      this.$refs.aplayer.toggle()
    },
    open (name) {
      this.$notify({
        title: `${name}`,
        type: 'success',
        dangerouslyUseHTMLString: true,
        message: '<strong>以添加到播放到列表</strong>',
        offset: 100
      })
    }

  },
  watch: {
    musicData: {
      handler (n, o) {
        this.getMusicValue(n)
        this.open(n.info.name)
        console.log(n)
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="less">
.playmusic {
  position: fixed;
  width: 100%;
  bottom: -5px;
  z-index: 9;
  transition: all .3s;
  .aplayer {
    transition: all .3s;
    width: 100%;
    // z-index: 999999;
  }
}
.music_hide {
  transform: rotateX(90deg);
  width: 0px !important;
}
</style>
