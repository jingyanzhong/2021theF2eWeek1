<script>
import SwiperThumbs from '../components/SwiperThumbs.vue'
import SwiperOther from '../components/SwiperOther.vue'

export default {
  components: {
    SwiperThumbs,
    SwiperOther
  },
  data () {
    return {
      id: '',
      activityData: []
    }
  },
  methods: {
    getActivity () {
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_ACTIVITY}?$filter=contains(ActivityID, '${this.id}')&$format=JSON`
      this.$http.get(api).then((res) => {
        this.activityData = res.data
        console.log(this.activityData)
      })
    }
  },
  created () {
    this.id = this.$route.params.activityId
    this.getActivity()
  }
}
</script>
<template>
  <main>
    <div class="container">
      <section>
        <div class="swiperImg">
          <img v-if="!activityData[0].Picture.PictureUrl1" src="../../img/imgDefault.png" alt="預設圖片">
          <SwiperThumbs v-else :imgs="activityData[0].Picture"></SwiperThumbs>
        </div>
        <div class="activityText">
          <h3>{{ activityData[0].ActivityName }}</h3>
          <p>
            <span>#{{ activityData[0].Class1 }}</span>
            <span v-if="activityData[0].Class2">#{{ activityData[0].Class2 }}</span>
          </p>
          <h4>
            關於
          </h4>
          <p>{{ activityData[0].Description }}</p>
          <h4>開放時間</h4>
          <p>{{ (activityData[0].StartTime).slice(0, 10) }} 至 {{ (activityData[0].EndTime).slice(0, 10) }}</p>
          <h4>地址</h4>
          <p>{{ activityData[0].Address }}</p>
        </div>
      </section>
      <section class="swiperOther">
        <h4>
          <img src="../../img/goodIcon.png" alt="其他推薦icon">
          其他推薦</h4>
        <SwiperOther :city="activityData[0].City" :title-name="'ActivityName'"></SwiperOther>
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
