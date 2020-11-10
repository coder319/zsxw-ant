<template>
  <div id="wrap">
    <form action="">
      <dl>
        <dt>
          <a-avatar :src=user.headImg
                    :size="53"
                    type="circle"
                    :style="{marginLeft:'17px'}"
          />
        </dt>
        <dd>{{user.email}}</dd>
      </dl>
      <dl>
        <dt>账户:</dt>
        <dd>{{user.email}}</dd>
      </dl>
      <dl>
        <dt>身份:</dt>
        <dd>{{user.role}}</dd>
      </dl>
      <dl>
        <dt>ID:</dt>
        <dd>{{user.id}}</dd>
      </dl>
      <dl>
        <dt>用户名:</dt>
        <dd>{{user.username}}</dd>
      </dl>
      <dl>
        <dt>性别:</dt>
        <dd>
          <a-radio-group name="radioGroup"  v-model="user.sex" >
            <a-radio value="未知">
              未知
            </a-radio>
            <a-radio value="男">
              男
            </a-radio>
            <a-radio value="女">
              女
            </a-radio>
          </a-radio-group>
        </dd>
      </dl>
      <dl>
        <dt style="float: left">简介:</dt>
        <dd>
          <a-textarea :style="{width:'300px'}" :auto-size="{minRows: 3, maxRows: 6}" v-model="user.introduce"/>
        </dd>
      </dl>
    </form>
      <a-button type="primary">保存修改</a-button>
  </div>
</template>

<script>

  export default {
    name: "Setting",
    data() {
      return {
        user:this.$store.state.user
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  dl{
    line-height: 20px;
    /*max-height: 30px;*/
    margin: 20px 0;
  }
  dt{
    display: inline-block;
    text-align: right;
    min-width: 70px;
  }
  dd{
    display: inline-block;
    margin-left:10px
  }
  label{
    padding-right:10px;
  }
</style>