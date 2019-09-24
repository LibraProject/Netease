<template>
    <div class="wrap">
        <headers :txt="txt"/>
        <div class="main">
            <div class="cateR">
                <ul>
                    <li v-for="(item,index) in categorysArr" :class="{lactive:ind==index}" :key="item.id">{{item.name}}</li>
                </ul>
            </div>
        </div>
        <foots/>
    </div>
</template>

<script>
import { headers, foots } from '@/components';
import { mapState, mapActions } from 'vuex'
    export default {
        data(){
            return {
                txt:"商品分类",
                ind:0
            }
        },
        components:{headers,foots},
        computed:{
            ...mapState('catalog',['categorysArr'])
        },
        methods:{
            ...mapActions('catalog',['categorys'])
        },
        created(){
            this.categorys()
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display:flex;
    flex-direction: column;
    padding: .5rem 0;
}
.main{
    display:flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .cateR{
        width: 25%;
        ul{
            width: 100%;
            li{
                width: 100%;
                height: .45rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .lactive{
                border-left: 2px solid rgb(55, 181, 231);
                color: rgb(55, 181, 231);
            }
        }
    }
    
}
</style>