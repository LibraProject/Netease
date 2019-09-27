import { shopCar, addShop, delShop } from '../../service'

export default {
    namespaced: true,
    state: {
        cartList:[],
        itemCheck:0,
        checkAll:true,
        goodsCount:{},
        sucessNum:0,
    },
    mutations: {
        setShopCar(state:any,payload:any){
            state.cartList=payload.cartList,
            state.cartTotal=payload.cartTotal
            state.sucessNum=payload.cartList.length
        },
        setCheck(state:any,payload:any){
            const {i,checked}=payload
            // 单选
            state.cartList[i].checked=checked===1?0:1
            // 所有单选为true后，全选可以为true
            state.checkAll=state.cartList.every((item:any)=>item.checked);
            // console.log(state.cartList[i].checked,2123222222)
            // 已选的数字控制
            if(state.cartList[i].checked===0){
                state.sucessNum--
            }else if(state.cartList[i].checked===1){
                state.sucessNum++
            }
        },
        setAllCheck(state:any,payload:any){
            state.checkAll=!payload
            state.cartList.map((item:any)=>item.checked=state.checkAll)
            // 已选的数字控制
            if(state.checkAll){
                state.sucessNum=state.cartList.length
            }else{
                state.sucessNum=0
            }
        },
        setMin(state:any,payload:any){
            state.cartList[payload].number--
        },
        setMax(state:any,payload:any){
            state.cartList[payload].number++
        },
        setDelShop(state:any,payload:any){
            state.cartList=payload.cartList
            console.log(state.cartList)
        }
    },
    actions: {
        // 商品列表
        async getShopCar({ commit }: any) {
            let result = await shopCar()
            // console.log(result.data,'-----result')
            commit('setShopCar',result.data)
        },
        // 添加商品
        async getAddShop({commit}:any,payload:any){
            let result = await addShop(payload)
            // console.log(result.data,'-----result')
        },
        // 删除商品
        async getdelShop({commit}:any,payload:any){
            let result = await delShop(payload)
            // console.log(result.data,'-----result')
            commit('setDelShop',result.data)
        }
    },
    getters:{
        // 计算总价
        setTotal(state:any,payload:any){
            // console.log(payload.getCheked, 'filter 后的数组')
            return payload.getCheked.reduce((prv:any,cru:any)=>{
                return prv+=cru.number*cru.retail_price
            },0)
        },
        getCheked(state:any,payload:any){
            // 判断是否是选中状态，不是则不计算总价
            return state.cartList.filter((item:any)=>item.checked===1)
        }
    }
}