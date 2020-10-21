<template>
  <a-comment>
    <template slot="actions">
      <span key="comment-basic-like">
        <a-tooltip title="赞">
          <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
        </a-tooltip>
        <span :style="{paddingLeft: '8px',cursor: 'auto'}">
          {{ contents.up }}
        </span>
      </span>
    </template>
    <a slot="author">{{contents.username}}</a>
    <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
    />
    <p slot="content">
      {{contents.content}}
    </p>
  </a-comment>
</template>

<script>
  export default {
    name: "Comment",
    data() {
      return {
        likes: 0,
        action: null
      };
    },
    props:{
      contents:{
        content: String,
        createTime: String,
        id: Number,
        novelId: Number,
        up: Number,
        userId: Number,
        username: String
      }
    },
    methods: {
      like() {
        this.contents.up++;
        this.action = 'liked';
      }
    },
  }
</script>

<style scoped>

</style>