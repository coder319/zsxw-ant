<template>
  <a-row>
    <a-col :md="3">
      <img src="../assets/img/logo.jpg" id="logo" />
    </a-col>
    <a-col :md="5">
        <a-menu
                theme="light"
                mode="horizontal"
                :default-selected-keys="defaultKey"
                :style="{ lineHeight: '64px',height: '64px' }"
        >
          <a-menu-item v-for="item in navItems" :key=item.path @click="routeTo(item.path)">{{item.text}}</a-menu-item>
        </a-menu>
    </a-col>
    <a-col :md="{span:'8'}">
      <slot></slot>
    </a-col>
    <a-col :md="{span:'2',offset:'6'}">
      <a-avatar v-if="$store.state.userState===-1"
                :size="50" type="circle"
                @click="routeTo('/login')"
                :style="{margin: '7px 0 7px 0',cursor: 'pointer'}">
        <a-icon slot="icon" type="user" />
      </a-avatar>
      <a-avatar v-else
                :src="headImg"
                :size="50" type="circle"
                @click="routeTo('/profile')"
                :style="{margin: '7px 0 7px 0',cursor: 'pointer'}"
      />
    </a-col>
  </a-row>
</template>

<script>
  export default {
    name: "Nav",
    props:{
      navItems:{
        type:Array,
        default() {
          return []
        }
      },
      defaultKey:{
        type:Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        headImg: ''
      }
    },
    created() {
      this.headImg = this.$store.state.user.headImg
    },
    methods: {
      routeTo(path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
  #logo {
    width: 165px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    margin: 7px 24px 7px 0;
    float: left;
  }
</style>