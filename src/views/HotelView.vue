<script>
import { mapState, mapActions } from 'pinia'
import statusStore from '../stores/statusStore'
import renderStore from '../stores/renderStore'
// import getDataStore from '../stores/getData'
import HotelCard from '../components/HotelCard.vue'
import HeroBanner from '../components/HeroBanner.vue'
import paginationComponent from '../components/paginationComponent.vue'
import LoadingComponent from '../components/loadingComponent.vue'

export default {
  components: {
    HotelCard,
    HeroBanner,
    paginationComponent,
    LoadingComponent
  },
  data () {
    return {
      // jData: [],
      // page: {
      //   totalPage: 0,
      //   hasPage: false,
      //   nextPage: true,
      //   currentPage: 1,
      //   prePage: 20,
      //   showPageStart: '',
      //   showPageEnd: ''
      // },
      // filterData: []
    }
  },
  computed: {
    ...mapState(statusStore, ['isLoading']),
    ...mapState(renderStore, ['page', 'jData', 'filterData'])
  },
  methods: {
    ...mapActions(renderStore, ['showPage', 'filterShowData', 'getAllHotelData']),
    // ...mapActions(getDataStore, ['getAllHotelData']),
    // getData () {
    //   status.isLoading = true
    //   const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_HOTEL}?$format=JSON`
    //   this.$http.get(api).then((res) => {
    //     this.jData = res.data
    //     console.log(this.jData)
    //     this.showPage()
    //     this.filterShowData()
    //     status.isLoading = false
    //   })
    // },
    // showPage () {
    //   const totalPage = Math.ceil(this.jData.length / 20)
    //   this.page.totalPage = totalPage
    //   console.log(this.page)
    // },
    // filterShowData (page = 1) {
    //   this.filterData = []
    //   this.page.showPageStart = this.page.currentPage - 3
    //   this.page.showPageEnd = this.page.currentPage + 3
    //   const minData = (page * this.page.prePage) - this.page.prePage
    //   const maxData = (page * this.page.prePage) - 1
    //   this.jData.forEach((item, index) => {
    //     if (index >= minData && index <= maxData) {
    //       this.filterData.push(item)
    //     }
    //   })
    // },
    getProduct (id) {
      this.$router.push(`/hotel/${id}`)
    }
  },
  created () {
    this.getAllHotelData()
  }
}
</script>
<template>
  <LoadingComponent :isLoading="isLoading"></LoadingComponent>
  <main>
    <HeroBanner :title="'住宿飯店'" :img="'banner3'"></HeroBanner>
    <div class="container">
      <label for="areaSearch" class="areaSearchLabel">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="searchIcon bi bi-search"
          viewBox="0 0 16 16">
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <input type="search" name="areaSearch" id="areaSearch" placeholder="所有縣市">
      </label>
      <div class="category">
        <ul class="categoryList">
          <li>
            <RouterLink to="/activity">精選活動</RouterLink>
          </li>
          <li>
            <RouterLink to="/spots">全台景點</RouterLink>
          </li>
          <li>
            <RouterLink to="/foods">探索美食</RouterLink>
          </li>
          <li class="active">
            <RouterLink to="/hotel">住宿飯店</RouterLink>
          </li>
        </ul>
        <div class="categorySelect">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
            class="selectIcon bi bi-list-ul" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <select name="" id="">
            <option value="" selected disabled>主題分類</option>
            <option value="熱門活動">熱門活動</option>
            <option value="近期活動">近期活動</option>
            <option value="傳統節慶">傳統節慶</option>
            <option value="原住民活動">原住民活動</option>
          </select>
        </div>
      </div>
      <HotelCard :jData="filterData" @get-product="getProduct"></HotelCard>
      <paginationComponent :page="page" @filter-data="filterShowData"></paginationComponent>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.areaSearchLabel {
  position: relative;
}

.searchIcon {
  position: absolute;
  left: 20px;
  top: 1px;
  color: rgba(242, 153, 74, 1);
}

#areaSearch {
  width: 100%;
  height: 55px;
  border: 0;
  border-radius: $radius-xl;
  box-shadow: $shadow;
  padding: 0 54px;
  font-size: $fz-l;
  margin-top: 85px;
}

.category {
  margin-top: 50px;
  margin-bottom: 55px;
  display: flex;
  border-bottom: 1px solid rgba(189, 189, 189, 1);
}

.categoryList {
  display: flex;
  margin-right: auto;

  li {
    padding-bottom: 9.5px;
    margin-right: 55px;
    border-bottom: 8px solid transparent;
    transition: all .5s;

    a {
      font-size: $fz-xl;
      font-weight: $fw-b;
      color: #000;
      background: transparent;
    }

    &:hover,
    &.active {
      border-bottom: 8px solid $secondary;
    }
  }
}

.categorySelect {
  position: relative;

  .selectIcon {
    position: absolute;
    top: 17px;
    left: 15px;
    color: $info;
  }

  select {
    font-size: $fz-xl;
    font-weight: $fw-b;
    padding: 15px 15px 15px 46px;
    border: 0;
    border-radius: $radius-xl;
    box-shadow: $shadow;
  }
}

.HotelCardList {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
}

</style>
