import { collectList, collectDel } from '../../service'
export default {
    namespaced: true,
    state: {
        collectArr: []
    },
    mutations: {
        setCollectList(state: any, payload: any) {
            state.collectArr = payload
        }
    },
    actions: {
        // 获取地址数据
        async getCollectList({ commit }: any, payload: any) {
            let result = await collectList(payload)
            console.log(result)
            commit('setCollectList', result.data)
        },
        async getCollectDel({ commit }: any, payload: any) {
            let result = await collectDel(payload)
            console.log(result)
        }
    }
}