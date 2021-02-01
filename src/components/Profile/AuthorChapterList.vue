<template>
  <div>
    11111
  </div>
</template>

<script>
  export default {
    name: "AuthorChapterList",
    data () {
      return {
        // 当前折叠板的章节列表
        list:[]
      }
    },
    props:{
      // 当前折叠板的小说ID
      bookId:{
        type:Number,
        default:-1
      }
    },
    created() {
      if(this.bookId == -1) {
        alert('小说id错误！')
      }
      else{
        this.list = this.$http.getChapterById(this.bookId)
      }
    }
  }
</script>

<style scoped>

</style>