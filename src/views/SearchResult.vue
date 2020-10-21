<template>
  <a-layout>
    <a-layout-header :style="{ width: '100%',backgroundColor: '#fff',borderBottom: '1px solid #e8e8e8' }">
      <Nav :nav-items=navItems>
        <a-input-search placeholder="输入小说名或作者名进行搜索" @search="onSearch" />
      </Nav>
    </a-layout-header>
    <a-layout-content>
      <a-row :style="{minHeight:'800px'}">
        <a-col v-for="item in books" :xl="8" :md="12" :sm="24" :xs="24">
          <div style="margin: 10px">
            <Book :book=item></Book>
          </div>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center">
        <a-pagination show-quick-jumper :default-current="1" :total=totalPage @change="onChange" />
      </a-row>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      枕书席文 ©2020 Created by 枕书席文制作组
    </a-layout-footer>
  </a-layout>
</template>

<script>
  import Nav from "../components/Nav";
  import Book from "../components/Sort/Book";
  import axios from "axios";
  export default {
    name: "SearchResult",
    data() {
      return {
        navItems:[
          {
            text:'主页',
            path:'/home'
          },
          {
            text:'分类',
            path:'/sort/0000'
          }],
        totalPage:50,
        books:[]
      }
    },
    props:{
      value:String
    },
    methods:{
      onSearch(value) {
        this.$router.push('/searchResult/' + value)
      },
      onChange(nowPage) {
        axios({
          url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/listByKey',
          method:'post',
          data:JSON.stringify({
            "currentPage": nowPage,
            "key": this.$route.params.value,
            "orderKey": "update_time",
            "pageSize": 10,
            "searchCount": false
          })
        }).then(res => {
          this.books = res.data.data.list
        })
      }
    },
    mounted() {
      axios({
        url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/listByKey',
        method:'post',
        data:JSON.stringify({
          "currentPage": 1,
          "key": this.$route.params.value,
          "orderKey": "update_time",
          "pageSize": 10,
          "searchCount": false
        })
      }).then(res => {
        // console.log(res);
        this.totalPage = res.data.data.pages*10
        this.books = res.data.data.list
      })
    },
    components:{
      Book,
      Nav
    }
  }
</script>

<style scoped>

</style>