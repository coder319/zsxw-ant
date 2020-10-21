<template>
  <a-layout>
    <a-layout-header :style="{padding:'0'}">
      <a-page-header @back="goBack" title="个人主页" :ghost="false">
      </a-page-header>
    </a-layout-header>
    <a-layout-content :style="{minHeight:'768px',backgroundColor: '#fff',margin:'1% 10%'}">
      <a-col :md="18" :offset="3">
        <a-tabs
                type="line"
                tab-position="top"
                :active-key=nowPage
                @change="callback"
                stretch=true>
          <a-tab-pane key="page1" tab="主页" >
            <Index @changePage="changePage"></Index>
          </a-tab-pane>
          <a-tab-pane key="page2" tab="修改信息" >
            <Setting></Setting>
          </a-tab-pane>
          <a-tab-pane key="page3" tab="收藏夹" >收藏夹</a-tab-pane>
          <a-tab-pane key="page4" tab="阅读记录" >阅读记录</a-tab-pane>
          <a-tab-pane key="page5" tab="我的评论" >我的评论</a-tab-pane>

          <a-tab-pane v-if="this.$store.state.user.role === 'user'" key="page6" tab="成为作者" >成为作者</a-tab-pane>
          <a-tab-pane v-else-if="this.$store.state.user.role === 'author'" key="page6" tab="我的小说" >
            <Author></Author>
          </a-tab-pane>
          <a-tab-pane v-else key="page6" tab="管理界面" >管理</a-tab-pane>
        </a-tabs>
      </a-col>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      枕书席文 ©2020 Created by 枕书席文制作组
    </a-layout-footer>
  </a-layout>
</template>

<script>
  import Index from "../components/Profile/Index";
  import Setting from "../components/Profile/Setting";
  import Author from "../components/Profile/Author";

  let logo = require('@/assets/img/logo.jpg')

  export default {
    name: "Profile",
    data() {
      return {
        nowPage:"page1"
      }
    },
    methods:{
      goBack() {
        this.$router.back()
      },
      callback(key) {
        this.nowPage = key
      },
      changePage(toPage) {
        this.nowPage = toPage
      }
    },
    created() {
      if(this.$store.state.userState===-1) {
        this.$router.push('/login')
      }
    },
    components:{
      Index,
      Setting,
      Author
    }
  }
</script>

<style scoped>
</style>