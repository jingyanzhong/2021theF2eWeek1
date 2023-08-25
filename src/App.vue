<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <div class="container">
      <h1>
        <RouterLink to="/">遊台灣</RouterLink>
      </h1>
      <ul class="nav-link">
        <li>
          <RouterLink to="/activity">精選活動</RouterLink>
        </li>
        <li>
          <RouterLink to="/spots">全台景點</RouterLink>
        </li>
        <li>
          <RouterLink to="/foods">探索美食</RouterLink>
        </li>
        <li>
          <RouterLink to="/hotel">住宿飯店</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
  <router-view :key="$route.fullPath"></router-view>
  <footer class="footer">
    Copyright@2021
  </footer>
</template>

<style lang="scss">

nav {
  background: $primary;
  padding: 15px 0;
  .container {
    display: flex;
    align-items: center;
  }

  h1 {
    margin-right: auto;
    a {
      width: 218px;
      height: 71px;
      background: url('/img/logo.png') no-repeat;
      text-indent: 101%;
      /*首行縮排*/
      overflow: hidden;
      /*自動隱藏超出的文字或圖片*/
      white-space: nowrap;
      /*希望元素在第一排上面，沒有斷行*/
    }
  }

  .nav-link {
    display: flex;

    li {
      margin-left: 27px;
      a {
        color: #fff;
        font-size: $fz-l;
      }
    }
  }
}

.footer {
  padding: 42px 0;
  text-align: center;
  font-size: $fz-s;
  color: #fff;
  background: #000;
  margin-top: 114px;
}
</style>
