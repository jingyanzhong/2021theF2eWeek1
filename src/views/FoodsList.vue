<script>
import SwiperThumbs from '../components/SwiperThumbs.vue'
import SwiperOther from '../components/FoodsSwiperOther.vue'

export default {
  components: {
    SwiperThumbs,
    SwiperOther
  },
  data () {
    return {
      id: '',
      foodsData: []
    }
  },
  methods: {
    getFoods () {
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_FOODS}?$filter=contains(RestaurantID, '${this.id}')&$format=JSON`
      this.$http.get(api).then((res) => {
        this.foodsData = res.data
        console.log(this.foodsData)
      })
    }
  },
  created () {
    this.id = this.$route.params.foodsId
    this.getFoods()
  },
  beforeRouteLeave (to, from, next) {
    to.meta.keepAlive = true
    next()
  }
}
</script>
<template>
  <main>
    <div class="container">
      <section v-if="foodsData[0]">
        <div class="swiperImg">
          <img v-if="!foodsData[0].Picture.PictureUrl1" src="/img/imgDefault.png" alt="預設圖片">
          <SwiperThumbs v-else :imgs="foodsData[0].Picture"></SwiperThumbs>
        </div>
        <div class="activityText">
          <h3>{{ foodsData[0].RestaurantName }}</h3>
          <p>
            <span v-if="foodsData[0].Class1">#{{ foodsData[0].Class1 }}</span>
            <span v-if="foodsData[0].Class2">#{{ foodsData[0].Class2 }}</span>
          </p>
          <h4>
            關於
          </h4>
          <p>{{ foodsData[0].Description }}</p>
          <h4>開放時間</h4>
          <p>{{ foodsData[0].OpenTime }}</p>
          <h4>地址</h4>
          <p>{{ foodsData[0].Address }}</p>
        </div>
      </section>
      <section class="swiperOther" v-if="foodsData[0]">
        <h4>
          <img src="/img/goodIcon.png" alt="其他推薦icon">
          其他推薦</h4>
        <SwiperOther :city="foodsData[0].City" :title-name="'RestaurantName'"></SwiperOther>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/helpers/productList.scss'
</style>
