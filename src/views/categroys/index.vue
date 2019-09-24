<template>
    <div class="wrap">
        <headers :txt="txt" />
        
    </div>
</template>

<script>
import {headers} from '@/components'
    export default {
        data(){
            return {
                txt:"奇趣分类"
            }
        },
        components:{headers}
    }
</script>

<style lang="scss" scoped>
.wrap{
      width: 100%;
  height: 100%;
  font-size: 0.14rem;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;

}
</style>