import { ajax } from '@/lib/ajax'
// 获取轮播图数据
export const reqBannerData = () => {
  return ajax({
    method: 'GET',
    url: '/banner'
  })
}
