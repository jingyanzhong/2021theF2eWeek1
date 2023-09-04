<script>
import { mapState, mapActions } from 'pinia'
import statusStore from '../stores/statusStore'
import renderStore from '../stores/renderStore'
import filterStore from '../stores/filterStore.js'
import FoodsCard from '../components/FoodsCard.vue'
import HeroBanner from '../components/HeroBanner.vue'
import paginationComponent from '../components/paginationComponent.vue'
import LoadingComponent from '../components/loadingComponent.vue'

const filter = filterStore()

export default {
  components: {
    FoodsCard,
    HeroBanner,
    paginationComponent,
    LoadingComponent
  },
  computed: {
    ...mapState(statusStore, ['isLoading']),
    ...mapState(renderStore, ['page', 'jData', 'filterData']),
    ...mapState(filterStore, ['areaSearch'])
  },
  methods: {
    ...mapActions(renderStore, ['showPage', 'filterShowData', 'getAllFoodsData']),
    ...mapActions(filterStore, ['filterArea', 'filterClass']),

    getProduct (id) {
      this.$router.push(`/foods/${id}`)
    }
  },
  created () {
    this.getAllFoodsData()
    filter.areaSearch = ''
  },
  beforeRouteLeave (to, from, next) {
    to.meta.keepAlive = false
    next()
  }
}
</script>
<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <main v-show="!isLoading">
    <HeroBanner :title="'探索美食'" :img="'banner3'"></HeroBanner>
    <div class="container">
      <label for="areaSearch" class="areaSearchLabel">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="searchIcon bi bi-search"
          viewBox="0 0 16 16">
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <input type="search" name="areaSearch" id="areaSearch" placeholder="所有縣市" :value="areaSearch"
          @keyup.enter="(evt) => filterArea('foods' ,evt)">
      </label>
      <div class="category">
        <div class="scroll">
          <ul class="categoryList">
            <li>
              <RouterLink to="/activity">精選活動</RouterLink>
            </li>
            <li>
              <RouterLink to="/spots">全台景點</RouterLink>
            </li>
            <li class="active">
              <RouterLink to="/foods">探索美食</RouterLink>
            </li>
            <li>
              <RouterLink to="/hotel">住宿飯店</RouterLink>
            </li>
          </ul>
        </div>
        <div class="categorySelect">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
            class="selectIcon bi bi-list-ul" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <select name="" id="" @change="(evt) => filterClass(jData, evt)">
            <option value="" selected disabled>主題分類</option>
            <option value="地方特產">地方特產</option>
            <option value="異國料理">異國料理</option>
            <option value="火烤料理">火烤料理</option>
            <option value="甜點冰品">甜點冰品</option>
            <option value="中式美食">中式美食</option>
            <option value="伴手禮">伴手禮</option>
            <option value="素食">素食</option>
            <option value="原住民活動">其他</option>
          </select>
        </div>
      </div>
      <FoodsCard :jData="filterData" @get-product="getProduct"></FoodsCard>
      <paginationComponent :page="page" @filter-data="filterShowData"></paginationComponent>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/helpers/utilities.scss';
</style>
