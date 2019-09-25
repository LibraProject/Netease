import { categorys } from '../../service'

export default {
    namespaced: true,
    state: {
        categorysArr:[],
        renderArr:[]
    },
    mutations: {
        setCate(state: any,payload: any){
            state.categorysArr = payload
        }
    },
    actions: {
       async categorys({commit}:any){
        let result = await categorys()
        console.log(result)
        commit('setCate',result.data)
       }
    }
}