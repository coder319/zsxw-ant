<template>
<a-layout id="home">
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%',backgroundColor: '#fff',borderBottom: '1px solid #e8e8e8' }">
    <Nav :nav-items=navItems :default-key=defaultKey>
      <a-input-search placeholder="输入小说名或作者名进行搜索" @search="onSearch" />
    </Nav>
  </a-layout-header>
  <a-layout-content :style="{ padding: '15px 50px', marginTop: '64px',backgroundColor: '#fff' }">
    <a-row :gutter="20" style="margin: 10px 0">
      <a-col :md="4">
        <SortTable :category=category></SortTable>
      </a-col>
      <a-col :md="14">
        <PictureDisplay></PictureDisplay>
      </a-col>
      <a-col :md="6">
        <RankingList></RankingList>
      </a-col>
    </a-row>
    <a-row>
      <a-col v-for="item in category" :md="6">
        <div style="margin: 20px 10px ">
          <a-card :title=item.categoryName>
            <span :style="{cursor:'pointer'}" slot="extra" @click="toRoute('/sort/' + item.id)">更多</span>
            <CardItem :categoryId=item.id></CardItem>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </a-layout-content>
  <a-layout-footer :style="{ textAlign: 'center' }">
    枕书席文 ©2020 Created by 枕书席文制作组
  </a-layout-footer>
</a-layout>
</template>

<script>
import Nav from "../components/Nav";
import SortTable from "../components/Home/SortTable"
import PictureDisplay from "../components/Home/PictureDisplay"
import RankingList from "../components/Home/RankingList"
import CardItem from "../components/Home/CardItem";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      category: [],
      defaultKey: ['/home'],
      navItems: [{
          text: '主页',
          path: '/home'
        },
        {
          text: '分类',
          path: '/sort/0000'
        }
      ],
    }
  },
  methods: {
    toRoute(path) {
      this.$router.push(path)
    },
    onSearch(value) {
      this.$router.push('/searchResult/' + value)
    },
  },
  created() {
    axios({
      url: this.$store.state.apiHost + this.$store.state.apiPost + '/api/category/get'
    }).then(res => {
      this.category = res.data.data
    })
  },
  components: {
    Nav,
    SortTable,
    PictureDisplay,
    RankingList,
    CardItem
  }
}
</script>

<style>

</style>
