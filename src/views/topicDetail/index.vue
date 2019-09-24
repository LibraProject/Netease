<template>
    <div class="topicDetail">
        <Header :txt="title"></Header>
        <main>
            <div class="topicDetailImg" v-html="detailList.content"></div>

            <div class="commentWrap">
                <div class="titleLine">
                    <span>精选留言</span>
                    <span>!</span>
                </div>
                <div class="commentList">
                    <div class="commentItem">
                        <div class="userInfo">
                            <span>匿名用户</span>
                            <span>2017-05-15 10:06:01</span>
                        </div>
                        <div class="userComment">是记忆棉 很满意</div>
                    </div>
                    <router-link class="moreComment" :to="`/comment/${314}`">查看更多评论</router-link>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Header from '@/components/header'

    export default {
        data() {
            return {
               id:'',
               title:"关爱他成长的每一个足迹"
            }
        },
        components:{
            Header
        },
        computed:{
            ...mapState({
                detailList:state=>state.topic.detailList,
            })
        },
        mounted() {
            this.getlist()
        },
        methods: {
            getlist(){
                this.$store.dispatch('topic/getTopicDetail' ,{
                    id:this.$route.params.id
                })
            }
        }
    }
</script>

<style lang="scss">
main{
    margin-top: .5rem;
    width: 100%;
    height: 100%;
    font-size: .15rem;
}
.topicDetailImg>img{
    width: 100%;
    height: auto;
    display: block
}
.commentWrap{
    width: 100%;
    height: auto;
    background: white;
    margin-top: .2rem;
    padding: 0 .1rem;
    .titleLine{
        height: .5rem;
        line-height: .5rem;
        display: flex;
        span:nth-of-type(1){
            flex: 8;
        }
        span:nth-of-type(2){
            flex: 2;
            text-align: center;
            font-size: .2rem;
        }
    }
    .titleLine{
        &{
             position: relative;
         }
         &::after{
             content:'';
             position: absolute;
             left: 0;right: 0;
             bottom: 0;
             height: 1px;
             background: #666;
             transform:scaleY(0.5)
        }
    }
}
.commentList{
    padding: .1rem;
    .commentItem{
        height: auto;
        color: #666;
        padding-bottom: .05rem;
        .userInfo{
            height: .4rem;
            line-height: .4rem;
            font-size: .12rem;
            display: flex;
            span:nth-of-type(1){
                flex: 6;
                color: #000;
            }
            span:nth-of-type(2){
                flex: 4;
                text-align: right;
            }
        }
        .userComment{
            line-height: .3rem;
            font-size: .15rem;
        }
        &{
             position: relative;
        }
        &::after{
            content:'';
            position: absolute;
            left: 0;right: 0;
            bottom: 0;
            height: 1px;
            background: #666;
            transform:scaleY(0.5)
        }
    }
    
}

.moreComment{
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    display: block;
    color: #000;
}

</style>