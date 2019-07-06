import Vue from 'vue'
import App from './App.vue'
import store from './vuex/vuex.config'
import router from './router/router.config'
import axios from './axios/axios.config'
import { Button, Table,Switch } from 'iview';
import 'iview/dist/styles/iview.css';
import './theme/blogTheme.less';



Vue.component('iButton', Button);
Vue.component('iTable', Table);
Vue.component('iSwitch', Switch);

Vue.prototype.$GET = axios.get;
Vue.prototype.$POST = axios.post;
Vue.prototype.$ALL = axios.all;

Vue.config.productionTip = false
window.console.log(`当前环境${process.env.NODE_ENV}`)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')