export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Name',
    component: () => import( /* WebpackChunkName: "home_index" */ '@/views/home/Home'),
    redirect: '/home/individuation',
    children: [
      {
        path: '/home/individuation',
        component: () => import( /* WebpackChunkName: "individuation_index" */ '@/views/individuation/Individuation')
      }
    ]
  },
  {
    path: '/individuation',
    component: () => import( /* WebpackChunkName: "individuation_index" */ '@/views/individuation/Individuation')
  }
]
