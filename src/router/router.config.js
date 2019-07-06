import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [ //配置路由，使用数组形式
      {
        path: '/login',   
        name: 'login',  
        component: resolve => require(['@/views/login/login.vue'],resolve)
      },
    ]
  })