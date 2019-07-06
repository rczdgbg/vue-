import Axios from "axios";
import store from "../vuex/vuex.config";
import { Message } from "iview";

let cancel,
  reqUrl = {};
const axios = Axios.create({
  timeout: 30000,
  baseURL: "http://127.0.0.1:9000",
  headers: {
    "content-type": "application/x-www-form-urlencoded" //转换为key=value的格式必须增加content-type
  }
});
const CancelToken = Axios.CancelToken; // 取消请求

//http-请求拦截 // 拦截报错 统一loading提示
axios.interceptors.request.use(
  config => {
    if (reqUrl[config.url]) {
      //发起请求时，取消掉当前正在进行的相同请求  调用方式cancel("提示用户");
      reqUrl[config.url](`${config.url}请求quxiao`);
      reqUrl[config.url] = cancel;
    } else {
      reqUrl[config.url] = cancel; // 将请求url 保存到对象里面
    }
    store.commit("setLoading", true); // 全局loading
    return config;
  },
  error => {
    store.commit("setLoading", false);
    return Promise.reject(error);
  }
);

//http-响应拦截
// 拦截报错 统一loading提示
axios.interceptors.response.use(
  response => {
    console.log(response);
    const code = response.data.state;
    const errMessage = response.data.errMessage;
    switch (code) {
      case 0:
        Message.error({
          content: errMessage
        });
        break;
      case 1:
        Message.success({
          content: errMessage
        });
        break;
      case 2:
        location.href = "/login";
        Message.error({
          content: errMessage
        });
        break; // 登录失效
    }
    store.commit("setLoading", false);
    return response.data;
  },
  error => {
    console.log(error);
    Message.error({
      content: "网络错误请稍后再试！"
    });
    store.commit("setLoading", false);
    return Promise.reject(error);
  }
);

export default {
  get(url, param) {
    //get请求
    return new Promise(resolve => {
      axios({
        method: "get",
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      }).then(res => {
        resolve(res);
      });
    });
  },
  post(url, param) {
    //post请求
    return new Promise(resolve => {
      axios({
        method: "post",
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      }).then(res => {
        resolve(res);
      });
    });
  },
  /*
   *  @params 合并请求  all[{data,url,reqType}]
   */
  all(arr = []) {
    return new Promise((resolve, reject) => {
      console.log(arr);
      if (arr.length) {
        let reqObj = {};
        let reqArr = [];
        let responseArr = [];
        arr.forEach((item, index) => {
          reqObj = {
            method: item.reqType,
            url: item.url,
            data: item.data,
            params: item.data
          };
          item.reqType === "post" ? delete reqObj.params : delete reqObj.data;
          reqArr.push(axios(reqObj));
          responseArr.push(`params${index + 1}`);
        });
        Axios.all(reqArr).then(
          Axios.spread((...responseArr) => {
            resolve(responseArr);
          })
        );
      } else {
        reject("请求格式不正确！");
      }
    });
  }
};
