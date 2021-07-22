export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Name',
    component: () => import(/* WebpackChunkName: "home_index" */ '@/views/home/Home'),
    redirect: '/home/individuation',
    children: [
      {
        path: '/home/individuation',
        component: () => import(/* WebpackChunkName: "individuation_index" */ '@/views/individuation/Individuation')
      },
      {
        path: '/home/playlist',
        component: () => import(/* WebpackChunkName: "playlist_index" */ '@/views/playlist/PlayList')
      },
      {
        path: '/home/songs',
        component: () => import(/* WebpackChunkName: "songs_index" */ '@/views/songs/Songs')
      },
      {
        path: '/home/detail/:id',
        name: 'detail',
        meta: { noTopNav: true },
        component: () => import(/* WebpackChunkName: "detail_index" */ '@/views/detail/detailIndex')
      },
      {
        path: '/home/mv',
        name: 'mv',
        meta: { noTopNav: true },
        component: () => import(/* WebpackChunkName: "mv_index" */ '@/views/mv/mvIndex')
      },
      {
        path: '/home/mvdetail/:id',
        name: 'mvdetail',
        meta: { noTopNav: true },
        component: () => import(/* WebpackChunkName: "mv_detail" */ '@/views/mv/children/mvDetail')
      },
      {
        path: '/home/search/:content',
        name: 'search',
        meta: { noTopNav: true },
        component: () => import(/* WebpackChunkName: "search_index" */ '@/views/search/searchIndex')
      },
      {
        path: '/home/leaderboard',
        name: 'leaderboard',
        meta: { noTopNav: true },
        component: () => import(/* WebpackChunkName: "leaderboard_index" */ '@/views/leaderboard/LeaderBoard')
      },
      {
        path: '/home/singer',
        name: 'singer',
        meta: { noTopNav: true },
        component: () => import(/* WebpackChunkName: "singer_index" */ '@/views/singer/singerIndex')
      },
      {
        path: '/home/singerleaderboard',
        name: 'singerleaderboard',
        meta: { noTopNav: true },
        component: () => import(/* WebpackChunkName: "singer_leaderboard" */ '@/views/singer/children/singerLeaderBoard')
      },
      {
        path: '/home/singerdetail',
        name: 'singerdetail',
        component: () => import(/* WebpackChunkName: "singer_detail" */ '@/views/singer/children/singerDetail')
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* WebpackChunkName: "individuation_index" */ '@/views/login/Login')
  }
]
