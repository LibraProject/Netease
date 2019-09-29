import request from '../utils/request'
// 首页请求
export let  getList = ()=>request.get('/');

// 分类获取初始数据
export let catalog = ()=> request.get('/catalog/index')

export let category = (id: any)=> request.get(`/catalog/current?id=${id}`)

// 每一项对应的内容
export let goodList = (params:any)=>request.get('/goods/list',{params});

//  获取品牌制造商
export let branddetail = (id:any)=>request.get(`/brand/detail?id=${id}`)

// 获取制造商列表
export let brandList = (obj?:any)=>request.get('/goods/list',{params:obj})

// 分类中每一项点击跳转页面
export let goodCategory = (params:any)=>request.get('/goods/category',{params})

// 获取用户地址
export let getAddress = ()=>request.get('/address/list')

// 删除用户地址
export let deleteAddress = (id: any)=>request.post('/address/delete',{id})

