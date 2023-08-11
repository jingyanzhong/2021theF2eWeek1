<script>
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y])
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      spaceBetween: 68,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          slidesPerGroup: 1
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 68,
          slidesPerGroup: 4
        }
      }
    }
  }
}
</script>
<template>
    <swiper :slides-per-view="4" navigation :autoplay="autoplay" :breakpoints="breakpoints">
        <swiper-slide class="slide">
            <div class="swiperCard">
                <slot name="img">
                    <img src="../../img/swiper01.png" alt="陽明山國家公園">
                </slot>
                <slot name="textContent">
                    <div class="textContent">
                        <h4>陽明山國家公園</h4>
                        <p>
                            <img class="landMark" src="../../img/landMark.png" alt="地點icon">
                            台北市北投區
                        </p>
                    </div>
                </slot>
            </div>
        </swiper-slide>
    </swiper>
</template>

<style lang="scss">
.swiper-container {
    padding: 0 85px;
}

.swiperCard {
    background: #fff;
    margin-bottom: 41px;

    h4 {
        font-weight: $fw-b;
    }

    .textContent {
        padding: 20px 13px;

        p {
            color: $secondary;
            display: flex;
            align-items: center;
        }

        .landMark {
            width: 14px;
            height: 18px;
            margin-right: 8px;
        }
    }
}
</style>
