<template>
      <div class="footer">
        <a href="javascript:;" v-for="(item,index) in tab"
          @click="toRoute(index)" :key="index" :test="num" 
          :test2="index" :class="{'setColor' : num == index}">
          <i :class="item.name"></i>
          <span v-text="item.text"></span>
        </a>
        <!-- <a href="javascript:;">
          <i class="el-icon-eleme"></i>
          <span>首页</span>
        </a>
        <a href="javascript:;">
          <i class="el-icon-pie-chart"></i>
          <span>发现</span>
        </a>
        <a href="javascript:;">
          <i class="el-icon-document"></i>
          <span>订单</span>
        </a>
        <a href="javascript:;">
          <i class="el-icon-user"></i>
          <span>我的</span>
        </a> -->
      </div>
</template>
<script>
export default {
  data() {
    return {
      tab: [
        {
          name: 'el-icon-eleme',
          text: '首页',
          tosb: 'main'

        },
        {
          name: 'el-icon-pie-chart',
          text: '发现',
          tosb: 'discover'
        },
        {
          name: 'el-icon-document',
          text: '订单',
          tosb: 'order'
        },
        {
          name: 'el-icon-user',
          text: '我的',
          tosb: 'profile'
        }
      ],
      num: 0,


    };
  },
  methods: {
    
    toRoute(index){ 
      this.num = index;
      console.log(this.num)
      let name = this.tab[index].tosb;
      //路由跳转
      this.$router.push({name});
    }
  }
};
</script>
<style lang="scss">
  // .clearfix:after{display:block;clear:both;content:"";visibility:hidden;height:0}
  //  .clearfix{zoom:1}
  //  .bottom{min-height: 47px;
  //   margin-top: 47px;
  //  }
  .footer{
   background: #fff;
   padding-top: 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    zoom: 1;
    z-index: 20;
    a{
      width: 25%;
      float: left;
      text-align: center;
      color: #8A8A8A;
      i{
        display: block;
        font-size: 25px;
      }
      span{
        display: block;
        font-size: 12px;
        padding: 3px 0;
      }
    }
    .setColor{
      color: #58bc58;
    }
  }
</style>



