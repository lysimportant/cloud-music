<template>
  <el-carousel :interval="4000" type="card" height="250px" arrow='hover'>
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <span class="title" :style="{backgroundColor: item.titleColor}">
        {{ item.typeTitle }}
      </span>
      <a :href="item.url">
        <img :src="item.imageUrl" alt="">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "individuationSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
 .el-carousel__item {
   height:90%;
 }
.el-carousel__item a img {
  width: 100%;
  height: 90%;
  border-radius: 20px;
}
.el-carousel {
  margin:  10px 20px 5px;
}
.title {
  position: absolute;
  right: 0;
  bottom: 22px;
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
