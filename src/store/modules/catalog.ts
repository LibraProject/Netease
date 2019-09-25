import { categorys, category, goodList, branddetail } from '../../service'

export default {
    namespaced: true,
    state: {
        categorysArr: [],
        renderArr: [],
        arr:[]
    },
    mutations: {
        setRend(state:any,payload: any){
            state.renderArr = payload
        },
        setCate(state: any, payload: any) {
            state.categorysArr = payload.data.categoryList
            state.arr=payload.data.categoryList.filter((item:any)=>item.id===payload.id)
            console.log(state.arr)
        },
        setGood(state:any,payload:any){
            state.renderArr=payload.data
        },
            // 获取品牌数据
        setBrand(){

        }
    },
    actions: {
        async category({commit}: any,id:any){
         let result = await category(id)
             commit('setRend',result.data.currentCategory.subCategoryList)
        },
        async categorys({ commit }: any, id: any) {
            let result = await categorys()
            commit('setCate', { data: result.data, id })
        },
        async getGood({ commit }: any,payload:any) {
            let result = await goodList(payload)
            commit('setGood', result.data)
        }
    }
}