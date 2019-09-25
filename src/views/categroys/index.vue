<template>
  <div class="wrap">
    <headers :txt="txt" />
    <div class="cateBox">
        <div class="catd" ref="catd">
            <div class="content" ref="catdList">
                <span 
                  v-for="(ele,index) in categorysArr" 
                  :class="{cative:id==ele.id}" 
                  @click="setInd(index,ele.id)" 
                  :key="ele.id"
                  :ref="ele.id"
                >{{ele.name}}</span>
            </div>
        </div>
        <!-- <div class="categoryDetail" v-for="item in arr" :key="item.id">
            <div>{{item.name}}</div>
            <div>{{item.front_name}}</div>
<<<<<<< HEAD
        </div> -->
        <!-- <newGood :newGoodList="renderArr"></newGood> -->
        <bscrolls/>
=======
        </div>
        <cateGoryGoods :goodsList="renderList"></cateGoryGoods>
>>>>>>> 59f298ca7b283a2e07e71d00d1020f8ea5b15c6d
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import { headers, newGood, bscrolls } from "@/components";
=======
import { headers, cateGoryGoods } from "@/components";
>>>>>>> 59f298ca7b283a2e07e71d00d1020f8ea5b15c6d
import { mapActions, mapState } from "vuex";
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      txt: "奇趣分类",
      id:'1005000',
      element:[],
      // renderArr:[],
      scroll:null,
    };
  },
  components: { 
    headers,
<<<<<<< HEAD
    newGood,
    bscrolls
=======
    cateGoryGoods
>>>>>>> 59f298ca7b283a2e07e71d00d1020f8ea5b15c6d
  },
  computed: {
      ...mapState({
          categorysArr:state=>state.catalog.categorysArr,
          renderList:state=>state.catalog.renderList,
          arr:state=>state.catalog.arr,
      })
  },
  methods: {
    ...mapActions("catalog", ["categorys","getGood"]),
    setInd(ind,id){
        this.id=id
        this.categorys(id);
        this.getGood({ categoryId: this.id, page: 1, size: 1000 })
    }
  },
  mounted(){
      this.id=this.$route.params.id
      this.categorys(this.id);

      this.scroll = new BScroll(this.$refs.catd, {
          click: document.body.width > 768 ? false : true,
          scrollX: true,
          eventPassthrough: 'vertical'
      });
      this.getGood({ categoryId: this.id, page: 1, size: 1000 })
      this.$nextTick(()=>{
        let elements = this.$refs.catdList.children;
        console.log([...elements])
      })
  },
  watch: {
      id(id){
        let target=this.$refs[id];//点击的每一项
        this.scroll.scrollToElement(target[0],500);
      }
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  font-size: 0.14rem;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
}
.cateBox{
    width: 100%;
    height: 100%;
    overflow:hidden;
    background-color: #f5f5f9;
    display: flex;
    flex-direction: column;
    .catd{
        width: 100%;
        height: .45rem;
        overflow: hidden;
        background-color: #fff;
        position: absolute;
        .content{
          width: 6.75rem;
          height: 100%;
          display: flex;
          span{
              width: .75rem;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
          }
        }
    }
}
.categoryDetail{
    padding: .1rem 0;
    margin-top: .4rem;
    div:nth-of-type(1){
      height: .3rem;
      line-height: .3rem;
      text-align: center;
    }
    div:nth-of-type(2){
      color: #666;
      height: .25rem;
      line-height: .25rem;
      font-size: .14rem;
      text-align: center;
    }
}
.cative{
    color: skyblue;
    border-bottom: 1px solid skyblue;
}
</style>
