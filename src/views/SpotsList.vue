<script>
import SwiperThumbs from '../components/SwiperThumbs.vue'
import SwiperOther from '../components/SpotsSwiperOther.vue'

export default {
  components: {
    SwiperThumbs,
    SwiperOther
  },
  data () {
    return {
      id: '',
      spotsData: [],
      town: ''
    }
  },
  methods: {
    getSpots () {
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_SPOT}?$filter=contains(ScenicSpotID, '${this.id}')&$format=JSON`
      this.$http.get(api).then((res) => {
        this.spotsData = res.data
        console.log(this.spotsData)
        this.getTown()
      })
    },
    getTown () {
      this.town = (this.spotsData[0].Address).slice(0, 3)
      console.log(this.town)
    }
  },
  created () {
    this.id = this.$route.params.spotsId
    this.getSpots()
  }
}
</script>
<template>
  <main>
    <div class="container">
      <section v-if="spotsData[0]">
        <div class="swiperImg">
          <img v-if="!spotsData[0].Picture.PictureUrl1" src="/img/imgDefault.png" alt="預設圖片">
          <SwiperThumbs v-else :imgs="spotsData[0].Picture"></SwiperThumbs>
        </div>
        <div class="activityText">
          <h3>{{ spotsData[0].ScenicSpotName }}</h3>
          <p>
            <span v-if="spotsData[0].Class1">#{{ spotsData[0].Class1 }}</span>
            <span v-if="spotsData[0].Class2">#{{ spotsData[0].Class2 }}</span>
          </p>
          <h4>
            關於
          </h4>
          <p>{{ spotsData[0].Description }}</p>
          <h4>地址</h4>
          <p>{{ spotsData[0].Address }}</p>
          <h4>開放時間</h4>
          <p>{{ spotsData[0].OpenTime }}</p>
          <h4>門票</h4>
          <p>{{ spotsData[0].TicketInfo }}</p>
          <h4>連絡電話</h4>
          <p>{{ spotsData[0].Phone }}</p>
          <h4>注意事項</h4>
          <p>{{ spotsData[0].Remarks }}</p>
          <h4>交通方式</h4>
          <p>{{ spotsData[0].TravelInfo }}</p>
        </div>
      </section>
      <section class="swiperOther" v-if="spotsData[0]">
        <h4>
          <img src="/img/goodIcon.png" alt="其他推薦icon">
          其他推薦</h4>
        <SwiperOther :city="town" :title-name="'ScenicSpotName'"></SwiperOther>
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
