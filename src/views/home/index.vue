<template>
    <div class="wrap">
       
    </div>
</template>
<script>
import {getList} from '../../service/service'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:{}
        }
    },
    computed:{

    },
    methods:{
       getDate: async (that)=>{
           let result = await getList();
           console.log(that)
           that.list = result.data
           console.log(result.data)
       } 
    },
    created(){
      this.getDate(this)
    },
    mounted(){

    }
}
</script>
<style scoped>
.wrap{
    width: 100%;
    height: 100%;
    background: #ccc;
    font-size: .14rem;
}
</style>