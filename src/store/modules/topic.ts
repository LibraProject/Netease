import { topic, topicDetail } from '../../service'

export default {
    namespaced: true,
    state: {
        list:[]
    },
    mutations: {
        setTopic(state:any,payload:any){
            state.list=payload.data
        }
    },
    actions: {
        async  getTopic({ commit }: any, payload: object) {
            let result = await topic(payload)
            commit('setTopic',result.data)
            // console.log(result)
        },
        async  getTopicDetail({ commit }: any, payload: object) {
            let result = await topicDetail(payload)
            // commit('setTopic',result.data)
            console.log(result,111)
        }
    }
}