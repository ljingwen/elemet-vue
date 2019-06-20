<template>
  <div class="register">
    <!---->
    <div class="register_">
      <div class="registerHeader">
        <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" >
      </div>
      <!---->
      <div>
        <form class="MessageRegister">
          <section>
            <el-input v-model="phoneNumber" placeholder="请输入手机号" class="phonenumber">
            <!-- <template slot="suffix" :style="{lineHeight: 30+ 'px'}" class="getNumber">获取验证码</template> -->
          </el-input>
          </section>
          <section>
            <el-input v-model="password" placeholder="请输入密码" class="phonenumber" show-password>
            <!-- <template slot="suffix" :style="{lineHeight: 30+ 'px'}" class="getNumber">获取验证码</template> -->
          </el-input>
          </section>
          
          <div id="_umfp" style="display: inline; width: 1px; height: 1px; overflow: hidden;"></div>
          <div id="slideVerify" class="nc-container"></div>
          <section class="MessageLogin-15xD9">
            新用户登录即自动注册，并表示已同意
            <a
              href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18"
            >《用户服务协议》</a>
          </section>
            <el-button type="success" :style="{ width: btnWidth+'px'}" @click="loginHome">登陆</el-button>
            
        </form>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
  data(){
    return{
      phoneNumber: '',
      password: '',
      inputText: '获取验证码',
      btnWidth: 300
    }
  },
  created(){
    this.phoneNumber = window.localStorage.getItem('phoneNumber');
    this.password = window.localStorage.getItem('password')
  },
  methods: {
      loginHome(){
        // window.localStorage.setItem(this.phoneNumber)
        this.$store.commit('changeLogin',1);
        console.log(11)
        this.$router.push({path: '/'})
        
      }
  }
};
</script>
<style scoped lang="scss">
  .register{
    height: auto;
    width: 100%;
    min-height: 100%;
    padding-top: 40px;
    // display: flex;
    .registerHeader{
      text-align: center;
      img{
        height: 56px;
      }
    }
    .MessageRegister{
      margin-top: 18px;
      text-align: center;
      section{
        margin-bottom: 16px;
      }
    }
    .phonenumber{
      width: 300px;
    }
    // .getNumber{
    //   height: 36px;
    //   line-height: 36px;
    // }

  }
</style>


