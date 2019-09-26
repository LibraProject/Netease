import { brandList } from './service'

// 获取制造商列表
export let getBrandList = async (obj?:any)=>{
    let result = await brandList(obj)
    return result.data.data
}