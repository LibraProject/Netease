<template>
<<<<<<< HEAD
    <!-- <div class="wrap">
        <div class="main">
            购物车
=======
    <div class="cart">
        <service/>
        
        <div v-if="cartList.length===0" class="noGoods">
            <img src="/img/noGoods.png" alt="">
            <p>去添加点什么吧~</p>
>>>>>>> e2ca1f40356179634a9b4a062fd9582e4e951d8c
        </div>

        <div v-else class="cartGoodsListWrap">
            <div class="cartGoodsItem" v-for="(ele,i) in cartList" :key="ele.id">
                <div class="isCheckItem" @click="itemCheck(ele.checked,i)">
                    <img v-if="ele.checked" src="/img/isCheck.png" alt="">
                    <img v-else src="/img/noCheck.png" alt="">
                </div>
                <div class="goodsImg">
                    <img :src="ele.list_pic_url" alt="">
                </div>

                <ul v-if="isShow" class="cartGoodsMsg">
                    <li>{{ele.goods_name}}</li>
                    <li></li>
                    <li>￥{{ele.retail_price}}</li>
                </ul>
                <div v-if="isShow" class="cartGoodsNum">x{{ele.number}}</div>

                <div v-else class="cartGoodEditWrap">
                    <div class="cartEditSizeName">已选择：</div>
                    <div class="cartEditNum">
                        <div>￥{{ele.retail_price}}</div>
                        <ol class="countOp">
                            <li>-</li>
                            <li>0</li>
                            <li>+</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="cartGoodsDo">
            <div class="isCheckItem" @click="allClick">
                <img v-if="IsAll()" src="/img/isCheck.png" alt="">
                <img v-else src="/img/noCheck.png" alt="">
            </div>
            <div class="cartMsgAll">
                已选（1）￥199
            </div>
            <div class="cartAllDoButton" @click="compile">{{isShow?'编辑':'完成'}}</div>
            <div class="cartAllDoButton pay">下单</div>
        </div>

        <foots/>
    </div> -->
    <div class='content' ref="content">
        <div class='scroll'>
       	    <div class="loading"></div>
            <div class='item'>1</div>
            <div class='item'>2</div>
            <div class='item'>3</div>
            <div class='item'>4</div>
            <div class='item'>5</div>
            <div class='item'>6</div>
            <div class='item'>7</div>
            <div class='item'>8</div>
            <div class='item'>9</div>
            <div class='item'>10</div>
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
import Bscroll from 'better-scroll'
import axios from 'axios'
import { mapActions, mapState } from "vuex";
import requerst from "@/utils/request";
export default {
    name: 'scroll',
    data () {
        return {
            pageNo: 1,
            totalPage: 0,
            isPullDown: false,
            options: {
                probeType: 3,
                pullDownRefresh: {
                    threshold: 40, // 刷新时机
                    stop: 30       // 回弹停留的距离
                },
                pullUpLoad: {
                    threshold: 20  // 开始加载的时机
                },
                startY: 0
=======
    import { service, foots } from '@/components'
    import { mapState, mapGetters, mapMutations } from 'vuex'

    export default {
        data() {
            return {
                itemChecked:1,
                isShow:true,
            }
        },
        components:{
            service,
            foots
        },
        computed: {
            ...mapState({
                cartList:state=>state.cart.cartList,
                checkAll:state=>state.cart.checkAll,
            })
        },
        mounted() {
            this.$store.dispatch('cart/getShopCar')
            console.log(this.checkAll,'-------all')
        },
        methods: {
            ...mapGetters('cart',['IsAll']),
            itemCheck(checked,i){
                this.$store.commit('cart/setCheck',{checked,i})
            },
            compile(){
                this.isShow=!this.isShow
            },
            allClick(){
                this.$store.commit('cart/setAllCheck')
            }
        },
        watch: {
            cartList(cartList){
                console.log(this.cartList,11123213213)
>>>>>>> e2ca1f40356179634a9b4a062fd9582e4e951d8c
            }
        }
    },
    created () {
        this.requestData()
    },
    mounted () {
        this.$nextTick(() => {
            this.initScroll()
        })
    },
    methods: {
        ...mapActions("catalog", ["categorys", "getGood"]),
        initScroll () {
            this.myScroll = new Bscroll(this.$refs.content, this.options)
            this.pullDownEvent()
            this.pullUpLoadEvent()
        },
        requestData () {
        //    const arr= await this.getGood({ categoryId:'1005000', page: this.pageNo, size: 10 });
            requerst.get('/goods/list',{
                params:{
                    categoryId:'1005000', page: this.pageNo, size: 10
                }
            }).then(res => {
                console.log(res,'--------res')
                if (this.isPullDown) {
                    this.dataList = [] // 清空数据，以防重复渲染
                }
                this.dataList = res.data.list
                this.page = res.page
                this.totalPage = res.totalPage
                this.$nextTick(() => {
                    this.finishPull()
                })
            })
        },
        finishPulling() {
            this.myScroll.finishPullDown() // 结束下拉刷新
            this.myScroll.finishPullUp()   // 结束上拉加载更多
            this.myScroll.refresh()        // dom节点变化，重新计算better-scroll
        },
        pullDownEvent () {
            this.myScroll.on('pullingDown', () => {
                this.isPullDown = true
                console.log('下拉刷新')
                this.page = 1
                this.requestData()
            })
        },
<<<<<<< HEAD
        pullUpLoadEvent () {
            this.myScroll.on('pullingUp', () => {
                console.log('上拉加载')
                if (this.page < this.totalPage) {
                    this.page++
                    this.requestData()
                }
            })
        }
=======
        created() {
        },
>>>>>>> e2ca1f40356179634a9b4a062fd9582e4e951d8c
    }

}





// import {foots} from '@/components'
//     export default {
//         data(){
//             return{
                
//             }
//         },
//         components:{foots}
//     }


</script>

<style lang="scss" scoped>
<<<<<<< HEAD
.content {
    position: absolute;
    top: 0; // 与bottom同理
    left: 0;
    right: 0;
    bottom: .4rem; // 底部有footer，没有的话设置为0
    overflow: hidden;
    .item{
        height: .8rem;
        background-color: #eee;
    }
    .loading {
        position: absolute;
        top: -0.25rem;
        left: 50%;
        transform: translateX(-50%);
        width: .2rem;
        height: .2rem;
        // background: url('../assets/loading.gif');
        background-size: cover;
    }
}




// .wrap{
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
//     .main{
//         flex: 1;
//         overflow-y:scroll;
//     }
// }
=======
    .cart{
        width: 100%;
        height: 100%;
        background-color: #f5f5f9;
    }
    .noGoods{
        img{
            width: 40%;
            margin: 1rem 30% 0;
        }
        p{
            text-align: center;
            color: #afafaf;
            font-style: .15rem;
        }
    }
    .cartGoodsItem{
        display: flex;
        height: 1.1rem;
        padding: .1rem;
        padding-left: 0;
        background: #fff;
        margin-top: 1px;
        .isCheckItem{
            width: .4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: .2rem;
                height: auto;
            }
        }
        .goodsImg{
            width: .9rem;
            background: #f4f4f4;
            img{
                width: 100%;
                height: .9rem;
            }
        }
        .cartGoodsMsg{
            flex: 1;
            padding: 0 .05rem;
            min-width: 0;
            li{
                height: 33.333%;
                display: flex;
                align-items: center;
                font-size: .14rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            li:nth-of-type(3){
                color: red;
            }
        }
    }
    .cartGoodsDo{
        position: fixed;
        bottom: .5rem;
        height: .55rem;
        left: 0;
        width: 100%;
        background: #fff;
        display: flex;
        box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.2);
        z-index: 1000;
        .isCheckItem{
            width: .4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: .2rem;
                height: auto;
            }
        }
        .cartMsgAll{
            flex: 1;
            line-height: .55rem;
            font-size: .15rem;
        }
        .cartAllDoButton{
            width: auto;
            padding: 0 .25rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .cartAllDoButton{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .pay{
            background: #ab2b2b;
            color: #fff;
            padding: 0;
            width: 1.3rem;
        }
    }
    .cartGoodEditWrap{
        flex: 1;
        min-width: 0;
        div{
            height: 50%;
            display: flex;
            align-items: center;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left: .1rem;
        }
        .cartEditSizeName{
            font-size: .15rem;
        }
        .cartEditNum{
            div:nth-of-type(1){
                color: red;
                width: auto;
            }
            .countOp{
                flex: 1;
                // flex-direction: row-reverse;
                display: flex;
                margin-left: .5rem;
                border: 1px solid gainsboro;
                li{
                    height: .3rem;
                    display: inline-block;
                    border: 1px solid gainsboro;
                    line-height: .3rem;
                    text-align: center;
                    font-size: .2rem;
                }
                li:nth-of-type(1){
                    flex: 3; 
                    border-left: none;
                }
                li:nth-of-type(3){
                    flex: 3; 
                    border-right: none;

                }
                li:nth-of-type(2){
                    flex: 4;
                    border-right: none;
                    border-left: none;
                }
            }
        }
    }
>>>>>>> e2ca1f40356179634a9b4a062fd9582e4e951d8c
</style>