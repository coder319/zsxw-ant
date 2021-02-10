<template>
  <a-layout>
    <a-layout-header :style="{backgroundColor:'#fff'}">
      <Nav :nav-items=navItems :default-key=defaultKey ></Nav>

    </a-layout-header>
    <a-layout-content>
      <a-row>
        <div :style="{margin: '10px 5px'}">
          <a-radio-group v-model="categoryId" @change="onChangeC">
            <a-radio-button value="0000">
              全部
            </a-radio-button>
            <a-radio-button v-for="item in category" :value=item.id>
              {{item.categoryName}}
            </a-radio-button>


            <!--这个地方我想就一排，超过隐藏但是我不知道哪里加这几个地方有的加不了overflow有的加了没用，然后我觉得这个页面也差不多了-->


          </a-radio-group>
        </div>
      </a-row>
      <a-row>
        <a-col v-for="item in books" :xl="8" :md="12" :sm="24" :xs="24">
          <div style="margin: 10px">
            <Book :book=item></Book>
          </div>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center">
        <a-pagination show-quick-jumper :default-current="1" :current="nowPage" :total=totalPage @change="onChangeP" />
      </a-row>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      枕书席文 ©2020 Created by 枕书席文制作组
    </a-layout-footer>
  </a-layout>
</template>

<script>
  import axios from 'axios'
  import Nav from "../components/Nav";
  import Book from "../components/Sort/Book";


  export default {
    name: "Sort",
    data() {
      return {
        category:[],
        nowPage:1,
        categoryId:'0000',
        defaultKey:['/sort'],
        navItems:[
          {
            text:'主页',
            path:'/home'
          },
          {
            text:'分类',
            path:'/sort'
          }],
        totalPage:50,
        books:[]
      }
    },
    methods:{
      onChangeP(nowPage) {
        this.nowPage = nowPage
        if(this.categoryId === '0000') {
          axios({
            url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/all/get',
            method:'post',
            data:{
              "currentPage": this.nowPage,
              "orderKey": "update_time",
              "pageSize": 18,
              "searchCount": false
            }
          }).then( res => {
            this.totalPage = res.data.data.pages*10
            this.books = res.data.data.list
          })
        }
        else{
          axios({
            url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/listByCategory',
            method:'post',
            data:{
              "categoryId":this.categoryId,
              "currentPage": this.nowPage,
              "orderKey": "update_time",
              "pageSize": 18,
              "searchCount": false
            }
          }).then( res => {
            this.totalPage = res.data.data.pages*10
            this.books = res.data.data.list
          })
        }
      },
      onChangeC(nowPage) {
        this.nowPage = 1
        if(this.categoryId === '0000') {
          axios({
            url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/all/get',
            method:'post',
            data:{
              "currentPage": this.nowPage,
              "orderKey": "update_time",
              "pageSize": 18,
              "searchCount": false
            }
          }).then( res => {
            this.totalPage = res.data.data.pages*10
            this.books = res.data.data.list
          })
        }
        else{
          axios({
            url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/listByCategory',
            method:'post',
            data:{
              "categoryId":this.categoryId,
              "currentPage": this.nowPage,
              "orderKey": "update_time",
              "pageSize": 18,
              "searchCount": false
            }
          }).then( res => {
            this.totalPage = res.data.data.pages*10
            this.books = res.data.data.list
          })
        }
      }
    },
    components:{
      Nav,
      Book
    },
    created() {
      axios({
        url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/category/get'
      }).then(res => {
        this.category = res.data.data
      })
    },
    mounted() {
      this.categoryId = this.$route.params.categoryId
      if(this.$route.params.categoryId === '0000'){
        axios({
          url: this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/all/get',
          method: 'post',
          data: {
            "currentPage": 1,
            "orderKey": "update_time",
            "pageSize": 18,
            "searchCount": false
          }
        }).then( res => {
          this.totalPage = res.data.data.pages*10
          this.books = res.data.data.list
          this.loading = false
        })
      }
      else{
        axios({
          url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/listByCategory',
          method:'post',
          data:{
            "categoryId":this.$route.params.categoryId,
            "currentPage": 1,
            "orderKey": "update_time",
            "pageSize": 18,
            "searchCount": false
          }
        }).then( res => {
          this.totalPage = res.data.data.pages*10
          this.books = res.data.data.list
        })
      }

    }
  }
</script>

<style scoped>
  .el-footer{
    display: flex;
    justify-content: center;
  }
</style>