<template>
  <div class="playmusic" :class="{ music_hide: !musicIsActive }">
    <aplayer
      ref="aplayer"
      :audio="audio"
      :lrcType="1"
      listFolded
      :fixed="minValue"
      :mini="minValue"
      state
      mutex
      :volume=".5"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PlayMusic",
  computed: {
    ...mapState(["musicData"])
  },
  data() {
    return {
      audio: [
        {
          id: 37860126, // 音频 id
          name: "Lemon（翻自 米津玄師） ",
          artist: "Lemon",
          url: require("../../assets/mp3/Akie秋绘 - Lemon（翻自 米津玄師）.mp3"),
          cover:
            "https://p1.music.126.net/EEKfs6vrZFaY_owE2fgRwA==/109951163175701373.jpg",
          lrc: `"[00:00.000] 作词 : 米津玄師
[00:01.000] 作曲 : 米津玄師
[00:02.53]夢ならばどれほどよかったでしょう
[00:08.67]未だにあなたのことを夢にみる
[00:14.96]忘れた物を取りに帰るように
[00:21.10]古びた思い出の埃を払う
[00:28.99]戻らない幸せがあることを
[00:34.97]最後にあなたが教えてくれた
[00:40.79]言えずに隠してた昏い過去も
[00:47.22]あなたがいなきゃ永遠に昏いまま
[00:55.52]きっともうこれ以上　傷つくことなど
[01:01.48]ありはしないとわかっている
[01:06.82]あの日の悲しみさえ
[01:09.76]あの日の苦しみさえ
[01:12.93]そのすべてを愛してた　あなたとともに
[01:19.20]胸に残り離れない
[01:22.46]苦いレモンの匂い
[01:25.76]雨が降り止むまでは帰れない
[01:31.75]今でもあなたはわたしの光
[02:02.19]あの日の悲しみさえ
[02:05.28]あの日の苦しみさえ
[02:08.28]そのすべてを愛してた　あなたとともに
[02:14.58]胸に残り離れない
[02:17.94]苦いレモンの匂い
[02:21.50]雨が降り止むまでは帰れない
[02:27.23]切り分けた果実の片方の様に
[02:33.32]今でもあなたはわたしの光
"`},{
          id: 75528003, // 音频 id
          name: "绿色",
          artist: "陈雪凝",
          url: require("../../assets/mp3/陈雪凝 - 绿色.mp3"),
          cover: "https://p1.music.126.net/R4ZP3AJ9xV0vvw8LX7AbMA==/109951163860425334.jpg", // prettier-ignore
          lrc: `"[00:00.000] 作词 : 陈雪凝 作曲 : 陈雪凝 编曲：Dadz
[00:00.880]若不是你突然闯进我生活
[00:04.370]我怎会把死守的寂寞放任了
[00:25.850]说不痛苦那是假的
[00:29.320]毕竟我的心也是肉做的
[00:33.700]你离开时我心里的彩虹
[00:37.600]就变成灰色
[00:41.570]说不心酸那是假的
[00:45.020]如果我真的没那么爱过
[00:48.940]爱着一个没有灵魂的人
[00:52.430]世界都是黑色
[00:56.670]若不是你突然闯进 我生活
[01:00.520]我怎会把死守的寂寞 放任了
[01:04.459]爱我的话你都说
[01:06.459]爱我的事你不做
[01:08.469]我却把甜言蜜语当做你爱我的躯壳
[01:12.890]你的悲伤难过我不参破
[01:16.310]我也会把曾经的且过 当施舍
[01:20.250]不去计较你太多
[01:22.250]从此你在我心里
[01:23.890]只剩绿色
[01:44.480]说很快活那是假的
[01:47.989]你的名字依然那么深刻
[01:51.940]每个字都刺穿我的心脏
[01:55.739]那鲜明的痛是红色
[01:59.569]若不是你突然闯进 我生活
[02:03.510]我怎会把死守的寂寞 放任了
[02:07.400]爱我的话你都说
[02:09.439]爱我的事你不做
[02:11.400]我却把甜言蜜语当做你爱我的躯壳
[02:15.770]你的悲伤难过我不参破
[02:19.199]我也会把曾经的且过 当施舍
[02:23.210]不去计较你太多
[02:25.129]从此你在我心里
[02:26.810]只剩绿色
[02:31.830]呼～
[03:33.979]若不是你突然闯进 我生活
[03:37.879]我怎会把死守的寂寞 放任了
[03:41.789]爱我的话你都说
[03:43.830]爱我的事你不做
[03:45.800]我却把甜言蜜语当做你爱我的躯壳
[03:50.330]若不是你突然闯进 我生活
[03:53.660]我怎会把死守的寂寞 放任了
[03:57.569]爱我的话你都说
[03:59.580]爱我的事你不做
[04:01.599]我却把甜言蜜语当做你爱我的躯壳
[04:05.990]你的悲伤难过我不参破
[04:09.430]我也会把曾经的且过 当施舍
[04:13.349]若不是你突然闯进 我生活
[04:17.319]我怎会把死守的寂寞 放任了
[04:21.199]爱我的话你都说
[04:23.230]爱我的事你不做
[04:25.250]我却把甜言蜜语当做你爱我的躯壳
[04:31.290]和声：李美灵芝
[04:32.810]混音：一曲不空
[04:34.040]发行：3SEVEN叁七
"`}],
      musicIsActive: true,
      minValue: false,
      playPick: null
    };
  },
  mounted() {
    this.$bus.$on("musicChange", val => {
      this.musicIsActive = val;
    })
    this.$bus.$on('miniChange', val => {
      this.minValue = val
      val ? this.deleteElement() : this.initCreateElement()
    })
    this.$bus.$on('later', val => {
      this.playPick = val
      console.log(this.playPick)
    })
    this.initCreateElement()
  },
  methods: {
    getMusicValue(n) {
      const music = {};
      music.id = n.info.id;
      music.url = n.url;
      music.artist = n.info.ar[0].name;
      music.name = n.info.name;
      music.cover = n.info.al.picUrl;
      music.lrc = n.lyric;
      // 过滤
      let obj = this.audio.find(item => item.id === music.id);
      if (obj) {
        return this.close(n.info.name);
      }
     if (this.playPick === true) {
       this.audio.push(music);
       this.Saveing(`歌曲: ${n.info.name}`, '以添加到播放到列等待播放');
       console.log('push le ')
       setTimeout(() => {
         this.playPick = false
       }, 5000)
     } else {
       this.audio.unshift(music);
       this.open(n.info.name);
       this.$refs.aplayer.switch(0)
       setTimeout(() => {
         this.$refs.aplayer.play()
       }, 300)
     }
    },
    deleteElement () {
      const q = document.querySelector(".clearMusic");
      const w = document.querySelector(".backMusic");
      const e = document.querySelector(".stopMusic");
      const r = document.querySelector(".nextMusic");
      const t = document.querySelector(".songMusic");
      q.remove()
      w.remove()
      e.remove()
      r.remove()
      t.remove()
    },
    initCreateElement() {
        const parent = document.querySelector(".aplayer-time");
        const clearSpan = document.createElement("i");
        const BackEL = document.createElement("i");
        const StopEL = document.createElement("i");
        const NextEL = document.createElement("i");
        const SongEL = document.createElement("i");
        // 创建清空列表按钮
        clearSpan.title = "清空播放列表";
        clearSpan.className = "clearMusic iconfont icon-lajitong";
        clearSpan.style.bottom = '28px'
        parent.appendChild(clearSpan);
        clearSpan.addEventListener("click", this.clearMusic);
        // 上一首
        BackEL.title = "播放上一首";
        BackEL.className = "backMusic iconfont icon-youqianjin";
        parent.appendChild(BackEL);
        BackEL.addEventListener("click", this.backMusic);
        // 暂停
        StopEL.title = "播放/暂停音乐";
        StopEL.className = "stopMusic icon-bofang iconfont";
        parent.appendChild(StopEL);
        StopEL.addEventListener("click", this.StopMusic);
        // 播放下一首
        NextEL.title = "播放下一首";
        NextEL.className = "nextMusic icon-zuoqianjin iconfont";
        parent.appendChild(NextEL);
        NextEL.addEventListener("click", this.NextMusic);
        // 显示/隐藏歌词
        SongEL.title = "显示/隐藏歌词";
        SongEL.className = "songMusic icon-geci iconfont";
        parent.appendChild(SongEL);
        SongEL.addEventListener("click", this.SongMusic);
        // 鼠标放置显示文字提示
        const volume = document.querySelector(".aplayer-volume-wrap");
        volume.title = "音乐播放音量";
        const order = document.querySelector(".aplayer-icon-order");
        order.title = "播放顺序：列表或随机";
        const loop = document.querySelector(".aplayer-icon-loop");
        loop.title = "循环设置：列表循环、单曲循环、禁止循环";
        const menu = document.querySelector(".aplayer-icon-menu");
        menu.title = "播放列表显示";
    },
    SongMusic() {
      console.log("显示/隐藏歌词");
      this.$refs.aplayer.toggleLrc();
    },
    // 播放下一首
    NextMusic() {
      console.log("播放下一首");
      this.$refs.aplayer.skipForward();
    },
    // 清空播放列表
    clearMusic() {
      console.log("清空播放列表");
      if (this.audio.length > 0) {
        this.audio = [];
        this.$refs.aplayer.pause();
        return this.$message.success("列表清空成功!");
      } else {
        return this.$message.error("列表已经清空!");
      }
    },
    // 播放上一首
    backMusic() {
      console.log("播放上一首");
      this.$refs.aplayer.skipBack();
    },
    // 停止播放
    StopMusic() {
      console.log("播放/暂停音乐");
      this.$refs.aplayer.toggle();
    },
    open(name) {
      this.$notify({
        title: `歌曲: ${name}`,
        type: "success",
        dangerouslyUseHTMLString: true,
        message: "<strong>以添加到播放到列表且播放</strong>",
        offset: 100
      });
    },
    close(name) {
      this.$notify({
        title: `${name}`,
        type: "error",
        dangerouslyUseHTMLString: true,
        message: "<strong>歌曲已在播放列表中</strong>",
        offset: 100
      });
    }
  },
  watch: {
    musicData: {
      handler(n, o) {
        this.getMusicValue(n);
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="less">
.playmusic {
  position: fixed;
  width: 100%;
  bottom: -5px;
  z-index: 9;
  transition: all 0.3s;
  .aplayer {
    transition: all 0.3s;
    width: 100%;
     //z-index: 999999;
  }
}
.music_hide {
  transform: rotateX(90deg);
  width: 0px !important;
}
</style>
