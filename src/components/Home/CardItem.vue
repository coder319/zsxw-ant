<template>
  <div>
    <!--<p v-for="book in books" :style="{cursor:'pointer'}" @click="toNovel(book.title,book.id)">{{book.title}}   {{book.author}}</p>-->
    <Homebook></Homebook>

    <!--我现在的想法是这个卡片里面放6本书，每本一个图一个名字，我现在这样好像不行看看这么搞，还有复用我是直接粘贴6个嘛-->
    <!--我现在的想法是这个卡片里面放6本书，每本一个图一个名字，我现在这样好像不行看看这么搞，还有复用我是直接粘贴6个嘛-->
    <!--我现在的想法是这个卡片里面放6本书，每本一个图一个名字，我现在这样好像不行看看这么搞，还有复用我是直接粘贴6个嘛-->
    <!--怕你看不见多写几遍-->

  </div>
</template>

<script>
  /*import axios from "axios";*/
  import Homebook from "./Homebook";

  export default {
    name: "CardItem",
    data() {
      return{
        /*books:[]*/
      }
    },
    props:{
      categoryId:''
    },
    methods:{
      /*toNovel(title,id) {
        this.$router.push('/chapterList/' + title + '/' + id)
      }*/
    },
    mounted() {
      /*
      axios({
        url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/listByCategory',
        method:'post',
        data:{
          "categoryId":this.categoryId,
          "currentPage": 1,
          "orderKey": "update_time",
          "pageSize": 5,
          "searchCount": false
        }
      }).then( res => {
        this.books = res.data.data.list
      })*/
    },
    components:Homebook
  }
</script>

<style scoped>

</style>