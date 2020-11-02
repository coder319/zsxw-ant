<template>
  <div>
    <p v-for="book in books" :style="{cursor:'pointer'}" @click="toNovel(book.title,book.id)">{{book.title}}   {{book.author}}</p>
  </div>
</template>

<script>
  import axios from "axios";

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
      toNovel(title,id) {
        this.$router.push('/chapterList/' + title + '/' + id)
      }
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
    }
  }
</script>

<style scoped>

</style>