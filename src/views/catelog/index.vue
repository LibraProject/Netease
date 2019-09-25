<template>
  <div class="wrap">
    <headers :txt="txt" />
    <div class="main">
      <div class="cateR">
        <ul>
          <li v-for="(item,index) in categorysArr" :class="{active:ind==index}" @click="clickme(item.id,index)" :key="item.id" >{{item.name}}</li>
        </ul>
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
      ind: 0
    };
  },
  components: { headers, foots },
  computed: {
    ...mapState("catalog", ["categorysArr"])
  },
  methods: {
    ...mapActions("catalog", ["categorys"]),
    clickme(id, ind) {
      this.ind = ind;
      console.log(id);
    }
  },
  created() {
    this.categorys();
    console.log(this.categorysArr)
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
    position: relative;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 0.45rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 2s all linear;
      }
      .lactive {
        border-left: 1px solid rgb(103, 192, 228);
      }
    }
  }
}
</style>