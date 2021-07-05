import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // if (to.path === '/login') return next()
  // // 获取token
  // const token = window.sessionStorage.getItem('token')
  // console.log(token)
  // if (!token) return next('/login')
  next()
})
export default router
