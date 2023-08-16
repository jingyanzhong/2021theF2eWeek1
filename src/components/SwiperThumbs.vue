<script>
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from 'swiper'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// in this path vue-easy-lightbox/dist/external-css/*.js
// import VueEasyLightbox from 'vue-easy-lightbox'

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/thumbs/thumbs.min.css'

// install Swiper modules
SwiperCore.use([Navigation, Thumbs])

export default {
  props: {
    imgs: {
      type: Object
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      thumbsSwiper: null,
      num: 0,
      visible: false,
      index: 0
    }
  },
  methods: {
    setThumbsSwiper (swiper) {
      this.thumbsSwiper = swiper
    },
    onSlideChange (swiper) {
      this.num = swiper.activeIndex
      console.log(this.num)
    },
    showImg (key) {
      this.visible = true
      this.index = key
    },
    handleHide () {
      this.visible = false
    },
    changeIndex (o, n) {
      this.num = n
      console.log(this.num)
    }
  }
}
</script>
<template>
    <swiper @slideChange="onSlideChange" :style="{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }"
        :loop="false" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" class="mySwiper2">
        <swiper-slide @click="showImg(1)">
            <img :src="imgs.PictureUrl1" :alt="imgs.PictureDescription1" />
        </swiper-slide>
        <swiper-slide @click="showImg(2)">
            <img :src="imgs.PictureUrl2" :alt="imgs.PictureDescription1" />
        </swiper-slide>
        <swiper-slide @click="showImg(3)">
            <img :src="imgs.PictureUrl3" :alt="imgs.PictureDescription1" />
        </swiper-slide>
    </swiper>
    <swiper @swiper="setThumbsSwiper" :loop="false" :spaceBetween="10" :slidesPerView="3" :freeMode="true"
        :watchSlidesVisibility="true" :watchSlidesProgress="true" class="mySwiper">
        <swiper-slide :class="{ active: num === index }">
            <img :src="imgs.PictureUrl1" :alt="imgs.PictureDescription1" />
        </swiper-slide>
        <swiper-slide :class="{ active: num === index }">
            <img :src="imgs.PictureUrl2" :alt="imgs.PictureDescription2" />
        </swiper-slide>
        <swiper-slide :class="{ active: num === index }">
            <img :src="imgs.PictureUrl3" :alt="imgs.PictureDescription3" />
        </swiper-slide>
    </swiper>
</template>
