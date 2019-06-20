import Vue from 'vue'
import App from './App.vue'

//引入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入路由对象
import router from './router.js'
//引入Vuex
import store from './store.js'

//引入rem
import 'lib-flexible'

//引入axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import axios  from 'axios'
Vue.prototype.$axios= axios

Vue.config.productionTip = false

Vue.use(ElementUI);
//当插件来使用
// Vue.use(VueAxios, axios);

new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App),
})
