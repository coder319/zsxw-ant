<!--
 * @Description: 
 * @Author: Wangtr
 * @Date: 2020-08-17 00:16:02
 * @LastEditTime: 2021-03-02 17:01:13
 * @LastEditors: Wangtr
 * @Reference: 
-->
<template>
  <a-row>
    <a-col :xs="1" :md="1">
        <a-menu
                theme="light"
                mode="horizontal"
                :default-selected-keys="defaultKey"
                :style="{ lineHeight: '32px',height: '32px'}"
        >
          <a-menu-item v-for="item in navItems" :key="item.path" @click="routeTo(item.path)">{{item.text}}</a-menu-item>
        </a-menu>
    </a-col>
    <a-col :xs="2" :md="{span:'2'}">
      <slot></slot>
    </a-col>
    <a-col :xs="{span:'1',offset:'2'}" :md="{span:'1',offset:'2'}">
      <a-avatar v-if="$store.state.userState===-1"
                :size="25" type="circle"
                @click="routeTo('/login')"
                :style="{margin: '3px 0 3px 0',cursor: 'pointer'}">
        <a-icon slot="icon" type="user" />
      </a-avatar>
      <a-avatar v-else
                :src="headImg"
                :size="25" type="circle"
                @click="routeTo('/profile')"
                :style="{margin: '3px 0 3px 0',cursor: 'pointer'}"
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
</style>