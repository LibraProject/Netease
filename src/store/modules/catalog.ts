import { categorys } from '../../service'

export default {
    namespaced: true,
    state: {
        categorysArr:[],
        renderArr:[]
    },
    mutations: {
        setCate(state: any,payload: any){
            // console.log(payload,'---payload')
            state.categorysArr = payload
        }
    },
    actions: {
       async categorys({commit}:any,id:any){
        console.log(id,'进入页面')
        let result = await categorys()
        console.log(result.data,'---result进入页面')
        commit('setCate',result.data.categoryList)
       }
    }
}