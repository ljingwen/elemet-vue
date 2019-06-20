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
            <el-input v-model="phoneNum" placeholder="请输入手机号" class="phonenumber" @blur="checkNum">
            <!-- <template slot="suffix" :style="{lineHeight: 30+ 'px'}" class="getNumber">获取验证码</template> -->
          </el-input>
            <div v-text="pNumRemind" class="remindMes"></div>
          </section>
          <section>
            <el-input v-model="psw"  placeholder="请输入密码" class="phonenumber" show-password @blur="checkPsw">
            </el-input>
            <div v-text="pswRemind" class="remindMes"></div>
          </section>
          <section>
            <el-input v-model="confirmPsw" placeholder="请确认密码" class="phonenumber" show-password @blur="checkPsw2">
          </el-input>
          <div v-text="confirmPswRemind" class="remindMes"></div>
          </section>
          <section>
            <div></div>
          </section>
          
          <div id="_umfp" style="display: inline; width: 1px; height: 1px; overflow: hidden;"></div>
          <div id="slideVerify" class="nc-container"></div>
          <section class="MessageLogin-15xD9">
            新用户登录即自动注册，并表示已同意
            <a
              href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18"
            >《用户服务协议》</a>
          </section>
            <el-button type="success" :style="{ width: btnWidth+'px'}" @click="regMessage">注册</el-button>
            
            
        </form>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
  data(){
    return{
      inputText: '获取验证码',
      btnWidth: 300,
      phoneNum:'',
      pNumRemind: '',
      psw:'',
      pswRemind: '',
      confirmPsw: '',
      confirmPswRemind: '',
      isNumtrue: false,
      isPswtrue: false,
      isPsw2true: false,
      regLocalocation: [],


    }
  },
  methods: {
    checkNum(){
      const checkPhoneNumber = /^1[3|4|5|8][0-9]\d{4,8}$/;
      if(!this.phoneNum){
        this.pNumRemind = '电话号码不能为空'
      }else if(!checkPhoneNumber.test(this.phoneNum)){
        this.pNumRemind = '请输入正确的手机号码'
      }else{
        this.pNumRemind = ''
        this.istrue = true;
        console.log(this.phoneNum)
      //  window.localStorage.setItem('number',this.phoneNum);
      }
    },
    checkPsw(){
      const pattern = /^[\w_]{6,16}$/;
      //请输入6位至16位包含数字、字母、下划线的密码
      if(!this.psw){
        this.pswRemind = '密码不能为空'
      }else if(!pattern.test(this.psw)){
        this.pswRemind = '请输入6位至16位包含数字、字母、下划线的密码';
      }else{
        this.pswRemind = '';
        this.isPswtrue = true;
      }
    },
    checkPsw2(){
      if(!this.confirmPsw){
        this.confirmPswRemind = '密码不能为空'
      }else if(this.confirmPsw != this.psw){
        this.confirmPswRemind = '两次输入的密码不一致'
      }else{
        this.confirmPswRemind = ''
        this.isPsw2true = true;
      }
    },

    regMessage(){
      if(this.istrue && this.isPswtrue && this.isPsw2true){
        const personMes = {phoneNumber: this.phoneNum, password: this.psw, password2: this.confirmPsw};
        // this.regLocalocation.push({phoneNumber: this.phoneNum ,password: this.psw,password2: this.psw2});
        this.regLocalocation.push(personMes)
        console.log(this.regLocalocation)
        window.localStorage.setItem('phoneNumber',this.phoneNum);
        window.localStorage.setItem('password',this.psw);
        console.log('存储成功')
        this.$router.push({name: 'login'})
      }else{
        return
      }
      
      

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
        margin-bottom: 8px;
      }
    }
    .phonenumber{
      width: 300px;
    }
    .remindMes{
      height: 30px;
      line-height: 30px;
      font-size: 13px;
      width: 300px;
      text-align: left;
      margin-left: 40px;
      color: red;
    }

  }
</style>


