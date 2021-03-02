<template>
  <a-layout >
    <a-layout-content class='login'>
      <a-col :md="{span: '6', offset: '9'}" :sm="{span:'10',offset:'7'}">
        <div :style="{paddingTop: '60px',minWidth:'316px'}">
          <a-card class="box-card">
            <div id="logo" slot="title">
              <img src="../assets/img/logo.jpg"
                   alt="logo"
                   @click="routeTo('/home')">
            </div>
            <p>
              <a-input v-model="userName" placeholder="请输入用户名">
                <a-icon slot="prefix" type="user" />
              </a-input>
            </p>
            <p>
              <a-input v-model="email" placeholder="请输入账号">
                <a-icon slot="prefix" type="user" />
                <a-tooltip slot="suffix" title="账号必须是邮箱地址">
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
              <a-input-password placeholder="确认密码"
                                v-model="repasswd">
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
              <a-button type="primary" round @click="back">返回登陆</a-button>
              <a-button type="primary" round @click="commitRegister">发送激活邮件</a-button>
            </div>
          </a-card>
        </div>

      </a-col>
    </a-layout-content>
  </a-layout>

</template>

<script>
  import axios from 'axios'
  axios.defaults.headers['Content-Type'] = 'application/json'

  export default {
    name: "Login",
    data() {
      return {
        userName:'',
        email:'',
        passwd:'',
        repasswd:'',
        sex:'男',
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
      routeTo(path) {
        this.$router.push(path)
      },
      back() {
        this.$router.back()
      },
      getVcode() {
        axios({
          url:this.apiHeader + '/api/verificationCode'
        }).then(res => {
          this.vCodeImg=res.data.data.code
          this.vCodeUuid=res.data.data.uuid
        })
      },
      commitRegister() {
        axios({
          url:this.apiHeader + '/api/register',
          method:'post',
          data:JSON.stringify({
            "code": this.vCode,
            "codeUuid": this.vCodeUuid,
            "email": this.email,
            "password": this.passwd,
            "sex": this.sex,
            "username": this.userName
          })
        }).then(res => {
          console.log(res.data.code);
          if(res.data.code === 1) {
            alert('注册成功，三秒后跳转到主页!')
            setTimeout(()=>{this.$router.push('/home')},3000)
          }
        })
      }
    },
    mounted() {
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
    padding: 0 10%;
  }
  .el-button{
    margin: 5px 30px;
  }
  .box-card{
    border: 0;
  }
</style>