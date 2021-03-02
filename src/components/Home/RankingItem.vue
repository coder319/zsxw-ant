<template>
  <div @mouseover="toActive" @mouseleave="toNoactive">
<!--    <div class="text noactive" v-if="!isActive">-->
<!--      {{num}} {{bookName}}  {{bookAuthor}}-->
<!--    </div>-->
    <div class="text active">
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
  .text{
    /*background-color: #ebfbf9;*/
    height: 74px;
    display: flex;
    line-height: 45px;
    border-top: 2px solid #f6f6f6;
  }
  .active div{
    flex: 1;
  }

  .noactive{
    margin: 2px 0;
    /*height: 15px;*/
  }

  img{
    margin: 7px;
    height: 60px;
    width: 40px;
  }
</style>