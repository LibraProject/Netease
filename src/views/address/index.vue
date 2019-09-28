<template>
    <div class="wrap">
        <ptitles ></ptitles>
        我的中的地址管理
    </div>
</template>

<script>
import {ptitles} from '@/components'
    export default {
        data(){
            return {

            }
        },
        components:{ptitles},
        created(){
            console.log(this.$route);
        }
    }
</script>

<style lang="scss" scoped>

</style>