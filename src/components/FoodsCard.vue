<script>
export default {
  props: {
    jData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    getProduct (id) {
      this.$emit('get-product', id)
    }
  }
}
</script>
<template>
  <ul class="cardList">
    <li class="cardItem" v-for="(item, index) in jData" :key="index">
      <div class="cardImg">
        <img v-if="!item.Picture.PictureUrl1" src="/img/imgDefault.png" alt="預設圖片">
        <img v-else :src="item.Picture.PictureUrl1" :alt="item.Picture.PictureDescription1">
      </div>
      <div class="text">
        <h4>{{ item.RestaurantName }}</h4>
        <!-- <p v-if="item.Address" class="city">
          <img src="../../img/landMark.png" alt="地標icon">{{ (item.Address).slice(0, 3) }}
        </p> -->
        <p><span>地點</span>{{ item.Address }}</p>
        <p><span>開放時間</span>{{ item.OpenTime }}</p>
        <p class="description">{{ item.Description }}</p>
        <a href="#" @click.prevent="getProduct(item.RestaurantID)">活動詳情</a>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '../assets/helpers/cardItem';
</style>
