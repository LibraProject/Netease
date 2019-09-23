<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banrlist" :key="item.id">
          <img class="Pices" :src="item.image_url" alt />
        </div>
      </div>
      <div class="swiper-pagination" v-for="pages in banrlist.banner" :key="pages.content" >
      </div>
    </div>
</template>
<script>
import swiper from "swiper";
export default {
  name:'swiper',
  props: ["banrlist"],
  components: {},
  data() {
    return {
      list: {}
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      new swiper(".swiper-container", {
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    });
  }
};
</script>
<style>
.Pices {
  width: 100%;
  height: 2rem;
}
 .swiper-container{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color:#ccc;
  }
</style>