import { search, searchDetail } from '../../service'

export default {
    namespaced: true,
    state: {
        historyLsit:[],
        hotList:[],
        goodArr:[],
    },
    mutations: {
        setSearch(state:any,payload:any){
            console.log(payload)
            state.historyLsit=payload.historyKeywordList
            state.hotList=payload.hotKeywordList
        },
        setGoodArr(state:any,payload:any){
            state.goodArr=payload.goodsList
        }
    },
    actions: {
        async  getSearch({ commit }: any) {
            let result = await search()
            commit('setSearch',result.data)
        },
        async getSearchDetail({commit}:any,payload:any){
            let result = await searchDetail(payload)
            console.log(result,'-------result')
            commit('setGoodArr',result.data)
        }
    }
}