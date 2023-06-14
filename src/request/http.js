import axios from 'axios';
import { Notification } from 'element-ui';

/**
 * 根据环境变量进行接口区分
 */

 axios.defaults.baseURL = "http://localhost:8080";

/**
 * 设置超时时间和跨域是否允许携带凭证
 */
axios.defaults.timeout = 10000;


/**
 * 设置请求传递数据的格式(服务器要求设置)
 * x-www-form-urlencoded
 */
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8;application/x-www-form-urlencoded';

// axios.defaults.withCredentials = true // 携带cookie


/**
 * 设置请求拦截器
 * 客户端发送请求 - > [请求拦截器] - > 服务器
 * TOKEN校验（JWT）: 接受服务器返回的token， 存储到vuex/本地中，
 * 每一次发送请求携带token
 */
axios.interceptors.request.use(config => {
    //携带cookie
    // let cookie = localStorage.getItem("cookie");
    // cookie && (config.headers.cookie = cookie);
    return config;
}, error => {
    return Promise.reject(error);
});

/**
 * 响应拦截器
 * 服务器返回信息 -> [拦截的统一处理] -> 客户端JS获取到信息
 */
axios.interceptors.response.use(res => {
    return res;
},error => {
    
})

/**
 * get 和 post 封装
 */
 export function get(url, params){    
    url = axios.defaults.baseURL + url;
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res);
        }).catch(err =>{
            reject(err)        
    })    
    });
 }

 export function post(url, params) {
    url = axios.defaults.baseURL + url;
    return new Promise((resolve, reject) => {
         axios.post(url, params)
        .then(res => {
            resolve(res);
        })
        .catch(err =>{
            reject(err);
        })
    });
}

export function img_post(url, params) {
    url = axios.defaults.baseURL + url;
    return new Promise((resolve, reject) => {
         axios.post(url, {params,responseType: 'blob'})
        .then(res => {
            resolve(res);
        })
        .catch(err =>{
            reject(err);
        })
    });
}

