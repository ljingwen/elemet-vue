<template>
  <div>
    <!-- 搜索header -->
    <div class="header clearfix">
      <div class="headerL" @click="backTo">
        <i class="el-icon-back"></i>
      </div>
      <div class="headerC">
        <el-input :placeholder="input2" prefix-icon="el-icon-search"></el-input>
      </div>
      <div class="headerR">
        <span>搜索</span>
      </div>
    </div>
    <!-- 热门搜索 -->
    <!-- <div class="search">
        <header>热门搜索</header>
    </div>-->
    <div class="hotSearch">
      <header>热门搜索</header>
    </div>
    <!-- 店铺 -->
    <div class="store">
        <ul>
            <li v-for = "(item,index) in list"><a href="javascript:;" v-text="item.word"></a></li>
        </ul>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      input2: "输入商家、商品名称",
      list: []
    }
  },
  created(){
      this.xuanran(() => {
          
      })
  },
  methods: {
   async xuanran(){
        const data = await this.$axios('https://www.easy-mock.com/mock/5cf8d7ab460a680b250b8d7d/example/search');
        console.log(data.data)
        this.list = [...this.list,...data.data],
        console.log(this.list)

      },
      backTo(){
          this.$router.go(-1);
      } 
      
    //   async getShopList(callback) {
    //   this.$store.state.loading += 1;
    //   const data = await this.$axios(
    //     'https://www.easy-mock.com/mock/5cee26e4c7e0071827e4f109/shoplist',
    //   );
    //   this.$store.state.loading -= 1;
    //   console.log(data);
    //   this.shopList = [...this.shopList, ...data.data.data.shopList];
      // callback();
    // },


  }



}

</script>

 <style lang="scss">
.clearfix:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
ul,li{list-style: none;}
a{text-decoration: none;}
.header {
  width: 100%;
  margin: 10px 0;
  background: #fff;
  div {
    float: left;
  }
  .headerL {
    width: 15%;
    text-align: center;
    line-height: 40px;
    i {
      font-size: 20px;
      color: #999;
    }
  }
  .headerC {
    width: 70%;
  }
  .headerR {
    width: 15%;
    span {
      text-align: center;
      outline: none;
      color: #333;
      font-size: 15px;
      background: #fff;
      font-weight: 700;
      line-height: 40px;
    }
  }
}

.hotSearch {
  padding: 2vw 3.333333vw;
  color: #666;
  font-weight: 700;
}

.store{
    height: 20px;
    padding: 0 15px 15px 15px;
    ul li, a{
        float: left;
        color: #666;
    }
    li{
        margin: 12px 12px 0 0;
        background-color: #f7f7f7;
        padding: 8px 10px;
    }
    a{
        text-align: center;
        height: 18px;
        line-height: 18px;
        font-size: 15px;
    }
}
</style>