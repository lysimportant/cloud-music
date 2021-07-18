# MV详情页 接口文档

>  所有接口的请求方式都是`get`



## MV地址

> 通过这个接口可以获取MV的在线地址

**必选参数 :** `id`: mv的id

**接口地址 :** https://autumnfish.cn/mv/url



##  相关MV

> 说明 : 调用此接口 , 传入 `mvid` 可获取相似 mv

**必选参数 :** `mvid`: mv的id

**接口地址 :** https://autumnfish.cn/simi/mv



## MV信息

> 说明 : 调用此接口 , 传入 mvid ,即可获取MV信息

**必选参数 :** `mvid`: mv 的 id

**接口地址 :** https://autumnfish.cn/mv/detail





## 歌手信息

> 说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息,比如歌手的头像

**必选参数 :** `id`: 歌手 id, 可由搜索接口获得

**接口地址 :** https://autumnfish.cn/artists





## MV评论

>  说明 : 调用此接口 , 传入mv id 和 limit 参数 , 可获得该 mv 的所有评论 

**必选参数 :** `id`: mv id

**可选参数 :**

 `limit`: 取出评论数量 , 默认为 20

`offset`: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值

**接口地址 :** https://autumnfish.cn/comment/mv





