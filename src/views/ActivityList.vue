<script>
export default {
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
          <img :src="activityData[0].Picture.PictureUrl1" :alt="activityData[0].Picture.PictureDescription1">
        </div>
        <div class="activityText">
          <h3>{{ activityData[0].ActivityName }}</h3>
          <p>
            <span>#{{ activityData[0].Class1 }}</span>
            <span>#{{ activityData[0].Class2 }}</span>
          </p>
          <h4>
            關於
          </h4>
          <p>{{ activityData[0].Description }}</p>
          <h4>開放時間</h4>
          <p>{{ (activityData[0].StartTime).slice(0, 10) }} 至 {{ (activityData[0].EndTime).slice(0, 10) }}</p>
          <h4>地址</h4>
          <p>{{ activityData[0].Address }}</p>
          <a href="#">官方網站</a>
        </div>
      </section>
      <section>
        <h4>交通資訊</h4>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14459.192716122081!2d121.552896!3d25.0409223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9eec87122c3%3A0xbe4641f96f0e578a!2z5ZyL54i257SA5b-16aSo!5e0!3m2!1szh-TW!2stw!4v1692089672855!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
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
    }
  }
}
</style>
