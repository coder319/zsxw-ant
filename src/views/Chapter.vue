<!--
 * @Description: 
 * @Author: Wangtr
 * @Date: 2020-09-07 15:47:21
 * @LastEditTime: 2021-03-02 17:08:22
 * @LastEditors: Wangtr
 * @Reference: 
-->
<template>
  <a-layout>
    <a-layout-header :style="{width: '100%',backgroundColor: '#fff',borderBottom: '1px solid #e8e8e8' }">
      <Nav :nav-items=navItems :default-key=defaultKey></Nav>
    </a-layout-header>
    <a-layout-content>
      <a-card>
        <a-row type="flex" justify="center">
          <a-col :span="20">
            <h1>{{book.title}}</h1>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="20" :offset="2">
            <p v-for="(item,i) in content" :key="i">{{item}}</p>
          </a-col>
        </a-row>
      </a-card>
    </a-layout-content>
  </a-layout>
</template>

<script>
  import axios from 'axios'
  import Nav from "../components/Nav";

  export default {
    name: "Chapter",
    data() {
      return {
        defaultKey:[''],
        navItems:[
          {
            text:'主页',
            path:'/home'
          },
          {
            text:'分类',
            path:'/sort'
          },
          {
            text:'历史记录',
            path:'/history'
          }],
        book:{
          "author": "string",
          "content": "string",
          "id": 0,
          "novelId": 0,
          "novelTitle": "string",
          "title": "string",
          "updateTime": "2020-09-07T08:26:44.444Z"
        }
      }
    },
    computed:{
      apiHeader() {
        return this.$store.state.apiHost + this.$store.state.apiPost
      },
      content() {
        return this.book.content.split('      ')
      }
    },
    mounted() {
      let chapterId = this.$route.params.chapterId
      axios({
        url:this.apiHeader + '/api/chapter/getChapterDetailByChapterId',
        method:'post',
        params:{
          chapterId
        }
      }).then(res => {
        // console.log(res.data.data);
        this.book=res.data.data
      })
    },
    components:{
      Nav
    }
  }
</script>

<style scoped>

</style>