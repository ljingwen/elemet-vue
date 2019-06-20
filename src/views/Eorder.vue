<template>
  <div class="Allorder">
    <a href="javascript:;"   class="orderMenu" v-for = "(item,index) in dataList " :key="index">
      <div class="orderContent clearfix">
        <a href="javascript:;" class="orderPicL">
          <img :src="'https://fuss10.elemecdn.com/'+item.restaurant_image_hash.slice(0,1)+'/'
          +item.restaurant_image_hash.slice(1,3)+'/'+item.restaurant_image_hash.slice(3)
          +'.jpeg?imageMogr/format/webp/thumbnail/!32x32r/gravity/Center/crop/64x64/'"
           alt="" :test="item.restaurant_image_hash.slice(1,3)">
        </a>
       
        <div class="orderConR">
          <div class="shang ">
            <div class="clearfix">
              <a href="javascript:;" class="orderShopC ">
                <span v-text="item.restaurant_name"></span>
                <i class="el-icon-arrow-right"></i>
              </a>
              <span class="orderShopT">订单超时未支付</span>
            </div>
            <span class="orderTime" v-text="item.formatted_created_at"></span>
          </div>
          <div class="xia">
            <span v-text="item.basket.group[0][0].name+'等2件商品'">
            豉汁排骨饭等2件商品
          </span>
            <span v-text="'¥'+item.total_amount">¥15.50</span>
          </div>
      </div>
      </div>
      <div class="orderBtn clearfix"> 
        <div>
          <el-button plain>再来一单</el-button>
        </div>
        
      </div>
    </a>
  </div>
</template>
  
<script>
export default {
  data(){
    return{
      dataList: [],
       imghash: '',
    }
  },
created(){
  this.getlist(()=>{
  })
},
 
  methods:{
    async getlist(){
      const data = await this.$axios('https://www.easy-mock.com/mock/5cf8d7ab460a680b250b8d7d/example/order');
      const datas = data.data;
      this.dataList = [...this.dataList,...datas];
      this.imghash = datas[0].restaurant_image_hash;
      console.log(datas);
    }
  }
};
</script>
<style lang="scss" scoped>
.Allorder{
  background: #f5f5f5;
   width: 100%; 
   height: 100%;
  // display: flex;
   }
.clearfix:after{display:block;clear:both;content:"";visibility:hidden;height:0}
a{display: block; }
.orderMenu{
  display: block;
  padding: 14px 23px 0 15px;
  background: #fff;
  margin-top: 10px;

}
.orderPicL{
  display: block;
  width: 32px;
  height: 32px;
  float: left;
  background: #ccc;
  margin-right: 5px;
}
.orderConR{
  float: left;
}
.orderShopC{
  float: left;
  span{
    font-size: 18px;
    color: #333;
    line-height: 18px;
  }
  i{
    // display: block;
    // float: left;
    font-size: 10px;
  }
}
.shang{
  width: 300px;
  padding-bottom: 10px;
}
.orderShopT{
  float: right;
      color: #333;
}
.orderTime{
  color: #999;
  margin-top: 8px;
}
.xia{
  padding: 15px 0;
  color: #333;
  font-size: 12px;
  border-top: 0.5px solid #ccc;
  border-bottom: 0.5px solid #ccc;
span:nth-child(1){
    // float: left;
    display: block;
    width:200px;
    height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span:nth-child(2){
    float: right;
  }
}
.orderBtn{
  padding: 10px 16px;
  div{
    float:right;
  }

}

</style>
