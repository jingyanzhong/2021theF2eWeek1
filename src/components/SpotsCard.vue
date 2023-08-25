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
        <h4>{{ item.ScenicSpotName }}</h4>
        <!-- <p v-if="item.Address" class="city">
          <img src="../../img/landMark.png" alt="地標icon">{{ (item.Address).slice(0, 3) }}
        </p> -->
        <p><span>地點</span>{{ item.Address }}</p>
        <p><span>開放時間</span>{{ item.OpenTime }}</p>
        <p class="description">{{ item.Description }}</p>
        <a href="#" @click.prevent="getProduct(item.ScenicSpotID)">活動詳情</a>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.cardList {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.cardItem {
  position: relative;
  // display: flex;
  background: #fff;
  width: calc(50% - 40px);
  margin: 0 20px 54px;

  .cardImg {
    margin: 0 16px 0 0;
    float: left;
    background: url('/img/imgDefault.png');

    :deep(img) {
      width: 355px;
      height: 300px;
      object-fit: cover;
    }
  }

  :deep(.text) {
    padding: 16px 21px;
    // display: flex;
    // flex-direction: column;
    h4 {
      margin-bottom: 10px;
    }

    h4,
    span {
      font-weight: $fw-b;
    }

    span {
      padding-right: 7px;
    }
    .city {
      display: flex;
      align-items: center;
      font-size:$fz-m;
      color: $primary;
      font-weight: $fw-b;
      margin-bottom: 8px;
      img {
        width: 12px;
        margin-right: 4px;
      }
    }
    .description {
      margin-top: 10px;
      padding-bottom: 60px;
    }

    a {
      position: absolute;
      display: inline-block;
      background: $secondary;
      border-radius: $radius-m;
      text-align: center;
      color: #fff;
      padding: 5px 34px;
      margin-top: 16px;
      bottom: 16px;
      right: 20px;
    }
  }
}
</style>
