<template>
    <div class="cart">
        <service/>
        
        <div v-if="cartList.length===0" class="noGoods">
            <img src="/img/noGoods.png" alt="">
            <p>去添加点什么吧~</p>
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
    </div>
</template>

<script>
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
            }
        },
        created() {
        },
    }
</script>

<style lang="scss" scoped>
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
</style>