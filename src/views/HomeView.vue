<script>
import HomeHero from '../components/HomeHero.vue'
import CardItem from '../components/CardItem.vue'
import SwiperCard from '../components/SwiperCard.vue'
import LoadingComponent from '../components/loadingComponent.vue'

export default {
  components: {
    HomeHero,
    CardItem,
    SwiperCard,
    LoadingComponent
  },
  data () {
    return {
      jData: [],
      spotData: [],
      restaurantData: [],
      isLoading: false
    }
  },
  methods: {
    getData () {
      this.isLoading = true
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_ACTIVITY}?$filter=Picture/PictureUrl1 ne null&$top=4&$format=JSON`
      const spotApi = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_SPOT}?$filter=Picture/PictureUrl1 ne null&$top=12&$format=JSON`
      const restaurantApi = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_FOODS}?$filter=Picture/PictureUrl1 ne null&$top=12&$format=JSON`
      this.$http.get(api).then((res) => {
        this.jData = res.data
        // console.log(this.jData)
      })
      this.$http.get(spotApi).then((res) => {
        this.spotData = res.data
        console.log(this.spotData)
      })
      this.$http.get(restaurantApi).then((res) => {
        this.restaurantData = res.data
        // console.log(this.restaurantData)
      })
      if (this.jData && this.spotData && this.restaurantData) {
        this.isLoading = false
      }
    },
    getProduct (id) {
      this.$router.push(`/activity/${id}`)
    }
  },
  created () {
    this.getData()
  },
  beforeRouteLeave (to, from, next) {
    to.meta.keepAlive = false
    next()
  }
}
</script>

<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <main>
    <HomeHero />
    <div class="container">
      <section>
        <h3 class="title">
          <img src="/img/icon1.png" alt="精選活動icon">
          精選活動
        </h3>
        <CardItem :jData="jData" @get-product="getProduct"></CardItem>
        <RouterLink to="/activity" class="more">
          <img src="/img/more.png" alt="more">
        </RouterLink>
      </section>
      <section>
        <h3 class="title">
          <img src="/img/icon2.png" alt="熱門景點icon">
          熱門景點
        </h3>
        <SwiperCard :jData="spotData"></SwiperCard>
        <RouterLink to="/spots" class="more">
          <img src="/img/more.png" alt="more">
        </RouterLink>
      </section>
      <section>
        <h3 class="title">
          <img src="/img/icon3.png" alt="推薦美食icon">
          推薦美食
        </h3>
        <SwiperCard :jData="restaurantData"></SwiperCard>
        <RouterLink to="/foods" class="more">
          <img src="/img/more.png" alt="more">
        </RouterLink>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: $fw-b;
  margin-top: 71px;
  margin-bottom: 42px;

  img {
    width: 47px;
    height: 65px;
    margin-right: 12px;
  }
}

.more {
  display: flex;
  justify-content: flex-end;

  img {
    width: 170px;
    height: 35px;
  }
}
</style>
