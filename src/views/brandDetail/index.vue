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
            let {di,name} = this.$route.params
            this.title = name;
        }
    }
</script>

<style lang="scss" scoped>

</style>