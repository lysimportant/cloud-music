import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
// import './plugins/element.js'
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
// 全局css资源
import '@/assets/style/css/reset.css'
import '@/assets/style/css/animation.css'

// mixin全局引入
import mixins from '@/lib/mixin'

// 引入 APlayer
import APlayer from '@moefe/vue-aplayer'
Vue.mixin(mixins)
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true
})
// $bus 事件总线的导入
Vue.prototype.$bus = new Vue()
// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/loading.jpg')
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
