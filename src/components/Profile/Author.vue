<template>
  <div>
    <h2 v-if="myBooks.length<1">暂无小说</h2>
<!--    <a-collapse v-else :destroyInactivePanel="true">-->
    <a-collapse v-else>
      <a-collapse-panel
              v-for="(book,num) in myBooks"
              :key=num
              :header=book.title>
        <a-icon slot="extra" type="delete" @click.stop="deBook(book.id)" />
<!--        小说章节显示组件-->
        <AuthorChapterList :book-id="book.id"></AuthorChapterList>
<!--          <div>-->
<!--            <p>1111</p>-->
<!--            <p>2222</p>-->
<!--            <p>3333</p>-->
<!--          </div>-->
      </a-collapse-panel>
    </a-collapse>
    <NewBook @f5="submited"></NewBook>
<!--    <a-button typy="primary" @click="f5">刷新</a-button>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import NewBook from "./NewBook"
  import AuthorChapterList from "./AuthorChapterList";

  export default {
    name: "Author",
    data() {
      return {
        myBooks:[]
      };
    },
    methods:{
      f5() {
        console.log('f5!!');
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
      deBook(bookId) {
        console.log('deleted!!!');
        axios({
          url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/delete',
          method:'post',
          headers:{
            "x-access-token": this.$store.state.user.xaccessToken
          },
          params:{
            novelId:bookId
          }
        }).then( res => {
          this.f5()
        }).catch( err => {
          console.log(err);
        })
      },
      //
      submited(chBooks) {
        this.myBooks = chBooks
      }
    },
    created() {
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
      NewBook,
      AuthorChapterList
    }
  }
</script>

<style scoped>

</style>