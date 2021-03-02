<template>
  <div>
    <a-layout>
      <a-layout-content>
        <a-row class="index-item-border index-header">
          <a-col :xs="{span: '4', offset:'2'}" :md="{span: '4', offset:'1'}">
            <div :style="{height: '90px'}">
              <a-avatar :src=this.$store.state.user.headImg
                        class="index-header-item"
                        :size="60">
              </a-avatar>
            </div>
          </a-col>
          <a-col :xs="{span: '6', offset:'1'}" :md="6">
            <div id="userName">
              {{this.$store.state.user.username}}
              <a-tag class="wei" size="mini">Lv.{{this.$store.state.user.level}}</a-tag>
            </div>
          </a-col>
          <a-col :xs="{span: '4', offset:'6'}" :md="{span: '4', offset:'6'}">
            <div :style="{height: '90px'}">
              <a-progress class="index-header-item"
                          :width=size
                          type="circle"
                          :format="() =>this.$store.state.user.exp + '/30'"
                          :percent=exp>
              </a-progress>
            </div>
          </a-col>
        </a-row>


        <a-row class="index-item-carousel index-item-margin">
          <a-col :xs="24" :md="24">
            <a-carousel :autoplay='true' >
              <div v-for="(item,n) in cover" :key="n">
                <img height="200px" width="100%"  :src=item />
              </div>
            </a-carousel>
            <a-col :xs="{span:'8',offset:'9'}" :md="{span:'6',offset:'9'}" >
              <div class="index-item-carousel-text"
                   @click="toFavorite">查看完整收藏夹</div>
            </a-col>
          </a-col>
        </a-row>

        <a-row>
          <a-col class="index-item-border" :xs="8" :md="8">
            <div class="index-item-margin">
              <div >账户余额</div>
              <div><span class="text">0</span>书币</div>
              <a-divider></a-divider>
              <div class="index-link">充值</div>
            </div>
          </a-col>
          <a-col class="index-item-border" :xs="8" :md="8">
            <div class="index-item-margin">
              <div>阅读记录</div>
              <div><span class="text">0</span>本小说</div>
              <a-divider></a-divider>
              <div class="index-link"
                   @click="toHistory">
                查看完整记录
              </div>
            </div>
          </a-col>
          <a-col class="index-item-border" :xs="8" :md="8">
            <div class="index-item-margin">
              <div >推荐票</div>
              <div><span class="text">{{this.$store.state.user.recommend}}</span>张</div>
              <a-divider></a-divider>
              <div class="index-link">充值</div>
            </div>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
  import pic1 from "@/assets/img/picture1.jpg"
  import pic2 from "@/assets/img/picture2.jpg"
  import pic3 from "@/assets/img/picture3.jpg"
  import pic4 from "@/assets/img/picture4.jpg"

  export default {
    name: "Index",
    data() {
      return {
        size:60,
        toPageHis:'page4',
        toPageFav:'page3',
        cover:[pic1,pic2,pic3,pic4]
      }
    },
    methods:{
      toFavorite() {
        this.$emit("changePage",this.toPageFav)
        this.backtop()
      },
      toHistory() {
        this.$emit("changePage",this.toPageHis)
        this.backtop()
      },
      backtop(){
        var timer = setInterval(function(){
          let osTop = document.documentElement.scrollTop || document.body.scrollTop;
          let ispeed = Math.floor(-osTop / 5);
          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
          this.isTop = true;
          if(osTop === 0){
            clearInterval(timer);
          }
        },30)
      }
    },
    computed:{
      exp() {
        return ((this.$store.state.user.exp)/30)*100
      }
    }
  }
</script>

<style scoped>
  .ant-row{
    background-color: #fff;
  }
  .wei{
    position: relative;
    transform: translateY(-5px);
  }
  .text{
    font-size: 30px;
    margin: 0 5px;
  }
  .index-item-margin{

  }
  .index-item-border{
    border: 1px solid #E4E7ED;
  }
  .index-header{
    height: 90px;
  }
  .index-header-item{
    margin: 15px 0;
  }

  .index-link{
    cursor: pointer;
  }
  .index-link:hover {
    cursor: pointer;
    color: purple;
  }
  .index-item-carousel{
    height: 225px;
  }
  .index-item-carousel-text{
    cursor: pointer;
  }
  .index-item-carousel-text:hover {
    cursor: pointer;
    color: purple;
  }
  #userName{
    height: 90px;
    font-size: 30px;
    line-height: 90px;
    text-align: center;
    min-width: 174px;
  }

</style>