<template>
  <div class="BScrollwrap">
    <div class="bscrollChild">
          <div class="categoryDetail">
            <div>{{msgName.name}}</div>
            <div>{{msgName.frontName}}</div>
        </div>
        <div class="catebox">
           <div
            :class="[{'clerbootom':index==newArr.length-1},'cateGoryItem']"
            v-for="(item,index) in newArr"
            :key="item.name"
            @click="cateClick(item.id)"
        >
            <img v-lazy="item.list_pic_url" alt />
            <p>{{item.name}}</p>
            <p class="catePrice">￥ {{item.retail_price}}</p>
        </div>
        </div>
        
      <p class="bsUp">{{msgUp}}</p>
      <p class="bsDown">{{msgDown}}</p>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapActions, mapState } from "vuex";
export default {
  props: ['goodsList','msgName'],
  components: {},
  data() {
    return {
      Bs: "",
      isFlag: false, // 下拉
      isloading: false, // 上拉
      page: 1,
      limit: 10,
      num: 30,
      BsDate: {
        up: "释放刷新...",
        upend: "下拉刷新...",
        down: "释放加载...",
        downEnd: "上拉加载..."
      },
      msgUp: "下拉刷新...",
      msgDown: "上拉加载...",
      newArr:[]
    };
  },
  computed: {
      ...mapState({arr:state=>state.catalog.arr})
  },
  methods: {
    scrollUp(e) {
      let maxH = Math.abs(this.Bs.maxScrollY),
        h = Math.abs(e.y);
        // console.log(maxH,'最大高度',h,'当前高度')
      if (h > maxH + 100) {
        this.isFlag = true;
        this.msgDown = this.BsDate.down;
      } else {
        this.isFlag = false
        this.msgDown = this.BsDate.downEnd;
      }
      if (e.y > 50) {
        this.msgUp = this.BsDate.up;
        this.isloading = true;
      }else{
        this.msgUp = this.BsDate.upend;
      }
     
    },
    scrollEnd(e) {
       let maxH = Math.abs(this.Bs.maxScrollY),
        h = Math.abs(e.y);
        console.log(maxH,'最大高度',h,'当前高度')

      if (this.isFlag) {
        // 上拉加载
      }
      if (this.isloading) {
        location.reload();
      }
    },
  },
  created() {
    this.newArr = this.goodsList.slice((this.page-1)*this.limit,this.page*this.limit)
    
  },
  watch:{
    goodsList(goodsList){
      this.newArr = this.goodsList.slice((this.page-1)*this.limit,this.page*this.limit)
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.Bs) {
        this.Bs = new BScroll(".BScrollwrap", {
          scrollY: true,
          click: true,
          probeType: 3,
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300
          }
        });
        this.Bs.on("scroll", this.scrollUp);
        this.Bs.on("scrollEnd", this.scrollEnd);
      } else {
        this.Bs.refresh();
      }
    })
  }
};
</script>
<style scoped lang="scss">
.BScrollwrap {
  flex: 1;
  height: 100%;
  margin-top: .45rem;
  overflow: hidden;
  .bscrollChild {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    .categoryDetail{
    padding: .1rem 0;
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
    .asd {
      width: 100%;
      height: 0.45rem;
      line-height: 0.45rem;
      text-align: center;
    }
    .bsUp {
      position: absolute;
      top: -0.45rem;
      left: 0;
      width: 100%;
      height: 0.45rem;
      color: red;
      text-align: center;
      line-height: 0.45rem;
      background: #ccc;
      color: #333;
    }
    .bsDown {
      position: absolute;
      bottom: -0.45rem;
      left: 0;
      height: 0.45rem;
      width: 100%;
      color: red;
      text-align: center;
      line-height: 0.45rem;
      background: #ccc;
      color: #333;
    }
    .cateWrap {
        width: 100%;
        height: 100%;
      display: flex;
      flex-wrap: wrap;
    }
    .catebox{
      display:flex;
      flex-wrap: wrap;
      .cateGoryItem {
      width: 50%;
      text-align: center;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      background: white;
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
    .clerbootom {
      border-bottom: 0;
    }
    .cateGoryItemss {
      border-bottom: 0;
    }
  }
}
</style>