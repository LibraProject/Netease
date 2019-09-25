<template>
  <div class="cateGoryWrap">
    <div class="cateGoryBox" v-for="ele in shopArr" :key="ele.name">
      <div class="cateGoryName">{{ele.name}}</div>
      <div
        :class="[{'clerbootom':index==ele.goodsList.length-1},'cateGoryItem']"
        v-for="(item,index) in ele.goodsList"
        :key="item.name"
      >
        <img v-lazy="item.list_pic_url" alt />
        <p>{{item.name}}</p>
        <p class="catePrice">￥ {{item.retail_price}}</p>
      </div>
      <div class="cateGoryItem cateGoryItemss">
        <p>更多 {{ele.name}} 好物</p>
        <img src="/img/icon_go_more.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["shopArr"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.cateGoryName {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f9;
}
.cateGoryBox {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
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

.cateGoryItemss {
  border-bottom: 0;
}
.cateGoryItem:nth-child(odd) {
  border-right: 0;
}
.clerbootom {
  border-bottom: 0;
}
.catePrice{
    color: #a73d3d;
}
</style>