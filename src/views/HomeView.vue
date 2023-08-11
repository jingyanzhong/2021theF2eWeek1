<script>
import HomeHero from '../components/HomeHero.vue'
import CardItem from '../components/CardItem.vue'
import SwiperCard from '../components/SwiperCard.vue'

export default {
  components: {
    HomeHero,
    CardItem,
    SwiperCard
  },
  data () {
    return {
      jData: [
        {
          title: '標題一',
          date: '2023/11/20-2023/12/31',
          address: '新北市板橋區',
          description: '新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......',
          img: '../../img/img01.png'
        },
        {
          title: '標題二',
          date: '2023/09/20-2024/02/28',
          address: '新北市北投區',
          description: '新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......',
          img: '../../img/img01.png'
        },
        {
          title: '標題三',
          date: '2023/11/20-2023/12/31',
          address: '新北市板橋區',
          description: '新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......',
          img: '../../img/img02.png'
        },
        {
          title: '標題四',
          date: '2023/11/20-2023/12/31',
          address: '新北市北投區',
          description: '新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......',
          img: '../../img/img01.png'
        },
        {
          title: '標題五',
          date: '2023/11/20-2023/12/31',
          address: '新北市板橋區',
          description: '新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......',
          img: '../../img/img02.png'
        }
      ]
    }
  }
}
</script>

<template>
  <main>
    <HomeHero />
    <div class="container">
      <section>
        <h3>
          <img src="../../img/icon1.png" alt="精選活動icon">
          精選活動
        </h3>
        <ul class="cardList">
          <template v-for="(item, index) in jData" :key="index">
            <CardItem v-if="index < 4">
              <template #img>
                <img :src="item.img" alt="">
              </template>
              <template #textContent>
                <h4>{{ item.title }}</h4>
                <p><span>時間</span>{{ item.date }}</p>
                <p><span>地點</span>{{ item.address }}</p>
                <p>{{ item.description }}</p>
                <a href="">活動詳情</a>
              </template>
            </CardItem>
          </template>
        </ul>
        <a href="#" class="more">
          <img src="../../img/more.png" alt="more">
        </a>
      </section>
      <section>
        <h3>
          <img src="../../img/icon2.png" alt="熱門景點icon">
          熱門景點
        </h3>
        <SwiperCard>
          <template #img>
            <img src="../../img/swiper02.png" alt="陽明山國家公園">
          </template>
          <template #textContent>
            <div class="textContent">
              <h4>淡水漁人碼頭</h4>
              <p>
                <img class="landMark" src="../../img/landMark.png" alt="地點icon">
                新北市淡水區
              </p>
            </div>
          </template>
        </SwiperCard>
        <a href="#" class="more">
          <img src="../../img/more.png" alt="more">
        </a>
      </section>
      <section>
        <h3>
          <img src="../../img/icon3.png" alt="推薦美食icon">
          推薦美食
        </h3>
        <SwiperCard>
          <template #img>
            <img src="../../img/foods01.png" alt="日式定食">
          </template>
          <template #textContent>
            <div class="textContent">
              <h4>日式定食</h4>
              <p>
                <img class="landMark" src="../../img/landMark.png" alt="地點icon">
                新北市淡水區
              </p>
            </div>
          </template>
        </SwiperCard>
        <a href="#" class="more">
          <img src="../../img/more.png" alt="more">
        </a>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
h3 {
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

.cardList {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
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
