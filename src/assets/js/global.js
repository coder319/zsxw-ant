//存放非网络请求的全局函数
export default {
  //账号初始化，查看本地是否有登陆记录，如果有就更新VueX状态，如果没有就跳转到登陆界面
  accountInit() {
    if(window.localStorage) {
      let user = window.localStorage.getItem("user")
      // console.log(user);
      return JSON.parse(user)
    }
    else{
      this.$router.push('/login')
    }
  },
}