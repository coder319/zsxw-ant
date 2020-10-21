<template>
  <a-comment>
    <template slot="actions">
      <span :style="{cursor: 'auto'}">
        <a-button type="primary" @click="commit">发表评论</a-button>
      </span>
    </template>
    <a slot="author">{{this.$store.state.user.username}}</a>
    <a-avatar
            slot="avatar"
            :src=this.$store.state.user.headImg
            alt="avatar"
    />
    <p slot="content">
      <a-textarea v-model="commentContent" placeholder="发表友善的评论" auto-size>
      </a-textarea>
    </p>
  </a-comment>
</template>

<script>
  import moment from 'moment'
  import axios from 'axios'
  export default {
    name: "CreateComment",
    data() {
      return {
        commentContent:''
      }
    },
    props:{
      novelId:Number
    },
    methods:{
      commit() {
        let content = this.commentContent
        // let createTime = moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss')
        let novelId = this.novelId
        let userId = this.$store.state.user.id

        axios({
          url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/comment/create',
          method:'post',
          headers: {
            "x-access-token":this.$store.state.user.xaccessToken
          },
          data:JSON.stringify({
            content,
            novelId,
            userId
          })
        }).then(res => {
          // console.log(res.data.code);
          if(res.data.code === 1){
            this.commentContent=''
            alert('评论成功')
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>