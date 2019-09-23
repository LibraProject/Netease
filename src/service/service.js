import request from '../utils/request'
// 首页请求
export let  getList = ()=>{
     return request.get('/');
}