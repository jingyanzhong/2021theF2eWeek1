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
        <h4>{{ item.ActivityName }}</h4>
        <p v-if="item.City" class="city mobile-hidden">
          <img src="/img/landMark.png" alt="地標icon">{{ item.City }}
        </p>
        <p v-if="item.StartTime"><span>時間</span>{{ (item.StartTime).slice(0, 10) }} 至 {{ (item.EndTime).slice(0, 10) }}
        </p>
        <p class="address"><span>地點</span>{{ item.Location }}</p>
        <p class="description mobile-hidden">{{ item.Description }}</p>
        <a href="#" @click.prevent="getProduct(item.ActivityID)">活動詳情</a>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '../assets/helpers/cardItem';
</style>
