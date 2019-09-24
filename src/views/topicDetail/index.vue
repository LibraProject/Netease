<template>
    <div>
        专题详情
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
               id:''
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
                this.$store.dispatch('topic/getTopicDetail' ,{
                    id:this.$route.params.id
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>