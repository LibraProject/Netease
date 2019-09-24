import { topic, topicDetail } from '../../service'

export default {
    namespaced: true,
    state: {
        list:[],
        detailList:{},
    },
    mutations: {
        setTopic(state:any,payload:any){
            state.list=payload.data
        },
        setTopicDetail(state:any,payload:any){
            state.detailList=payload
        }
    },
    actions: {
        async  getTopic({ commit }: any, payload: object) {
            let result = await topic(payload)
            commit('setTopic',result.data)
        },
        async  getTopicDetail({ commit }: any, payload: object) {
            let result = await topicDetail(payload)
            commit('setTopicDetail',result.data)
            console.log(result.data,111)
        }
    }
}