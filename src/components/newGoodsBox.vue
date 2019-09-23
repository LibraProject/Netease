<template>
  <div class="newGoodsBox">
      <div class="newGoodsItem" v-for="element in newGoodList" :key="element.id">
          <img :src="element.list_pic_url" alt="">
          <p>{{element.name}}</p>
          <b class="Picolor">￥ {{element.retail_price}}</b>
      </div>
  </div>
</template>
<script>
export default {
  props: ["newGoodList"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.newGoodsBox {
    background: white;
    display: flex;
    flex-wrap: wrap;
    .newGoodsItem{
        width: 50%;
        height: 2rem;
        text-align: center;
        img{
            height: 70%;
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
</style>