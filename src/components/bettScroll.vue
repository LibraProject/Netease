<template>
    <div class="BScrollwrap">
        <div class="bscrollChild">
            <div class="asd" v-for="ele in num" :key="ele">
                "列表"--{{ele}}
            </div>
            <p class="bsUp">{{msgUp}}</p>
            <p class="bsDown">{{msgDown}}</p>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    props:{
        
    },
    components:{

    },
    data(){
        return {
            Bs:'',
            isFlag:false,   // 下拉
            isloading:false,   // 上拉
            page:1,
            limit:10,
            num:30,
            BsDate:{
                up:'释放刷新...',
                upend:'下拉刷新...',
                down:'释放加载...',
                downEnd:'上拉加载...'
            },
            msgUp:"下拉刷新...",
            msgDown:'上拉加载...'
        }
    },
    computed:{

    },
    methods:{
        scrollUp(e){
            let maxH = Math.abs(this.Bs.maxScrollY),
                h = Math.abs(e.y);
            if(h-maxH>50){
                this.isFlag = true;
                this.msgDown = this.BsDate.down;
            }else{
                this.isFlag = false;
                this.msgDown = this.BsDate.downEnd;
            }
            if(e.y>50){
                this.msgUp = this.BsDate.up;
                this.isloading = true;
            }
            
        },
        scrollEnd(e){
            if(this.isFlag){
                // 上拉加载
                this.num+=30
            }
            if(this.isloading){
                // 下拉刷新
                location.reload() 
            }
        }
    },
    created(){

    },
    mounted(){
        this.$nextTick(()=>{
            if(!this.Bs){
                this.Bs = new BScroll('.BScrollwrap',{
                    scrollY:true,
                    click:true,
                    probeType:3,
                    mouseWheel: {
                        speed: 20,
                        invert: false,
                        easeTime: 300
                    }
                })
                this.Bs.on('scroll',this.scrollUp)
                this.Bs.on('scrollEnd',this.scrollEnd)
            }else{
                 this.Bs.refresh();
            }
        })
    }
    
}
</script>
<style scoped lang="scss">
.BScrollwrap{
    flex: 1;
    overflow: hidden;
    .bscrollChild{
        width: 100%;
        position: relative;
        .asd{
            width: 100%;
            height: .45rem;
            line-height: .45rem;
            text-align: center;
        }
        .bsUp{
            position: absolute;
            top: -0.45rem;
            left: 0;
            width: 100%;
            height: .45rem;
            color: red;
            text-align: center;
            line-height: .45rem;
            background:#ccc;
            color: #333;
        }
        .bsDown{
            position: absolute;
            bottom: -0.45rem;
            left: 0;
            height: .45rem;
            width: 100%;
            color: red;
            text-align: center;
            line-height: .45rem;
            background:#ccc;
            color: #333;
        }
    }
}
</style>