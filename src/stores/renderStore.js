import axios from 'axios'
import { defineStore } from 'pinia'
// import getDataStore from '../stores/getData'
import statusStore from '../stores/statusStore'

const status = statusStore()
// const getData = getDataStore()
export default defineStore('paginationStore', {
  state: () => ({
    jData: [],
    filterData: [],
    page: {
      totalPage: 0,
      hasPage: false,
      nextPage: true,
      currentPage: 1,
      prePage: 20,
      showPageStart: '',
      showPageEnd: ''
    }
  }),
  actions: {
    getAllHotelData () {
      status.isLoading = true
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_HOTEL}?$format=JSON`
      axios.get(api).then((res) => {
        this.jData = res.data
        console.log(this.jData)
        this.showPage()
        this.filterShowData()
        status.isLoading = false
      })
    },
    getAllFoodsData () {
      status.isLoading = true
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_FOODS}?$format=JSON`
      axios.get(api).then((res) => {
        this.jData = res.data
        console.log(this.jData)
        this.showPage()
        this.filterShowData()
        status.isLoading = false
      })
    },
    showPage () {
      const totalPage = Math.ceil(this.jData.length / 20)
      this.page.totalPage = totalPage
      console.log(this.page)
    },
    filterShowData (page = 1) {
      this.filterData = []
      this.page.showPageStart = page - 3
      this.page.showPageEnd = page + 3
      const minData = (page * this.page.prePage) - this.page.prePage
      const maxData = (page * this.page.prePage) - 1
      this.jData.forEach((item, index) => {
        if (index >= minData && index <= maxData) {
          this.filterData.push(item)
        }
      })
    }
  }
})
