<template>
    <!-- <div class="wrap">
        <div class="main">
            购物车
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
        pullUpLoadEvent () {
            this.myScroll.on('pullingUp', () => {
                console.log('上拉加载')
                if (this.page < this.totalPage) {
                    this.page++
                    this.requestData()
                }
            })
        }
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
</style>