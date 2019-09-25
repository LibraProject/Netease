import request from '../utils/request'
// 首页请求
export let  getList = ()=>{
     return request.get('/');
}

// 奇趣分类获取数据
export let categorys = (id: any)=>{
     return request.get('/goods/category',id)
}