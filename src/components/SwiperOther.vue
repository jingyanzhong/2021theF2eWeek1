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
  props: {
    city: {
      type: String
    },
    titleName: {
      type: String
    }
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
          spaceBetween: 10,
          slidesPerGroup: 1
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2
        },
        // when window width is >= 960px
        960: {
          slidesPerView: 4,
          spaceBetween: 68,
          slidesPerGroup: 4
        }
      },
      otherData: {}
    }
  },
  methods: {
    getOtherActivity () {
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_ACTIVITY}?$filter=contains(City, '${this.city}')&$top=15&$format=JSON`
      this.$http.get(api).then((res) => {
        this.otherData = res.data
        console.log(this.otherData)
      })
    },
    getProduct (id) {
      this.$router.push(`/activity/${id}`)
    }
  },
  created () {
    this.getOtherActivity()
    console.log(this.titleName)
  }
}
</script>
<template>
    <swiper :slides-per-view="3" navigation :autoplay="false" :breakpoints="breakpoints">
        <swiper-slide class="slide" v-for="(item, index) in otherData" :key="index">
            <a href="#" @click.prevent="getProduct(item.ActivityID)">
                <div class="swiperImg">
                    <img v-if="!item.Picture.PictureUrl1" src="/img/imgDefault.png" alt="預設圖片">
                    <img v-else class="swiperImg" :src="item.Picture.PictureUrl1" :alt="item.Picture.PictureDescription1">
                </div>
                <div class="swiperTextContent">
                    <h4 v-if="titleName === 'ActivityName'">{{ item.ActivityName }}</h4>
                    <p>
                        <img class="landMark" src="/img/landMark.png" alt="地點icon">
                        {{ item.Address }}
                    </p>
                </div>
            </a>
        </swiper-slide>
    </swiper>
</template>
<style lang="scss" scoped>
// .swiper-container {
//     padding: 0 85px;
// }

.slide {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    background: #fff;
    height: auto;
}

.swiperImg {
    background: url('/img/imgDefault.png');
    :deep(img) {
        height: 280px;
        object-fit: cover;

    }
}

.swiperTextContent {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px 13px;

    :deep(h4) {
        font-weight: $fw-b;
    }

    :deep(p) {
        color: $secondary;
        display: flex;
        align-items: center;
        margin-top: auto;
    }

    :deep(.landMark) {
        width: 14px;
        height: 18px;
        margin-right: 8px;
    }
}
</style>
