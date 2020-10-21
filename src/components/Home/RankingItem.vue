<template>
  <div id="ranking-item" @mouseover="toActive" @mouseleave="toNoactive">
    <div class="text" id="noactive" v-if="!isActive">
      {{num}} {{bookName}}  {{bookAuthor}}
    </div>
    <div class="text" id="active" v-else>
      <div>
        {{num}} {{bookName}}  {{bookAuthor}}
      </div>
      <img :src=bookCover alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "RankingItem",
    data() {
      return{
        isActive: false
      }
    },
    props:{
      num:String,
      bookName:String,
      bookAuthor:{
        type:String,
        default:'未知'
      },
      bookCover:String
    },
    methods:{
      toActive() {
        this.isActive=true
      },
      toNoactive() {
        this.isActive=false
      }
    }
  }
</script>

<style scoped>
  #ranking-item{
  }

  #active{
    background-color: #ebfbf9;
    height: 90px;
    display: flex;
    line-height: 90px;
  }
  #active div{
    flex: 1;
  }

  #noactive{
    margin: 5px 0;
    height: 30px;
  }

  img{
    margin: 15px;
    height: 60px;
    width: 40px;
  }
</style>