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
   
  },
  methods: {
    ...mapActions("catalog", ["categorys",'categorysList']),
    setInd(ind,id){
        this.ind=ind;
        this.id=id
        this.categorysList(id)
    }
 
  },
  created() {
    console.log(this.categorysArr)
    let {id} = this.$route.params;
    console.log(id)
     this.categorys(id);
  },
  mounted(){
  }
};
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
