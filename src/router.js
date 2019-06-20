import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//父组件
import Main from './views/Main.vue'
//首页
import Home from './views/Home/Home.vue'
//详情页
import Detail from './views/Detail.vue'
//搜索页
import Search from './views/Search.vue'
//发现
import Ediscover from './views/Ediscover.vue'
//订单
import Eorder from './views/Eorder.vue'
//我的
import Eprofile from './views/Eprofile.vue'
//注册页
import Register from './views/Register.vue'
//登录页
import Login from './views/Login.vue'
//定义路由
const routes = [
    {
        path: '/home', component: Home, name: 'home',
        children: [
            {path: 'discover', component: Ediscover, name: 'discover',},
            {path: 'order', component: Eorder, name: 'order',}, 
           {path: 'main', component: Main, name: 'main',} ,
           {
               path: 'profile', component: Eprofile , name: 'profile',
            //    meta: { requiresAuth:true }//是否进行登陆验证
        
            },
        ]
        
    },
    {
        path: '/detail', component: Detail, name: 'detail'
    },
    {
        path: '/search', component: Search, name: 'search'
    },
    {
        path: '/register',component: Register,name: 'register'
    },
    {
        path: '/login',component: Login, name: 'login'
    },
    {
        // 重定向 如果路由为/的话，默认跳转到/foo路由
        path: '/', redirect: '/home/main'
    },
    {
        path: '/', redirect: '/home'
    }
   
    
]

//实例化路由
const router = new VueRouter({
    routes
})

// router.beforeEach(function(to,from,next) {//to即为要跳转的页面，该页面需要验证时，进行登录验证
//     if(to.path === '/login'){
//         if(window.localStorage.getItem('phoneNumber')){
//             next({path: '/'})
//             // this.$store.commit('changeLogin',1);
//         }
//         next()
//     }else{
//         if( !localStorage.getItem('phoneNumber')){
//             router.push({path: '/login'})
//         }else{
//             next()
//         }
//     }
// })

router.beforeEach(function(to,from,next) {//to即为要跳转的页面，该页面需要验证时，进行登录验证
    if(to.path === '/register'){
        if(window.localStorage.getItem('phoneNumber')){
            next({path: '/'})
            // this.$store.commit('changeLogin',1);
        }
        next()
    }else{
        if( !localStorage.getItem('phoneNumber')){
            router.push({path: '/register'})
        }else{
            next()
        }
    }
})




// router.beforeEach(function (to, from, next) {
//     if(to.path === '/login') {
//       if (window.sessionStorage.getItem('login')) {
//         next({ path:'/home'})
//       }
//       next()
//     } 
//     else {
//       if(to.meta.requiresAuth && !sessionStorage.getItem('login')) {
//         router.push({path: '/login'})
//       }else{
//         next()
//       }
//     }
  

export default router

