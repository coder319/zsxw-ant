<template>
  <div>
    <a-card body-style="padding:0">
      <div id="sort-table">
        <div id="caption" class="text">作品分类</div>
        <div class="sorts text" :style="{cursor:'pointer'}" v-for="item in category" @click="toRoute('/sort/' + item.id)">
          {{item.categoryName}}
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
  export default {
    name: "SortTable",
    props:{
      category:Array
    },
    methods:{
      toRoute(path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>

  #sort-table{
    height: 300px;

    display: flex;
    flex-wrap: wrap;
  }

  .sorts{
    background-color: #ebfbf9;
    margin: 0 0.5%;
    width: 49%;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
  .sorts:nth-child(4n-1){
    background-color: #fff;
  }
  .sorts:nth-child(4n-2){
    background-color: #fff;
  }



  #caption{
    background-color: #ebfbf9;
    font-size: 25px;
    letter-spacing: 7px;

    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
</style>