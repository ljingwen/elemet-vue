<template>
  <div class="profile">
    <div class="proHeader clearfix">
      <div class="header_l">
        <span></span>
      </div>
      <div class="header_c" v-if="this.$store.state.isLogin">
        <p class="profile-1_mtk">
          <span>c9da44fa694</span>
        </p>
        <p>
          <span>134****7609</span>
        </p>
      </div>
      <div class="header_c" v-else>
        <p class="profile-1_mtk">
          <span @click="toRegister">注册</span><span class="login" @click="toLogin">登陆</span>
        </p>
      </div>
      <div class="header_r">
        <span>
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
    </div>
    <!-- 红包和金币 -->
    <diV class="hotGold clearfix">
      <div>
        <p>
          <span class="hotNum">0</span>
          <span class="hotPiece">个</span>
        </p>
        <p class="hotWord">红包</p>
      </div>
      <div>
        <p>
          <span class="goldNum">0</span>
          <span class="goldPiece">个</span>
        </p>
        <p>金币</p>
      </div>
    </diV>
    <!-- 我的地址 -->
    <div :class="[{'adress':(profilenum == index)},{'mineServer':(profilenum2 == index)}]"  :key= index v-for="(item,index) in profileDate">
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i :class="item.profieicon"></i>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light" v-text="item.profieword"></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 金币商城 -->
    <!-- <div>
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-bank-card"></i>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            金币商城
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-row>
    </div>-->
    <!-- 分享 -->
    <!-- <div>
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-share"></i>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            分享拿20元现金
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-row>
    </div>-->
    <!-- 我的客服 -->
    <!-- <div class="mineServer">
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-headset"></i>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            我的客服
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-row>
    </div>-->
    <!-- 下载饿了么客服 -->
    <!-- <div>
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-platform-eleme"></i>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            下载饿了么APP
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-row>
    </div>-->
    <!-- 规则中心 -->
    <!-- <div>
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-document"></i>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            规则中心
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-row>
    </div>-->
    <!-- 隐私政策 -->
    <div class="private">隐私政策</div>
    <div class="profieFooter"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileDate: [
        {
          profieword: "我的地址",
          profieicon: "el-icon-delete-location"
        },
        {
          profieword: "金币商城",
          profieicon: "el-icon-bank-card"
        },
        {
          profieword: " 分享拿20元现金",
          profieicon: "el-icon-share"
        },
        {
          profieword: "我的地址",
          profieicon: "el-icon-platform-eleme"
        },
        { profieword: "下载饿了么APP", profieicon: "el-icon-delete-location" },
        {
          profieword: "规则中心",
          profieicon: "el-icon-document"
        }
      ],
      profilenum: 0,
      profilenum2: 3,
    }
  },
  created(){
    console.log(this.$store.state.isLogin)
    if(window.localStorage.getItem('phoneNumber')){
      this.$store.commit('changeLogin',1);
    }
  },
  methods: {
    toRegister(){
      this.$router.push({name: 'register'})
    },
    toLogin(){
      this.$router.push({name: 'login'})
    }
  }
};
</script>
<style lang="scss" scoped >
.profile {
  background: #f5f5f5;
}
.proHeader {
  padding: 20px 10px;
  background: #0085ff;
  color: #fff;
  div {
    float: left;
  }
  .header_l {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    // background: #000;
    span {
      background: url(https://shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png) -20px
        220px;
      background-size: 120px;
      display: inline-block;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
  .header_c {
    padding: 10px 8px;
    width: 220px;
    .profile-1_mtk {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 8px;
    }
  }
  .login{margin-left: 10px;}
  .header_r {
    display: inline-block;
    text-align: center;
    height: 80px;
    line-height: 80px;
    i {
      font-size: 20px;
    }
  }
}

.hotGold {
  height: 60px;
  width: 100%;
  background: #fff;
  div {
    float: left;
    height: 60px;
    width: 50%;
    text-align: center;

    p {
      height: 50%;
      box-sizing: border-box;
      // line-height: 30px;
    }
    p:nth-child(1) {
      padding-top: 5px;
    }
    .hotNum {
      color: rgb(255, 95, 62);
      font-weight: bold;
      font-size: 22px;
    }
    .hotPiece {
      color: rgb(255, 95, 62);
      font-size: 8px;
    }
    .goldNum {
      color: rgb(106, 194, 11);
      font-weight: bold;
      font-size: 22px;
    }
    .goldPiece {
      color: rgb(106, 194, 11);
      font-size: 8px;
    }
  }
}

//adress
.adress {
  margin: 15px 0;
}
.mineServer {
  margin-top: 15px;
}
.grid-content {
  border-radius: 3px;
  min-height: 45px;
  line-height: 45px;
  font-size: 0.426667rem;
  color: #333;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #fff;
  i {
    color: rgb(74, 165, 240);
    font-size: 18px;
    text-align: center;
    display: block;
    line-height: 40px;
  }
}
.bg-purple-light {
  background: #fff;
}
.private {
  padding: 23px 0;
  text-align: center;
  font-size: 16px;
  color: #4da6f0;
}
//底部
.profieFooter {
  height: 100px;
  background: #f5f5f5;
}
</style>