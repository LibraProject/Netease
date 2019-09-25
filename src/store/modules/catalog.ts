import { categorys, category } from '../../service'

export default {
    namespaced: true,
    state: {
        categorysArr:[],
        renderArr:[]
    },
    mutations: {
        setCate(state: any,payload: any){
            state.categorysArr = payload
        },
        setRend(state:any,payload: any){
            state.renderArr = payload
        }
    },
    actions: {
       async categorys({commit}:any){
        let result = await categorys()
        commit('setCate',result.data.categoryList)
       },
       async category({commit}: any,id:any){
        let result = await category(id)
            commit('setRend',result.data.currentCategory.subCategoryList)
       }
    }
}