<!-- * @Description:
 * @Author: Wangtr
 * @Date: 2020-09-10 20:52:32
 * @LastEditTime: 2021-03-02 16:56:56
 * @LastEditors: Wangtr
 * @Reference: -->
<template>
  <div>
    <!--<p v-for="book in books" :style="{cursor:'pointer'}" @click="toNovel(book.title,book.id)">{{book.title}}   {{book.author}}</p>-->
    <Homebook v-for="book in books" :data="book" class="book"></Homebook>

  </div>
</template>

<script>
  import axios from "axios";
  import Homebook from "./Homebook";

  export default {
    name: "CardItem",
    data() {
      return{
        books:[]
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
      })
    },
    components:{Homebook}
  }
</script>

<style lang="less" scoped>
.book{
  float: left;
  margin: 8px 12px;
}
</style>