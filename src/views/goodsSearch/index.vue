<template>
    <div class="searchPage">
       <div class="searchFix">
           <div class="searchInputWrap">
               <div class="goBack">＜</div>
               <div class="icon"></div>
               <input type="text" placeholder="520元礼包抢先领" class="searchInput">
               <div class="cancelSearch">取消</div>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.searchWrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .5rem;
    background: #fff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    font-size: .14rem;
    .searchInput{
      width: 90%;
      height: 70%;
      background: #ededed;
      border-radius: .05rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .14rem;
      color: #666;
    }
}
</style>