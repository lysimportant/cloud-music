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
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* WebpackChunkName: "individuation_index" */ '@/views/login/Login')
  }
]
