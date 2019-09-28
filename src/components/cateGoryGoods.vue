<template>
    <div class="cateWrap">
        <div
            class='cateGoryItem'
            v-for="item in goodsList"
            :key="item.id"
            @click="cateClick(item.id,item.name)"
        >
            <img v-lazy="item.list_pic_url" alt />
            <p>{{item.name}}</p>
            <p class="catePrice">￥ {{item.retail_price}}</p>
        </div>
        <div v-if="flag" class="cateGoryItem cateMore" @click="moreClick">
            <p>更多 {{eleName}} 好物</p>
            <img src="/img/icon_go_more.png" alt />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            goodsList:Array,
            eleName:String,
            shopArr:Array,
            id:Number,
            flag:Boolean
        },
        methods: {
          moreClick(id){
            this.$router.history.replace(`/categorys/${this.id}`)
          },
          cateClick(id,name){
            this.$router.push({path:`/goods/${id}`,query:{text:name}})
          }
        },
    }
</script>

<style scoped lang="scss">
.cateWrap{
  display: flex;
  flex-wrap: wrap;
  background: #ccc;
  
}
.cateGoryItem {
  width: 49.8%;
  text-align: center;
  box-sizing: border-box;
  background: white;
  margin: auto;
  margin-top: 1px;
  img {
    width: 100%;
    height: auto;
  }
  p {
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.12rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  overflow: hidden;
}
.cateGoryItemss {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 0.3rem;
    height: 0.3rem;
  }
  p {
    font-size: 0.14rem;
    height: 0.3rem;
    line-height: 0.3rem;
  }
}
.catePrice{
  color:red;
}
.cateMore{
  width: 49.8%;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    height: .3rem;
    width: .3rem;
  }
}
</style>