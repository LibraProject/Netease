<template>
    <div>
        <headers :txt="title"/>
        品牌制造商直供
    </div>
</template>

<script>
import { headers } from '@/components'
    export default {
        data(){
            return {
                title:"标题"
            }
        },
        components:{headers},
        created(){
            console.log(this.$route)
        }
    }
</script>

<style lang="scss" scoped>

</style>