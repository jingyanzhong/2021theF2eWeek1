<template>
    <div class="hero">
        <slot name="title">
            <h2>精選活動</h2>
        </slot>
        <slot name="bg-img">
            <img src="../../img/banner5.png" alt="精選活動banner">
        </slot>
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
</style>
