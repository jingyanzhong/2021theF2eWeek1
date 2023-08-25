import axios from 'axios'
import { defineStore } from 'pinia'
// import getDataStore from '../stores/getData'
import statusStore from '../stores/statusStore'

const status = statusStore()
// const getData = getDataStore()
export default defineStore('renderStore', {
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
    getAllActivityData () {
      status.isLoading = true
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_ACTIVITY}?$format=JSON`
      axios.get(api).then((res) => {
        this.jData = res.data
        this.showPage(this.jData)
        status.isLoading = false
      })
    },
    getAllSpotsData () {
      status.isLoading = true
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_SPOT}?$format=JSON`
      axios.get(api).then((res) => {
        this.jData = res.data
        this.showPage(this.jData)
        status.isLoading = false
      })
    },
    getAllHotelData () {
      status.isLoading = true
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_HOTEL}?$format=JSON`
      axios.get(api).then((res) => {
        this.jData = res.data
        console.log(this.jData)
        this.showPage(this.jData)
        status.isLoading = false
      })
    },
    getAllFoodsData () {
      status.isLoading = true
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_FOODS}?$format=JSON`
      axios.get(api).then((res) => {
        this.jData = res.data
        this.showPage(this.jData)
        status.isLoading = false
      })
    },
    showPage (data) {
      const totalPage = Math.ceil(data.length / 20)
      this.page.totalPage = totalPage
      this.filterShowData(data)
    },
    filterShowData (data, page = 1) {
      this.filterData = []
      this.page.currentPage = page
      this.page.showPageStart = page - 3
      this.page.showPageEnd = page + 3
      const minData = (page * this.page.prePage) - this.page.prePage
      const maxData = (page * this.page.prePage) - 1
      data.forEach((item, index) => {
        if (index >= minData && index <= maxData) {
          this.filterData.push(item)
        }
      })
    }
  }
})
