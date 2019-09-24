<template>
  <div class="wrap">
      <div class="main">
        <swiper :banrlist="list.banner" />
        <ptlist :channel="list.channel" />
        <ptitles :title="ptitle" />
        <branwrap :brandList="list.brandList" />
        <ptitles :title="newpin" />
        <newGood :newGoodList="list.newGoodsList" />
        <ptitles :title="Preole" />
        <hotGoods :hotGoods="list.hotGoodsList"/>
        <ptitles :title="zhuanti" />
        <category :category="list.categoryList"/>
        <seamless :topicList="list.topicList"/>
        <shoplist :shopArr="list.categoryList"/>
      </div>
    
    <foots/>
  </div>
</template>
<script>
import { getList } from "@/service";
import {swiper, ptlist, ptitles, branwrap, newGood, hotGoods, category, foots, seamless, shoplist } from '@/components'
export default {
  props: {},
  components: { swiper, ptlist, ptitles, branwrap, newGood, hotGoods, category, foots, seamless, shoplist },
  data() {
    return {
      list: {},
      ptitle: "品牌制造商直供",
      newpin: "新品首发",
      Preole: "人气推荐",
      zhuanti:'专题精选'
    };
  },
  computed: {},
  methods: {
    getDate: async that => {
      let result = await getList();
      that.list = result.data;
      console.log(result.data);
    }
  },
  created() {
    this.getDate(this);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  font-size: 0.14rem;
  overflow: hidden;
  box-sizing: border-box;
  background: #826c6c0d;
  display: flex;
  flex-direction: column;
}
.Pices {
  width: 100%;
  height: 2.2rem;
}
.main{
    flex: 1;
    overflow-y: scroll;
}
</style>