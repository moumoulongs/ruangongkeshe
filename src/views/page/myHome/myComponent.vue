<template>
    <VueSlickCarousel v-bind="settings" class="carousel">
     <div>1</div>
     <div>2</div>
     <div>3</div>
     <div>4</div>
    </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
            "arrows": false,//其用箭头
            "dots": true,//点指示器
            "infinite": true,//无限环绕
            "slidesToShow": 1,//要显示的数目
            "slidesToScroll": 1,//要滚动的数目
            "autoplay": true,//自动播放
            "speed": 1000,//动画速度
            "autoplaySpeed": 2900,//自动播放速度
            "cssEase": "linear"//css3动画缓动
        },
      }
    }
  }

</script>

<style>
.div {
  color: rgba(144, 190, 230, 0.621);
}
.carousel {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.473);
  height: 460px;
  width: 1200px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>