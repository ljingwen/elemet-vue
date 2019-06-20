<template>
  <div>
    <div class="app-dps8r">
      <div class="index-2guaN">
        <nav
          class="index-2g0nR index-2TCKU"
          style="background-image: url(&quot;//fuss10.elemecdn.com/c/63/17234a0e5a88d7e63618ca52dfbccjpeg.jpeg?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/&quot;);"
        >
          <a href="javascript:;" class="index--iRT3"></a>
          <!---->
        </nav>
        <div class="index-ccm5A">
          <div class="index-3X8sl">
            <!---->
            <img
              class="index-3eDRn"
              src="https://fuss10.elemecdn.com/c/63/17234a0e5a88d7e63618ca52dfbccjpeg.jpeg?imageMogr/format/webp/thumbnail/150x/"
            >
          </div>
          <!---->
          <div class="index-2uv7r">
            <h2 class="index-3jRsK">
              <span class="index-UYhnL">合味牛杂</span>
              <i class="index-1_VRD"></i>
            </h2>
            <div class="index-24KTi">
              <span class="index-2u0xV">评价4.6</span>
              <span class="index-2u0xV">月售1487单</span>
              <span class="index-2u0xV">
                商家配送
                <span>约60分钟</span>
              </span>
            </div>
          </div>
          <!---->
          <div ubt-click="101178" class="index-2Ea3o">
            <div class="index-2Gi26">
              <div class="activity-1hPHa activity-2JHFT">
                <span
                  class="mini-tag-1Lyw4 activity-N5WvH"
                  style="background-color: rgb(240, 115, 115);"
                >
                  满减
                  <span
                    class="activity-yP-9y mini-tag-1ezSQ"
                    style="color: rgb(255, 255, 255);"
                  >满减</span>
                </span>
                <span class="activity-3dUjU">满25减1</span>
              </div>
            </div>
            <div class="index-jk0Mt">2个优惠</div>
          </div>
          <p class="index-TmrYy">公告：团队班车上午10点45分，下午4点45分发车，高峰期请提前下单，团队配送一般一个半小时至两小时，请谅解谢谢！</p>
        </div>
      </div>
    </div>

    <!-- 点餐、评价、商家 -->
    <div class="shopTap">
      <div class="tabThree">
        <div v-for="(item,index) in tabThreeW" :key="index" @click="tabTClick(index)">
          <span v-text="item" :class="{'setBorder':(tabThreeN == index)}" :test="index"></span>
        </div>
      </div>
      <div class="contentThree">
        <!-- <div v-for="(item,index) in contentDatalist" v-if = "">1</div> -->
        <div v-if="isShowContOne">
            <div class="shopMessage clearfloat">
      <div class="MessageLeft clearfloat">
        <ul>
           
          <li v-for="(item,index) in hotSellList " v-text="item.name" :key="index">
           <img class="menucategory-categoryIcon_375ij" 
          src="https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png?imageMogr/format/webp/thumbnail/26x/"
          >热销
           </li>
        </ul>
      </div>
      <div class="MessageRight clearfloat"  >
         
        <div v-for="(item,index) in hotSellList " :key="index">
          <div class="hotBuy" ><span v-text="item.name">热销</span></div>
          <div class="fooddetails-root_2HoY2" v-for="(i,index) in item.foods" >
            <span class="fooddetailsL">
              <img
                :src="'https://cube.elemecdn.com/'+i.image_path.slice(0,1)+'/'+i.image_path.slice(1,3)+'/'
                +i.image_path.slice(3)
                +'.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp'"
                alt="烤肠"
                title="烤肠"
              >
            </span>
            <div class="fooddetailsR">
              <p class="fooddetails-name_">
                <span class="fooddetails-name" v-text="i.name">烤肠</span>
              </p>
              <p class="fooddetails-desc" v-text="i.description">主要原料：肉肠</p>
              <p class="fooddetails-sales">
                <span v-text="'月售'+i.month_sales+ '份'"></span>
                <span class="goodComments" v-text="'好评率'+i.satisfy_rate+'%'">好评率98%</span>
              </p>
              <div class="fooddetails-activityRow_1FKti">
                  <span class="mini-tag">
                    3.3折
                  </span>
              </div>
              <span
                class="salesInfo"
                style="color: rgb(255, 83, 57);"
              >
                <span v-text="'¥'+i.lowest_price"></span>
                <!---->
                <del class="salesInfo-originPrice">¥3</del>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>


        </div>
        <div v-if="isShowContTwo">2</div>
        <div v-if="isShowContThree">3</div>
      </div>
    </div>

    <!-- 下面的热销那些 -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabThreeW: ["点餐", "评价", "商家"],
      contentDatalist: ["1", "2", "3"],
      tabThreeN: 0,
      isShowContOne: true,
      isShowContTwo: false,
      isShowContThree: false,
      hotSellList: [],
    };
  },
  created(){
    this.hotSell(() => {

    });
  },
  methods: {
    tabTClick(index) {
      this.tabThreeN = index;
      if (index == 0) {
        this.isShowContOne = true;
        this.isShowContTwo = false;
        this.isShowContThree = false;
        console.log(0);
      } else if (index == 1) {
        console.log(1);
        this.isShowContOne = false;
        this.isShowContTwo = true;
        this.isShowContThree = false;
      } else if (index == 2) {
        console.log(2);
        this.isShowContOne = false;
        this.isShowContTwo = false;
        this.isShowContThree = true;
      }
    },
    async hotSell(){
      const foodList = await this.$axios('https://www.easy-mock.com/mock/5cf8d7ab460a680b250b8d7d/example/detailFoodData');
      // console.log(foodList)
      this.hotSellList = [...this.hotSellList,...foodList.data.menu];
      console.log(this.hotSellList)

    }
  }
};
</script>
<style scoped lang="scss">
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.hotBuy{
  padding: 8px 3px;
}
.MessageLeft{
  // display: inline-block;
  float: left;
  ul li{
    width: 77px;
    padding: 17px 8px;
    img{
      width: 13px;
      height: 13px;
      margin-right: 5px;
    }

  }
}
.MessageRight{
  float: left;
  height: 1000px;
  // display: inline-block;
}
.fooddetails-root_2HoY2{
  padding: 10px 0;
}
.fooddetailsL{
  display: inline-block;
  width: 95px;
    height: 95px;
    margin-right: 10px;
    vertical-align: middle;
  img{
    width: 95px;
    height: 95px;
    
    
  }
}
.fooddetailsR{
  display: inline-block;
  vertical-align: top;
}
.fooddetails-name_{
  height: 20px;
}
.fooddetails-name{
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  // text-overflow: ellipsis;
  width: 100px;
  display: inline-block;
}
.fooddetails-desc,.fooddetails-sales{
      margin: 1vw 0;
    font-size: .266667rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 4.266667rem;
    width: 42.666667vw;
}
.mini-tag{
  border-radius: .266667vw;
    border: .013333rem solid hsla(8,79%,62%,.3);
    border: .133333vw solid hsla(8,79%,62%,.3);
    color: #eb6551;
}
.salesInfo span{
      margin-right: 0.3rem;
}
.salesInfo-originPrice{
      color: #999;
}
.goodComments{
  margin-left: 10px;
}




.contentThree {
  // position: relative;
  // div {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  // }
}
.tabThree {
  width: 100%;
  height: 40px;
  display: flex;
  div {
    width: 33.3%;
    // background: #ccc;
    text-align: center;
    position: relative;
    span {
      display: block;
      width: 40px;
      line-height: 40px;
      color: #333;
      font-weight: 700;
      position: absolute;
      top: 0%;
      left: 50%;
      margin-left: -20px;
      //   border-bottom: 2px solid rgb(35, 149, 255);
    }
    span.setBorder {
      border-bottom: 2px solid rgb(35, 149, 255);
    }
  }
}
.app-dps8r {
  position: relative;
}
*,
:after,
:before {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}
.index-2guaN {
  color: #333;
  font-size: 0.293333rem;
  background-color: #fff;
  padding-top: 2.666667rem;
  padding-top: 26.666667vw;
}
// element.style {
//     background-image: url(//fuss10.elemecdn.com/c/63/17234a0…jpeg.jpeg?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/);
// }
.index-2TCKU {
  background-size: cover;
  background-repeat: no-repeat;
}
index-1jCWy,
.index-2g0nR {
  height: 2.666667rem;
  height: 26.666667vw;
  position: absolute;
  left: 0;
  right: 0;
}
.index-2g0nR {
  padding: 0.106667rem 0.266667rem 0;
  padding: 1.066667vw 2.666667vw 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: justify;
  align-items: justify;
  top: 0;
}
.index--iRT3 {
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
  margin-left: 0.133333rem;
  margin-left: 1.333333vw;
  width: 0.32rem;
  width: 3.2vw;
  height: 0.32rem;
  height: 3.2vw;
  display: inline-block;
  border-bottom: 0.053333rem solid #fff;
  border-bottom: 0.533333vw solid #fff;
  border-left: 0.053333rem solid #fff;
  border-left: 0.533333vw solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
a {
  outline: none;
  color: inherit;
  text-decoration: none;
}
.index-ccm5A {
  padding: 0.8rem 0 0;
  padding: 8vw 0 0;
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  background-color: #fff;
}
.index-3X8sl {
  width: 2rem;
  width: 20vw;
  height: 2rem;
  height: 20vw;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1rem;
  margin-left: -10vw;
  margin-top: -1.6rem;
  margin-top: -16vw;
}
.index-2guaN {
  color: #333;
  font-size: 0.293333rem;
}
.index-3eDRn {
  width: 100%;
  height: 100%;
  border-radius: 0.08rem;
  border-radius: 0.8vw;
  box-shadow: 0 0 0.04rem 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
}
.index-2uv7r {
  -webkit-flex: 1;
  flex: 1;
  width: 7.2rem;
  width: 72vw;
}
.index-2Ea3o {
  display: -webkit-flex;
  display: flex;
  color: #333;
  margin: 0.32rem auto 0;
  margin: 3.2vw auto 0;
  -webkit-align-items: center;
  align-items: center;
}
.index-2Ea3o,
.index-TmrYy {
  width: 8rem;
  width: 80vw;
  font-size: 0.293333rem;
}
.index-TmrYy {
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.226667rem auto 0.266667rem;
  margin: 2.266667vw auto 2.666667vw;
  padding: 0;
  white-space: nowrap;
}
.index-3jRsK {
  font-size: 0.546667rem;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
}
.index-jk0Mt {
  width: 1.626667rem;
  width: 16.266667vw;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  position: relative;
  padding-right: 0.293333rem;
  padding-right: 2.933333vw;
  text-align: right;
  color: #999;
  margin-left: 120px;
}
.index-jk0Mt:after {
  content: "";
  display: block;
  border-style: solid;
  border-width: 0.106667rem 0.093333rem 0;
  border-width: 1.066667vw 0.933333vw 0;
  border-color: #999 transparent transparent;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 0;
}
</style>

