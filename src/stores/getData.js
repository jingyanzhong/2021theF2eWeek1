import axios from 'axios'
import { defineStore } from 'pinia'
import statusStore from '../stores/statusStore'
import paginationStore from '../stores/paginationStore'

const status = statusStore()
const pagination = paginationStore()

export default defineStore('getDataStore', {
  state: () => ({
    jData: []
  }),
  actions: {
    getAllHotelData () {
      status.isLoading = true
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_HOTEL}?$format=JSON`
      axios.get(api).then((res) => {
        this.jData = res.data
        console.log(this.jData)
        pagination.showPage()
        pagination.filterShowData()
        status.isLoading = false
      })
    }
  }
})
