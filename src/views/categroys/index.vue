<template>
  <div class="wrap">
    <headers :txt="txt" />
    <div class="cateBox">
        <div class="catd" ref="SItem">
            <span v-for="(ele,index) in categorysArr" :class="{cative:index==ind}" @click="setInd(index,ele.id)"  :key="ele.id">{{ele.name}}</span>
        </div>
        <div class="cateItem"> 
             <div class="newGoodsItem" v-for="element in categorysArr" :key="element.id">
              <img :src="element.list_pic_url" alt="">
              <p>{{element.name}}</p>
              <b class="Picolor">￥ {{element.retail_price}}</b>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { headers } from "@/components";
import { mapActions, mapState } from "vuex";
import Bscroll from 'better-scroll'

export default {
  data() {
    return {
      txt: "奇趣分类",
      id:1005000,
      element:[],
      renderArr:[],
      ind:0
    };
  },
  components: { headers },
  computed: {
      ...mapState('catalog',['categorysArr']),
    // setWidth(){
    //     let elements = this.$refs.SItem.children;
    //     let w = elements.length * elements[0].offsetwidth;

    // }
  },
  methods: {
    ...mapActions("catalog", ["categorys",'categorysList']),
    setInd(ind,id){
        this.ind=ind;
        this.id=id
        this.categorysList(id)
    }
    // setWidth(){
    //    this.$refs.SItem.style.width = this.element.length*this.element[0].offsetWidth +'px'
    //    let arr = Array.from(this.element)
    //    console.log(arr)
    //    console.log(this.element)
    //    new Bscroll('.cateBox',{
    //        scrollX:true,
    //        click:true
    //    })
    // }
  },
  created() {
    console.log(this.categorysArr)
    // console.log(this.$route.params)
    let {id} = this.$route.params;
    console.log(id)
     this.categorys(id);
  },
  mounted(){
    //   this.$nextTick(()=>{
    //        this.element = this.$refs.SItem.children;
    //         this.setWidth() 

    //   })
       
  }
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
    height: .45rem;
    display: flex;
    overflow: hidden;
    .catd{
        display: flex;
        width: 100%;
        height: 100%;
        overflow-x: scroll;
        span{
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20%;
            flex-shrink: 0;
        }
    }
}
.cative{
    color: skyblue;
    border-bottom: 1px solid skyblue;
}
</style>
