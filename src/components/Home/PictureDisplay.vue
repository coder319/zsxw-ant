<template>
    <a-carousel :autoplay=true>
      <div v-for="(item,n) in imgsrc" :key="n">
        <img :src=item alt="">
      </div>
    </a-carousel>
</template>

<script>
  let img1 = require("../../assets/img/picture1.jpg")
  let img2 = require("../../assets/img/picture2.jpg")
  let img3 = require("../../assets/img/picture3.jpg")
  let img4 = require("../../assets/img/picture4.jpg")

  export default {
    name: "PictureDisplay",
    data() {
      return{
        imgsrc:[img1,img2,img3,img4]
      }
    },
    methods:{

    }
  }
</script>

<style scoped>

  img {
    height: 150px;
    width: 100%;
  }
  .el-carousel-item{
    text-align: center;
  }
</style>