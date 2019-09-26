import { categorys, category, goodList, branddetail } from '../../service'

export default {
    namespaced: true,
    state: {
        categorysArr: [],
        renderArr: [],
        renderList:[],
        arr:[]
    },
    mutations: {
        setRend(state:any,payload: any){
            state.renderArr = payload
        },
        setCate(state: any, payload: any) {
            state.categorysArr = payload.data.categoryList
            state.arr=payload.data.categoryList.filter((item:any)=>item.id===payload.id)
            // console.log(state.arr)
        },
        setGood(state:any,payload:any){
            state.renderList=payload.data
        },
    },
    actions: {
        async category({commit}: any,id:any){
         let result = await category(id)
             commit('setRend',result.data.currentCategory.subCategoryList)
        },
        async categorys({ commit }: any, id: any) {
            // console.log(id, '进入页面')
            let result = await categorys()
            // console.log(result.data, '---result进入页面')
            commit('setCate', { data: result.data, id })
        },
        async getGood({ commit }: any,payload:any) {
            let result = await goodList(payload)
            // console.log(result.data, '---result进入页面')
            commit('setGood', result.data)
        }
    }
}