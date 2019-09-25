<template>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in banrlist" :key="item.id">
          <img class="Pices" v-lazy="item.image_url" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  props: ["banrlist"],
  components: {},
  data() {
    return {
      headper:'',
      swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }    
      };
  },
  components: {
    swiper,
    swiperSlide
  },
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