<script>
export default {
  props: {
    isLoading: Boolean
  }
}
</script>
<template>
    <div class="loading" v-if="this.isLoading">
        <img src="../../img/loadingIcon.png" alt="loadingIcon">
        <p>LOADING...</p>
    </div>
</template>
<style lang="scss" scoped>
    .loading {
        background: rgba(232, 212, 162, 1);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            width: 212px;
            height: 158px;
            margin-bottom: 8px;
        }
        p {
            font-size: $fz-xl;
            font-weight: $fw-b;
            color: #fff;
            letter-spacing: 15px;
        }
    }
</style>
