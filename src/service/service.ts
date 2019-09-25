import request from '../utils/request'
// 首页请求
export let  getList = ()=>{
     return request.get('/');
}
// 分类获取初始数据
export let categorys = ()=>{
     // console.log(id)
     return request.get('/catalog/index')
}
export let category = (id: any)=>{
     // console.log(id)
     return request.get(`/catalog/current?id=${id}`)
}
