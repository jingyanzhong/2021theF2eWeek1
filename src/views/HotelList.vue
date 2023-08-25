<script>
import SwiperThumbs from '../components/SwiperThumbs.vue'
import SwiperOther from '../components/HotelSwiperOther.vue'

export default {
  components: {
    SwiperThumbs,
    SwiperOther
  },
  data () {
    return {
      id: '',
      hotelData: [],
      town: ''
    }
  },
  methods: {
    getHotel () {
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_HOTEL}?$filter=contains(HotelID, '${this.id}')&$format=JSON`
      this.$http.get(api).then((res) => {
        this.hotelData = res.data
        console.log(this.hotelData)
        this.getTown()
      })
    },
    getTown () {
      this.town = (this.hotelData[0].Address).slice(0, 3)
      console.log(this.town)
    }
  },
  created () {
    this.id = this.$route.params.hotelId
    this.getHotel()
  }
}
</script>
<template>
  <main>
    <div class="container">
      <section v-if="hotelData[0]">
        <div class="swiperImg">
          <img v-if="!hotelData[0].Picture.PictureUrl1" src="/img/imgDefault.png" alt="預設圖片">
          <SwiperThumbs v-else :imgs="hotelData[0].Picture"></SwiperThumbs>
        </div>
        <div class="activityText">
          <h3>{{ hotelData[0].HotelName }}</h3>
          <p>{{ hotelData[0].Grade }}</p>
          <p>
            <span v-if="hotelData[0].Class1">#{{ hotelData[0].Class1 }}</span>
            <span v-if="hotelData[0].Class2">#{{ hotelData[0].Class2 }}</span>
          </p>
          <h4>
            關於
          </h4>
          <p>{{ hotelData[0].Description }}</p>
          <h4>地址</h4>
          <p>{{ hotelData[0].Address }}</p>
          <h4>連絡電話</h4>
          <p>{{ hotelData[0].Phone }}</p>
          <h4>服務項目</h4>
          <p>{{ hotelData[0].ServiceInfo }}</p>
          <h4>停車資訊</h4>
          <p>{{ hotelData[0].ParkingInfo }}</p>
        </div>
      </section>
      <section class="swiperOther" v-if="hotelData[0]">
        <h4>
          <img src="/img/goodIcon.png" alt="其他推薦icon">
          其他推薦</h4>
        <SwiperOther :city="town" :title-name="'HotelName'"></SwiperOther>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin-top: 60px;
  section {
    display: flex;
    margin-bottom: 60px;
    .swiperImg {
      width: calc(55% - 60px);
      margin-right: auto;
    }
    .activityText {
      width: 45%;
      h3 {
        margin-bottom: 24px;
        font-weight: $fw-b;
      }
      h4 {
        color: $primary;
        font-weight: $fw-b;
      }
      p {
        margin-bottom: 24px;
        span {
          border-radius: $radius-m;
          border: 2px solid rgba(232, 212, 162, 1);
          margin-right: 8px;
          padding: 4px 8px;
        }
      }
    }
  }
  .swiperOther {
    display: block;
    h4 {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      font-weight: $fw-b;
      img {
          width: 24px;
          margin-right: 4px;
        }
    }
  }
}
</style>
