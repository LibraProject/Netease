import { categorys, goodList } from '../../service'

export default {
    namespaced: true,
    state: {
        categorysArr: [],
        renderArr: [],
        arr:[]
    },
    mutations: {
        setCate(state: any, payload: any) {
            // console.log(payload)
            state.categorysArr = payload.data.categoryList
            state.arr=payload.data.categoryList.filter((item:any)=>item.id===payload.id)
            console.log(state.arr)
        },
        setGood(state:any,payload:any){
            state.renderArr=payload.data
        }
    },
    actions: {
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