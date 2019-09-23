<template>
    <div class="foots">
           <span>首页</span>
            <span>专题</span>
            <span>分类</span>
            <span>购物车</span>
            <span>我的</span>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.foots{
    width: 100%;
    height: 0.5rem;
    display: flex;
    span{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>