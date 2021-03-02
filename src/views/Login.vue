<template>
  <a-layout >
    <a-layout-content class='login'>
        <a-col :md="{span: '6', offset: '9'}">
          <div :style="{paddingTop: '90px'}">
            <a-card class="box-card">
              <div id="logo" slot="title">
                <img src="../assets/img/logo.jpg"
                     alt="logo"
                     @click="routeTo('/home')">
              </div>
              <p>
                <a-input v-model="userName" placeholder="请输入账号">
                  <a-icon slot="prefix" type="user" />
                  <a-tooltip slot="suffix" title="用户名必须是邮箱地址">
                    <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                  </a-tooltip>
                </a-input>
              </p>
              <p>
                <a-input-password placeholder="请输入密码"
                                  v-model="passwd">
                </a-input-password>
              </p>
              <p>
                <a-input placeholder="请输入验证码"
                         v-model="vCode">
                </a-input>
              </p>
              <div id="vCode">
                <img :src=vCodeImg alt="vCode" @click="getVcode">
              </div>
              <div id="btn">
                <a-button type="primary" round @click="commitLogin">登陆</a-button>
                <a-button type="primary" round @click="routeTo('/register')">注册</a-button>
              </div>
            </a-card>
          </div>

        </a-col>
    </a-layout-content>
  </a-layout>

</template>

<script>
  import axios from 'axios'

  export default {
    name: "Login",
    data() {
      return {
        userName:'',
        passwd:'',
        vCode:'',
        vCodeImg:'',
        vCodeUuid:''
      }
    },
    computed:{
      apiHeader() {
        return this.$store.state.apiHost + this.$store.state.apiPost
      }
    },
    methods: {
      // 路由跳转
      routeTo(path) {
        this.$router.push(path)
      },
      // 获取验证码
      getVcode() {
        axios({
          url:this.apiHeader + '/api/verificationCode'
        }).then(res => {
          this.vCodeImg=res.data.data.code
          this.vCodeUuid=res.data.data.uuid
        })
      },
      // 提交登陆信息
      commitLogin() {

        axios.defaults.headers['Content-Type'] = 'application/json'

        axios({
          url:this.apiHeader + '/api/login',
          method:'post',
          data:JSON.stringify({
            code:this.vCode,
            codeUuid:this.vCodeUuid,
            loginName:this.userName,
            loginPwd:this.passwd
          })
        }).then(res => {
          if(res.data.code===1)
          {
            //登录信息更新到VueX状态中
            this.$store.commit("updateUserState",res.data.code);
            this.$store.commit("updateUser",res.data.data);
            // 用户信息存入localStorage
            let user = this.$store.state.user
            window.localStorage.setItem("user",JSON.stringify(user))
            // for(let key in user) {
            //   window.localStorage.setItem(key,user[key])
            // }
            this.$router.back()
          }
          else{
            //登陆失败报错，并重新获取验证码
            alert('login error，error code : '+ res.data.code)
            axios({
              url:this.apiHeader + '/api/verificationCode'
            }).then(res => {
              this.vCodeImg=res.data.data.code
              this.vCodeUuid=res.data.data.uuid
            })
          }

        })
      }
    },
    created() {
      axios({
        url:this.apiHeader + '/api/verificationCode'
      }).then(res => {
        this.vCodeImg=res.data.data.code
        this.vCodeUuid=res.data.data.uuid
      })
    }
  }
</script>

<style scoped>
  .login{
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  #logo {
    display: flex;
    justify-content: center;
  }
  #logo img {
    cursor: pointer;
  }
  .a-input {
    margin: 10px 0;
  }
  #vCode{
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
  #vCode img{
    cursor: pointer;
  }

  #btn{
    display: flex;
    justify-content: space-between;
    padding: 0 20%;
  }
  .el-button{
    margin: 5px 30px;
  }
  .box-card{
    border: 0;
  }
</style>