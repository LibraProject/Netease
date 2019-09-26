<template>
    <div class="wrap">
        <div class="main">
            购物车
        </div>
        <foots/>
    </div>
</template>

<script>
import {foots} from '@/components'
    export default {
        data(){
            return{
                
            }
        },
        components:{foots}
    }
</script>

<style lang="scss" scoped>
.wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .main{
        flex: 1;
        overflow-y:scroll;
    }
}
</style>