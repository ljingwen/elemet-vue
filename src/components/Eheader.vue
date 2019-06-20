<template>
<div>
    <!-- 头部 -->
    <header class="index-JMUSj_0">
      <div class="index-1DPx9_0">
        <div aria-label="当前地址：天河区元岗街社区卫生服务中心元岗医院，轻点两下重新选择" role="button" class="index-2S5Ah_0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="index-okfdP_0">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"
            ></path>
          </svg>
          <span class="index-2uW_v_0" v-text="someWhere"></span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index-2iXz3_0">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
    <!-- 头部end -->  
     <!-- 搜索框start -->
    <div role="button" class="search" :class="{'scrollToTop' : istrueScrollTop}" >
      <a class="content" @click="goToSearch()" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            fill-opacity="0.38"
            d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"
          ></path>
        </svg>
        <span v-text="contents"></span>
      </a>
    </div> 
    <!-- 搜索框end -->
</div>
  
</template>

<script>
export default {
    data(){
      return{
          someWhere:"天河区元岗街社区卫生服务中心元岗医院",
          contents: "搜索饿了么商家、商品名称",
      } 
    },
    computed: {
        istrueScrollTop(){
          return this.$store.state.istrueScrollTop
        }

    },
    methods: {
      goToSearch(){  
        this.$router.push({name: 'search'})
      }
    }
}
</script>

<style lang="scss" scoped>
 @import url("../views/Home/css/home.css");
 @import "../views/Home/css/index.css";

.scrollToTop{
  position: fixed;
  top: 0;
  width: 94%;
}


.search>.content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: .96rem;
    height: 9.6vw;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: .026667rem;
    border-radius: .266667vw;
    background: #fff;
    color: #999;
    font-size: .373333rem;
}
</style>


