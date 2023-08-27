<script>
export default {
  props: {
    title: {
      type: String
    },
    img: {
      type: String
    }
  }
}
</script>
<template>
  <div class="hero">
    <h2>{{ title }}</h2>
    <img :src="`img/${img}.png`" :alt="`${title}banner`">
  </div>
</template>

<style lang="scss">
.hero {
  position: relative;
  margin-bottom: 85px;

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: $fz-xxl;
    font-weight: $fw-b;
    color: #fff;
    box-shadow: $shadow;
    letter-spacing: 6px;
  }
}

@media (max-width: 768px){
  .hero {
    height: 200px;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
