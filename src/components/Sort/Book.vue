<template>
  <div id="container">
    <a-card :body-style="{padding:'10px'}">
      <div id="cardBody">
        <div id="cover">
          <img :style="{cursor:'pointer'}" @click=toChapterList() :src=book.pic />
        </div>
        <div id="massage">
          <h2 :style="{cursor:'pointer'}" @click=toChapterList()>{{book.title}}</h2>
          <p id="biaoqian">
            <a href="" target="blank">{{book.author}}</a>
            |
            <a href="#" target="blank">{{book.categoryName}}</a>
            |
            <span v-if="book.serialoze===1">连载中</span>
            <span v-else>完结</span>
          </p>
          <p id="jianjie">
            {{book.introduce}}
          </p>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>

  let cover = require("../../assets/img/picture1.jpg")
  export default {
    name: "Book",
    props:{
      book:{}
    },
    computed:{
      chapterList() {
        return '/chapterList/' + this.book.title + '/' + this.book.id
      }
    },
    methods:{
      toChapterList() {
        this.$router.push(this.chapterList)
      }
    }
  }
</script>

<style scoped>
  #cardBody{
    display: flex;
  }
  #massage{
    height: 202px;
    /*min-width: 300px;*/

    overflow: hidden;

    display: flex;
    flex-wrap: wrap;
  }
  #massage h2 {
    width: 100%;
  }
  #cover img{
    width: 160px;
    margin: 5px;
  }
</style>