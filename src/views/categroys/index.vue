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
      <scroll class="wrap" :data="data" :pulldown="pulldown" :pullup="true" @pulldown="loadData">
        <div>
            <div class="categoryDetail">
            <div>{{obj.name}}</div>
            <div>{{obj.frontName}}</div>
          </div>
          <div
            :class="[{'clerbootom':index==renderList.length-1},'cateGoryItem']"
            v-for="(item,index) in renderList"
            :key="item.name"
            @click="cateClick(item.id)"
          >
            <img v-lazy="item.list_pic_url" alt />
            <p>{{item.name}}</p>
            <p class="catePrice">￥ {{item.retail_price}}</p>
          </div>
          </div>
            <ul class="content">
            <li>{aaaaaaaa</li>
            </ul>
            <div class="loading-wrapper">131312</div>

      </scroll>
    </div>
  </div>
</template>

<script>
import { getCategory } from "@/service/axios";
import { headers, bscrolls, scroll } from "@/components";
import { mapActions, mapState } from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      txt: "奇趣分类",
      id: "1005000",
      element: [],
      scroll: null,
      obj: {
        name: "",
        frontName: ""
      },
      pulldown: true,
      ind: 0,
      data:[]
    };
  },
  components: {
    headers,
    bscrolls,
    scroll
  },
  computed: {
    ...mapState({
      categorysArr: state => state.catalog.categorysArr,
      renderList: state => state.catalog.renderList,
      arr: state => state.catalog.arr
    })
  },
  methods: {
    ...mapActions("catalog", ["categorys", "getGood"]),
    setInd(id, ele) {
      this.obj.name = ele.name;
      this.obj.frontName = ele.front_name;
      this.id = id;
      this.categorys(id);
      this.getGood({ categoryId: id, page: 1, size: 1000 });
    },
    setMsg() {
      let index = this.element.findIndex(el => el.id == this.id);
      this.obj.name = this.element[index].name;
      this.obj.frontName = this.element[index].front_name;
    },
    getCategoryList: async that => {
      let data = await getCategory();
      that.element = data.categoryList;
      that.setMsg();
    },
    loadData() {
      // this.data=this.renderList.slice((1-1)*10,1*10)
      const data=['ssfsdfsdf','dfgfgfgfd','fgfgfgfg']
      console.log(data,22222222222)
    }
  },
  mounted() {
    this.categorys(this.id);
    this.scroll = new BScroll(this.$refs.catd, {
      click: document.body.width > 768 ? false : true,
      scrollX: true,
      eventPassthrough: "vertical"
    });
    this.getGood({ categoryId: this.id, page: 1, size: 1000 });
  },
  created() {
    this.id = this.$route.params.id;
    this.getCategoryList(this);
    this.loadData()
  },
  watch: {
    id(id) {
      let target = this.$refs[id]; //点击的每一项
      console.log(this.scroll);
      console.log(target);
      console.log(this.$refs);
      this.scroll.scrollToElement(target[0], 500);
    }
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
.cateBox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f5f5f9;
  .catd {
    width: 100%;
    height: 0.45rem;
    overflow: hidden;
    background-color: #fff;
    position: absolute;
    z-index: 5;
    .content {
      width: 6.75rem;
      height: 100%;
      display: flex;
      span {
        width: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
    }
  }
}
.categoryDetail {
  padding: 0.1rem 0;
  margin-top: 0.4rem;
  div:nth-of-type(1) {
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
  }
  div:nth-of-type(2) {
    color: #666;
    height: 0.25rem;
    line-height: 0.25rem;
    font-size: 0.14rem;
    text-align: center;
  }
}
.cative {
  color: skyblue;
  border-bottom: 1px solid skyblue;
}
.cateGoryItem{
  width: 50%;
  overflow: hidden;
}
</style>