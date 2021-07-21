
export default {
  filters: {
    // 格式化播放时间
    formatDuration (duration) {
      // 分钟：向下取整，转为字符，不足两位前边补零
      const minute = Math.floor(duration / 1000 / 60)
        .toString()
        .padStart(2, '0')
      const second = Math.floor(duration % 60)
        .toString()
        .padStart(2, '0')
      return minute + ':' + second
    },
    // 格式化创建者时间 2020/4/08
    LocaleDateString (date) {
      if (!date) return ''
      const createDate = new Date(date)
      return createDate.toLocaleDateString() + ' '
    },
    // 格式化评论时间  "2021/3/30下午11:08:51"
    LocaleString (dateTime) {
      if (!dateTime) return ''
      const newDateTime = new Date(dateTime)
      return newDateTime.toLocaleString()
    },
    // 省略播放量
    ellipsisPlayVolume (val) {
      // 大于十万的显示 xx万
      if (val < 100000) return val
      return parseInt(val / 10000) + '万'
    }
  },
  methods: {
    /** @音乐播放 **/
    async playMusic (item) {
      this.$store.dispatch('getAudioInfo', item)
    },
    Saveing(name, content) {
      this.$notify({
        title: `${name}`,
        type: "success",
        dangerouslyUseHTMLString: true,
        message: `<strong>${content}</strong>`,
        offset: 100
      });
    }
  }
}
