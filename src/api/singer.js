import { ajax } from '@/lib/ajax'
/**
 * @param type 地区选择歌手  /toplist/artist
 * **/
export const reqHotSingerList = (type = 1) => {
  return ajax({
    url: '/toplist/artist',
    params: { type }
  })
}

/**
 * @param id 歌手描述  /artist/desc
 * **/
 export const reqSingerDesc = id => {
  return ajax({
    url: '/artist/desc',
    params: { id }
  })
}

/**
 * @param id 歌手详情  /artist/detail
 * **/
 export const reqSingerDetail = id => {
  return ajax({
    url: '/artist/detail',
    params: { id }
  })
}

/**
 * @param id 相似歌手 /simi/artist
 * **/
 export const reqSingerSimiArtist = id => {
  return ajax({
    url: '/simi/artist',
    params: { id }
  })
}

/**
 * @param id 歌手专辑 /artist/album
 * **/
 export const reqSingerAlbum = id => {
  return ajax({
    url: '/artist/album',
    params: { id }
  })
}

/**
 * @param id 专辑 /album
 * **/
 export const reqAlbum = id => {
  return ajax({
    url: '/album',
    params: { id }
  })
}

/**
 * @param id 歌手专辑 /artist/mv
 * **/
 export const reqSingerMv = id => {
  return ajax({
    url: '/artist/mv',
    params: { id }
  })
}
//
/**
 * @param id 歌手专辑 /artists
 * **/
export const reqSingerHotSong = id => {
  return ajax({
    url: '/artists',
    params: { id }
  })
}

/**
 * @param  /artist/list 歌手分类列表
 * @param  type  -1:全部    1:男歌手    2:女歌手   3:乐队
 * @param  area  -1:全部     7: 华语   96: 欧美    8: 日本    16: 韩国    0:其他
 * @param  limit 返回数量，默认为 30
 * @param  offset 偏移数量，用于分页，如：如：（页数-1）*30，一个30为极限的值，默认为0
 * @param initial 按首字母索引查找参数，如/artist/list?type=1&area=96&initial=b返回内容名称可字段概要为b或者拼音开头为b为顺序排列,热门传-1,#传0
 * **/

export const reqSingerClassification = params => {
  return ajax({
    url: '/artist/list',
    params
  })
}
