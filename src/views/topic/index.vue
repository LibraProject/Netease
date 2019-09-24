<template>
    <div class="tabPageContent">
        <router-link class="topicItem" v-for="(item,i) in list" :key="i" :to="`/topicDetail/${item.id}`">
            <img :src="item.scene_pic_url" alt="">
            <div class="topicItemTitle">{{item.title}}</div>
            <div class="topicItemSubtitle">{{item.subtitle}}</div>
            <div class="topicItemPrice">{{item.price_info}}元起</div>
        </router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
               
            }
        },
        computed:{
            ...mapState({
                list:state=>state.topic.list
            })
        },
        mounted() {
            this.getlist()
        },
        methods: {
            getlist(){
                this.$store.dispatch('topic/getTopic' ,{
                    page:'1',
                    size:'100'
                })
            }
        }
    }
</script>

<style scoped>
.topicItem{
    height: 2.9rem;
    margin-top: .1rem;
    background: white;
    display: block;
    color: #000;
    cursor: pointer;
}
.topicItem>img{
    width: 100%;
    height: 2rem;
}
.topicItemTitle{
    font-size: .14rem;
    line-height: .2rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.topicItemSubtitle{
    padding: .05rem .1rem;
    font-size: .12rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: gray;
    height: .2rem;
}
.topicItemPrice{
    padding: .05rem;
    padding-bottom: .1rem;
    font-size: .14rem;
    text-align: center;
    color: red;
    line-height: .2rem;
    height: .35rem;
}
.tabPageContent .topicItem:nth-of-type(1){
    margin-top: 0;
}
</style>