<template>
    <div class="wrap">
        <headers :txt='title'></headers>
        我的中的地址管理
    </div>
</template>

<script>
import {headers} from '@/components'
import {mapActions,mapState} from 'vuex'
    export default {
        data(){
            return {
                title:"地址管理"
            }
        },
        components:{headers},
        methods:{
            ...mapActions('address',['getAddressList'])
        },
        computed:{
            ...mapState('address',['addressList'])
        },
        created(){
            this.getAddressList()
            console.log(this.$route);
        },
        mounted(){
            console.log(this.addressList)
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // overflow: hidden;
    box-sizing: border-box;
    padding-top:.55rem;
    background-size: auto;
    // background: url('/img/line.png') ;
}
</style>