<template>
  <el-carousel :interval="4000" type="card" height="250px" arrow='hover'>
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <span class="title" :style="{backgroundColor: item.titleColor}">
        {{ item.typeTitle }}
      </span>
      <a :href="item.url" target="_blank">
        <img  :src="item.imageUrl" alt="">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'individuationSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.el-carousel {
  overflow: hidden;
  margin: 10px 0 30px;
}
 .el-carousel__item {
   height: 100%;
   overflow: hidden;
 }
.el-carousel__item a img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.title {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 12px;
  color: #fff;
  height: 10px;
  line-height: 10px;
  padding: 5px 10px;
  background-color: red;
  text-align: center;
  border-radius: 10px 0 10px 0;
}

</style>
