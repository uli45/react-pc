import axios from 'axios'
import { getToken, removeToken } from '@/utils/storage'
import history from './history'
import { message } from 'antd'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log(process.env.REACT_APP_BASEURL);
    const tokenObj = getToken()
    if (tokenObj && tokenObj.token) {
      config.headers.Authorization = `Bearer ${tokenObj.token}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据进行操作
    return response.data
  },
  function (error) {
    if (error.response.status === 401) {
      // 提示一下
      message.error('登录信息过期！', 2)
      // 把token删除
      removeToken()
      // 跳回到登录页面
      history.push('/login')
    }else {
       // 对响应错误进行操作
    return Promise.reject(error)
    }
   
  }
)

export default instance
