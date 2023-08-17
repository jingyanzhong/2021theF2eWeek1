<script>
export default {
  props: {
    page: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      pagination: this.page
    }
  },
  methods: {
    switchPage (pages) {
      this.pagination.currentPage = pages
      this.goToTop()
      this.disabled()
      this.filterShowData()
    },
    switchHasPage () {
      if (this.pagination.currentPage === 1) {
        this.pagination.currentPage = 1
      } else {
        this.pagination.currentPage = this.pagination.currentPage - 1
      }
      this.goToTop()
      this.disabled()
      this.filterShowData()
    },
    switchNextPage () {
      if (this.pagination.currentPage === this.pagination.totalPage) {
        this.pagination.currentPage = this.pagination.totalPage
      } else {
        this.pagination.currentPage = this.pagination.currentPage + 1
      }
      this.goToTop()
      this.disabled()
      this.filterShowData()
    },
    disabled () {
      this.pagination.currentPage === 1 ? this.pagination.hasPage = false : this.pagination.hasPage = true
      this.pagination.currentPage === this.pagination.totalPage ? this.pagination.nextPage = false : this.pagination.nextPage = true
    },
    filterShowData () {
      this.$emit('filter-data', this.pagination.currentPage)
    },
    goToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<template>
    <ul class="pagination">
        <!-- <li class="page-item" :class="{ 'disabled': !pagination.hasPage }" @click.prevent="switchHasPage"><a class="page-link"
                href="#">＜</a></li>
        <li class="page-item" v-for="(pages, index) in pagination.totalPage" :key="index"
            :class="{ 'active': pagination.currentPage === pages }" @click.prevent="switchPage(pages)"><a class="page-link"
                href="#">{{ pages }}</a></li>
        <li class="page-item" :class="{ 'disabled': !pagination.nextPage }" @click.prevent="switchNextPage"><a class="page-link"
                href="#">＞</a></li> -->
        <!-- 分頁加入... -->
        <li class="page-item" :class="{ 'disabled': !pagination.hasPage }">
        <a
          class="page-link"
          href="#"
          @click.prevent="switchHasPage"
        >＜</a>
      </li>
      <li class="page-item" v-show="pagination.currentPage > 3">
        <a class="page-link" href="#" @click.prevent="switchPage(1)">
          1
        </a>
      </li>
      <li class="page-item" v-show="pagination.currentPage > 4">
        <span class="mx-2 text-primary">...</span>
      </li>
      <li
        class="page-item"
        v-for="page in pagination.totalPage"
        :key="page"
        :class="{ 'active': pagination.currentPage === page }"
        v-show="page > pagination.showPageStart && page < pagination.showPageEnd"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="switchPage(page)"
          >{{ page }}</a
        >
      </li>
      <li class="page-item" v-show="pagination.totalPage - pagination.currentPage > 3">
        <span class="mx-2 text-primary">...</span>
      </li>
      <li class="page-item" v-show="pagination.totalPage - pagination.currentPage > 2">
        <a
          class="page-link border"
          href="#"
          @click.prevent="switchPage(pagination.totalPage)"
        >
          {{ pagination.totalPage }}
        </a>
      </li>
      <li
        class="page-item"
        :class="{ 'disabled': pagination.currentPage === pagination.totalPage }"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="switchNextPage"
        >＞</a>
      </li>
    </ul>
</template>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;

  li {
    margin-right: 8px;
    font-size: $fz-s;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    background: #fff;
    border: 1px solid rgba(223, 227, 232, 1);
    border-radius: $radius-s;
    transition: all .5s;

    &:hover,
    &.active {
      background: $info;
    }

    &:hover a,
    &.active a {
      color: #fff;
    }

    a {
      color: #000;
      transition: all .5s;
    }
  }
}
</style>
