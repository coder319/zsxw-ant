<template>
  <div id="main">
    <a-button id="btn" type="primary" @click="showDrawer"> <a-icon type="plus" /> 发表新的小说 </a-button>
    <a-drawer
            title="填写小说相关信息"
            :height="620"
            :visible="visible"
            :body-style="{paddingBottom:'80px'}"
            placement="bottom"
            @close="onClose"
    >
      <a-form-model :model="form" layout="vertical" >
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-model-item label="小说名称">
              <a-input v-model="form.title"/>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="小说封面">
              <UpLoadPic @getPic="getPic"></UpLoadPic>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-model-item label="小说类型">
              <a-select
                      v-model="form.categoryId"
                      placeholder="选择小说类型"
              >
                <a-select-option v-for="item in category" :value=item.id>
                  {{item.categoryName}}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-model-item label="简介">
              <a-textarea
                      v-model="form.introduce"
                      :rows="4"
                      placeholder="填写小说的简单介绍"
              />
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>
      <div
              :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          取消
        </a-button>
        <a-button type="primary" @click="submit">
          发布新小说
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
  import axios from 'axios'
  import UpLoadPic from "./UpLoadPic";

  export default {
    name: 'NewBook',
    data() {
      return {
        category:Array,
        form: {
          categoryId: 1111,
          introduce: '',
          pic: '',
          title: ''
        },
        visible: false,
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
      getPic(data) {
        this.form.pic = data
      },
      submit() {
        // console.log(this.form);
        axios({
          url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/create',
          method:'post',
          headers: {
            "x-access-token":this.$store.state.user.xaccessToken
          },
          data:JSON.stringify(this.form)
        }).then(res => {
          // console.log(res.data.code);
          console.log('submit success!')
          this.visible = false
          this.f5()
        })
      },
      //刷新我的小说面板列表
      f5() {
        console.log('f5!!');
        axios({
          url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/novel/author/get',
          method:'get',
          headers: {
            "x-access-token":this.$store.state.user.xaccessToken
          },
        }).then(res => {
          let myBooks = res.data.data
          this.$emit('f5',myBooks)
        })
      }
    },
    created() {
      axios({
        url:this.$store.state.apiHost + this.$store.state.apiPost + '/api/category/get'
      }).then(res => {
        this.category = res.data.data
      })
    },
    components:{
      UpLoadPic
    }
  };
</script>

<style>
  #main{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  #btn{
    margin: 50px 0;
  }
</style>