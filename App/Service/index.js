import axios from 'axios';
import config from '../Config'


const create = ()=>{

  const instance = axios.create({
    baseURL: config.baseURL,
    timeout: 3000,
    headers: {
      'Cache-Control': 'no-cache'
    }
  });

  //请求拦截处理
  instance.interceptors.request.use(async function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  //返回拦截处理
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


  //检测手机号是否注册
  const checkPhone =({phone})=> instance.get(`/cellphone/existence/check?phone=${phone}`);
  //手机号密码登录
  const login =({phone, password})=> instance.get(`/login/cellphone?phone=${phone}&password=${password}`);

  //轮播图
  const getBanner =({type})=> instance.get(`/banner?type=${type}`);



  return{
    checkPhone,
    login,
    getBanner
  }
}

export default {
  create
};








