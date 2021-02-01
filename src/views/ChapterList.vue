<template>
  <a-layout>
    <a-layout-header :style="{padding:'0'}">
      <a-page-header
              :title=this.$route.params.novelName
              sub-title="当前查看的小说"
              :ghost=false
              @back="goBack"
      />
    </a-layout-header>
    <a-layout-content :style="">
      <a-row>
        <a-card>
          <a-col :span="24" :offset="0">
            <Book :book=book></Book>
          </a-col>
        </a-card>
      </a-row>
      <a-row>
        <a-card >
          <a-tabs default-active-key="1" >
            <a-tab-pane key="1" tab="目录">
              <a-col v-for="item in list" :span="24" >
                <p :style="{cursor:'pointer'}" @click="toChapter(item)">{{item.title}}</p>
              </a-col>
            </a-tab-pane>
            <a-tab-pane key="2" tab="评论">
              <a-button v-if="this.$store.state.userState === -1" @click="toPage('/login')">登陆后发表评论</a-button>
              <CreateComment v-else :novel-id=id></CreateComment>
              <a-divider />
              <Comment v-for="item in comments" :contents=item></Comment>
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-row>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      枕书席文 ©2020 Created by 枕书席文制作组
    </a-layout-footer>
  </a-layout>
</template>

<script>
  import axios from "axios";
  import Book from "../components/Sort/Book";
  import Comment from "../components/ChapterList/Comment"
  import CreateComment from "../components/ChapterList/CreateComment";

  export default {
    name: "ChapterList",
    data() {
      return {
        id:Number,
        list:Array,
        book:Object,
        commentContent:'',
        comments:[],
        comment:{
          content: "stringsadfasffasdasdasdasd",
          createTime: "2020-09-09T05:56:38.198Z",
          id: 0,
          novelId: 0,
          up: 0,
          username: "strindfsdfsdg"
        }
      }
    },
    computed:{
      apiHeader() {
        return this.$store.state.apiHost + this.$store.state.apiPost
      }
    },
    methods:{
      toChapter(item) {
        let path = '/chapter/' + item.title + '/' + item.id
        this.$router.push(path)
      },
      toPage(path) {
        this.$router.push(path)
      },
      goBack() {
        this.$router.back()
      }
    },
    mounted() {
      this.id = this.$route.params.novelId

      axios({
        url:this.apiHeader + '/api/novel/getNovelDetail',
        method:'post',
        params:{
          novelId:this.id
        }
      }).then(res => {
        this.book = res.data.data
      })

      axios({
        url:this.apiHeader + '/api/chapter/listByNovelId',
        method:'post',
        data:JSON.stringify({
          "novelId":this.id,
          "currentPage": 1,
          "orderKey": "update_time",
          "pageSize": 200,
          "searchCount": false
        })
      }).then(res => {
        this.list = res.data.data.list
      })

      axios({
        url:this.apiHeader + '/api/comment/listCommentByNovelIdOrderByUp',
        method:'post',
        // params:{
        //
        // },
        data:JSON.stringify({
          "novelId":this.id,
          "currentPage": 1,
          "orderKey": "update_time",
          "pageSize": 10,
          "searchCount": false
        })
      }).then(res => {
        console.log(res.data.data.list);
        this.comments = res.data.data.list
      })
    },
    components:{
      Book,
      Comment,
      CreateComment
    }
  }
</script>

<style scoped>

</style>