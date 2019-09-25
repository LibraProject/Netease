<template>
  <div class="wrap">
    <headers :txt="txt" />
    <div class="main">
      <div class="cateR">
        <ul>
          <li v-for="(item,index) in categorysArr" :class="{lactive:ind==index}" @click="clickme(item.id,index)" :key="item.id" >{{item.name}}</li>
        </ul>
      </div>
      <div class="cateL">
          <div class="cateBaner">
            <img v-lazy="categorysArr[ind].wap_banner_url" alt="">
          </div>
          <div class="catetitle">——&emsp;{{categorysArr[ind].name}}&emsp;——</div>
          <div class="heng">
              <div class="newGoodsItem" v-for="element in renderArr" :key="element.id" @click="goCateDetail(element.id)">
                <img v-lazy="element.wap_banner_url" alt="">
                <p>{{element.name}}</p>
              </div>
          </div>
      </div>
    </div>
    <foots />
  </div>
</template>

<script>
import { headers, foots } from "@/components";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      txt: "商品分类",
      ind: 0,
      id:500
    };
  },
  components: { headers, foots },
  computed: {
    ...mapState("catalog", ["categorysArr",'renderArr'])
  },
  methods: {
    ...mapActions("catalog", ["categorys",'category']),
    clickme(id, ind) {
      this.ind = ind;
      this.category(id)
    },
    goCateDetail(id){
      console.log(id)
    }
  },
  created() {
    this.categorys();
    console.log(this.categorysArr),
    this.category(1005000)
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
}
.main {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .cateR {
    width: 25%;
    flex-shrink: 0;
    position: relative;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 0.45rem;
        display: flex;
        align-items: center;
        justify-content: center;
        // transition: 2s all linear;
      }
      .lactive {
        color: rgb(103, 192, 228);
        border-left: 1px solid rgb(103, 192, 228);
      }
    }
  }
  .cateL{
    flex: 1;
    overflow-y:scroll;
    padding: .1rem;
    .catetitle{
      color: #2196f3;
      text-align: center;
      height: .45rem;
      line-height: .45rem;
    }
    .cateBaner{
      width: 100%;
      height: 1rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .heng{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .newGoodsItem{
        width: 50%;
        height: 1.5rem;
        text-align: center;
        padding: .2rem 0;
        img{
            height: 50%;
        }
        p{
            padding: .08rem 0;
        }
        .Picolor{
            color:darkred;
            font-weight: 100;
            height: .15rem;
            line-height: .15rem;
        }
    }
    }
    
  }
}
</style>