import { categorys, category, goodList, branddetail } from '../../service'

export default {
    namespaced: true,
    state: {
        categorysArr: [],
        renderArr: [],
        renderList:[],
        brandArr:{},
        name:'',
        frontName:''
    },
    mutations: {
        setRend(state:any,payload: any){
            // console.log(payload,'head----------')
            state.renderArr = payload
        },
        setCate(state: any, payload: any) {
            // console.log(payload,'----setCate')
            state.categorysArr = payload.data.categoryList;
            let index = payload.data.categoryList.findIndex((el:any) => el.id == payload.id);
            state.name=payload.data.categoryList[index].name
            state.frontName=payload.data.categoryList[index].front_name
        },
        setGood(state:any,payload:any){
            state.renderList=payload.data
        },
        setBrand(state: any, payload: any){
            state.brandArr = payload
        }
    },
    actions: {
        async categoryNav({commit}: any,id:any){
            let result = await category(id)
            commit('setRend',result.data.currentCategory.subCategoryList)
        },
        async categorys({ commit }: any, id: any) {
            let result = await categorys()
            commit('setCate', { data: result.data, id })
            
        },
        async getGood({ commit }: any,payload:any) {
            let result = await goodList(payload)
            commit('setGood', result.data)
        },
        async branddetail({commit}: any, id:any){
            let result = await branddetail(id)
            commit('setBrand', result.data.brand)
        }
    }
}