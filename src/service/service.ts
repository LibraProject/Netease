import request from '../utils/request'
// 首页请求
export let  getList = ()=>{
     return request.get('/');
}
// 奇趣分类获取数据
export let categorys = ()=>{
     // console.log(id)
     return request.get('/catalog/index')
}

// 每一项对应的内容
export let goodList = (params:any)=>{
     // console.log(id)
     return request.get('/goods/list',{params})
}