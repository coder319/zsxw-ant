<template>
  <a-card  id="ranking-list">
    <h2 class="card_h2">热门排行</h2>
    <RankingItem v-for="book in books" :book-name=book.title :book-cover=book.pic></RankingItem>
  </a-card>
</template>

<script>
  import RankingItem from "./RankingItem";
  import axios from 'axios'
  import pic1 from "../../assets/img/picture1.jpg"
  export default {
    name: "RankingList",
    data() {
      return{
        imgsrc:[pic1],
        books:[]
      }
    },
    computed:{
      apiHeader() {
        return this.$store.state.apiHost + this.$store.state.apiPost
      }
    },
    components:{
      RankingItem
    },
    mounted() {
      axios({
        url:this.apiHeader + '/api/novel/rank/day/get',
      }).then( res => {
        // console.log(res);
        this.books = res.data.data
      })
    }
  }
</script>

<style scoped>
  #ranking-list{
    margin-left: 2px;
    /*height: 180px;*/
  }
.card_h2{
  text-align: center;
  margin: 0;
}

</style>