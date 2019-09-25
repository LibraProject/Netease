import { categorys } from '../../service'

export default {
    namespaced: true,
    state: {
        categorysArr:[]
    },
    mutations: {
        setCate(state: any,payload: any){
            
        }
    },
    actions: {
       async categorys({commit}:any){
            let result = categorys(1000)
            commit('')
       }
    }
}