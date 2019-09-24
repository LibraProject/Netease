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
       async categorys({commit}:any,id:any){
        //    console.log(id,'store----action')
            let result = await categorys(id)
            console.log(result)
       }
    }
}