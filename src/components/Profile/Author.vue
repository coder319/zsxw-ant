<template>
  <div>
    <h2 v-if="myBooks.length<1">暂无小说</h2>
    <a-collapse v-else>
      <a-collapse-panel v-for="(book,num) in myBooks" :key=num :header=book.title>
        <a-icon slot="extra" type="delete" @click="deleteBook(book.id)" />

        <p>123</p>

      </a-collapse-panel>
    </a-collapse>
    <NewBook></NewBook>
    <a-button typy="primary" @click="f5">刷新</a-button>
  </div>
</template>

<script>
  import axios from 'axios'
  import NewBook from "./NewBook";

  export default {
    name: "Author",
    data() {
      return {
        myBooks:[]
      };
    },
    methods:{
      f5() {
        axios({
          url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/author/get',
          method:'get',
          headers: {
            "x-access-token":this.$store.state.user.xaccessToken
          },
        }).then(res => {
          this.myBooks = res.data.data
        })
      },
      deleteBook(bookId) {
        axios({
          url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/delete',
          method:'post',
          headers:{
            "x-access-token": this.$store.state.user.xaccessToken
          },
          params:{
            novelId:bookId
          }
        }).then(res => {
          console.log(res);
        })
      }
    },
    mounted() {
      axios({
        url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/author/get',
        method:'get',
        headers: {
          "x-access-token":this.$store.state.user.xaccessToken
        },
      }).then(res => {
        this.myBooks = res.data.data
      })
    },
    components:{
      NewBook
    }
  }
</script>

<style scoped>

</style>