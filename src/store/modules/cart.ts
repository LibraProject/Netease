import { shopCar, addShop } from '../../service'

export default {
    namespaced: true,
    state: {
        cartList:[],
        itemCheck:0,
        checkAll:false
    },
    mutations: {
        setShopCar(state:any,payload:any){
            state.cartList=payload.cartList
        },
        setCheck(state:any,payload:any){
            const {i,checked}=payload
            state.cartList[i].checked=checked===1?0:1
        },
        setAllCheck(state:any,payload:any){
            console.log(this)
        }
    },
    actions: {
        async getShopCar({ commit }: any) {
            let result = await shopCar()
            console.log(result.data,'-----result')
            commit('setShopCar',result.data)
        },
        async getAddShop({commit}:any,payload:any){
            let result = await addShop(payload)
            console.log(result.data,'-----result')
        }
    },
    getters:{
        IsAll(state:any){
            return state.cartList.every((item:any)=>item.checked);
        },
       
    }
}