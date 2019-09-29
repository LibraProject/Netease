import { getAddress, deleteAddress } from '@/service/service'
export default {
    namespaced: true,
    state: {
        addressList: []
    },
    mutations: {
        setaddressList(state: any, payload: any) {
            state.addressList = payload
        },
        deleteList(state: any,payload: any){
            let index = state.addressList.findIndex((el: any)=>el.id==payload);
            state.addressList.splice(index,1);
        }
    },
    actions: {
        // 获取地址数据
        async getAddressList({ commit }: any) {
            let result = await getAddress()
            commit('setaddressList',result.data)
        },
        async deleteAddress({commit}:any,id:any){
            let result = await deleteAddress(id)
            if(result.data==="删除成功"){
                commit('deleteList',id)
            }
        }
    }
}