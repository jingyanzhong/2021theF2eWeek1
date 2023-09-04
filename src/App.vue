<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data () {
    return {
      navToggle: false
    }
  },
  methods: {
    mobileNavToggle () {
      this.navToggle = !this.navToggle
    },
    mobileNavNone () {
      this.navToggle = false
    }
  }
}
</script>

<template>
  <nav>
    <div class="container">
      <h1>
        <RouterLink to="/">遊台灣</RouterLink>
      </h1>
      <ul class="nav-link" :class="{ 'active': navToggle }">
        <li @click="mobileNavNone">
          <RouterLink to="/activity">精選活動</RouterLink>
        </li>
        <li @click="mobileNavNone">
          <RouterLink to="/spots">全台景點</RouterLink>
        </li>
        <li @click="mobileNavNone">
          <RouterLink to="/foods">探索美食</RouterLink>
        </li>
        <li @click="mobileNavNone">
          <RouterLink to="/hotel">住宿飯店</RouterLink>
        </li>
      </ul>
      <button class="mobile-list" @click="mobileNavToggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
    </div>
  </nav>
  <router-view v-if="!$route.meta.keepAlive" />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component v-if="$route.meta.keepAlive" :is="Component" :key="$route.fullPath" />
    </keep-alive>
  </router-view>
  <footer class="footer">
    Copyright@2021
  </footer>
</template>

<style lang="scss">
nav {
  background: $primary;
  // padding: 15px 0;

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

  .mobile-list {
    display: none;
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

@media (max-width: 768px) {
  nav {

    h1 {
      a {
        width: 166px;
        height: 53px;
        background-size: contain;
      }
    }

    .nav-link {
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 83px;
      left: 0;
      right: 0;
      z-index: 2;
      background: rgba(255, 255, 255, .8);
      padding: 0;
      height: 0;
      overflow: hidden;
      transition: height .5s;

      &.active {
        height: 202px;
        padding: 15px;
      }

      li {
        margin-left: 0;
        padding: 8px;

        a {
          color: #000;
        }
      }
    }

    .mobile-list {
      display: block;
      background: transparent;
      border: 0;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
