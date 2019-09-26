import { goodDetail, goodLook } from '../../service'

export default {
    namespaced: true,
    state: {
        attribute:[],
        comment:{},
        gallery:[],
        issue:[],
        goodsList:[],
        info:{},
        commentData:{},
        img:'',
        numCar:0
    },
    mutations: {
        setGood(state:any,payload:any){
            // 商品参数
            state.attribute=payload.attribute
            // 评论条数
            state.comment=payload.comment
            // 详情单条评论
            state.commentData=payload.comment.data
            // 轮播图
            state.gallery=payload.gallery
            // 选择规格中的图片
            state.img=payload.gallery[0].img_url
            // 常见问题
            state.issue=payload.issue
            // 主要参数
            state.info=payload.info
        },
        setGoodLook(state:any,payload:any){
            state.goodsList=payload.goodsList
        },
        setNumCar(state:any,payload:any){
            state.numCar+=payload
            console.log(state.numCar)
        }
    },
    actions: {
        async  getGood({ commit }: any, payload: object) {
            let result = await goodDetail(payload)
            // console.log(result.data,1111)
            commit('setGood',result.data)
        },
        async  getGoodLook({ commit }: any, payload: object) {
            let result = await goodLook(payload)
            commit('setGoodLook',result.data)
            // console.log(result.data,1111)
        }
    }
}