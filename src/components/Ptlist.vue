<template>
  <div class="Ptlist">
    <div class="Ptlists" v-for="item in channel" :key="item.id" @click="goCateGroys(item.id)">
      <img :src="item.icon_url" alt />
      <p>{{item.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["channel"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    goCateGroys(id){
      // console.log(id)
      this.$router.push({name:"分类商品",params:{id}})
    }
  },
};
</script>
<style scoped lang="scss">
.Ptlist {
  width: 100%;
  height: 0.7rem;
  display: flex;
  box-sizing: border-box;
  background: white;
  .Ptlists {
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 50%;
      padding: 0.06rem;
      margin: auto;
    }
  }
}
</style>