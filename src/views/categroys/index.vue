<template>
  <div class="wrap">
    <headers :txt="txt" />
    <div class="cateBox">
        <div class="catd" ref="catd">
            <div class="content">
                <span 
                  v-for="(ele) in element" 
                  :class="{cative:id==ele.id}" 
                  @click="setInd(ele.id,ele)" 
                  :key="ele.id"
                  :ref="ele.id"
                >{{ele.name}}</span>
            </div>
        </div>
        <bscrolls :goodsList="renderList" :msgName="obj"></bscrolls>
    </div>
  </div>
</template>

<script>
import { getCategory } from '@/service/axios'
import { headers, bscrolls } from "@/components";
import { mapActions, mapState } from "vuex";
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      txt: "奇趣分类",
      id:'1005000',
      element:[],
      scroll:null,
      obj:{
        name:'',
        frontName:''
      },
      ind:0
    };
  },
  components: { 
    headers,
    bscrolls
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
    setInd(id,ele){
        this.obj.name = ele.name
        this.obj.frontName = ele.front_name
        this.id=id
        this.categorys(id);
        this.getGood({ categoryId: id, page: 1, size: 1000 })
    },
    setMsg(){
        let index = this.element.findIndex((el)=>el.id==this.id);
        this.obj.name = this.element[index].name
        this.obj.frontName = this.element[index].front_name
    },
    getCategoryList: async (that)=>{
      let data = await getCategory();
      that.element = data.categoryList;
      that.setMsg()
    }
  },
  mounted(){
      this.$nextTick(()=>{
            this.categorys(this.id);
            this.scroll = new BScroll(this.$refs.catd, {
                click: document.body.width > 768 ? false : true,
                scrollX: true,
                eventPassthrough: 'vertical'
            });
          this.getGood({ categoryId: this.id, page: 1, size: 1000 })
      })
  },
  created(){
    this.id=this.$route.params.id;
      this.getCategoryList(this)
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
    overflow: auto;
    background-color: #f5f5f9;
    .catd{
        width: 100%;
        height: .45rem;
        overflow: hidden;
        background-color: #fff;
        position: absolute;
        z-index: 5;
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