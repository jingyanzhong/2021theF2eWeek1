import axios from 'axios'
import { defineStore } from 'pinia'
import renderStore from '../stores/renderStore'

const render = renderStore()
// const getData = getDataStore()
export default defineStore('filterStore', {
  state: () => ({
    areaSearch: '',
    class: ''
  }),
  actions: {
    filterArea (name, event) {
      this.areaSearch = event.target.value
      let area = ''
      switch (this.areaSearch) {
        case '台北':
          area = 'Taipei'
          break
        case '新北':
          area = 'NewTaipei'
          break
        case '桃園':
          area = 'Taoyuan'
          break
        case '新竹':
          area = 'Hsinchu'
          break
        case '苗栗':
          area = 'MiaoliCounty'
          break
        case '台中':
          area = 'Taichung'
          break
        case '彰化':
          area = 'ChanghuaCounty'
          break
        case '雲林':
          area = 'YunlinCounty'
          break
        case '嘉義':
          area = 'ChiayiCounty'
          break
        case '台南':
          area = 'Tainan'
          break
        case '高雄':
          area = 'Kaohsiung'
          break
        case '屏東':
          area = 'PingtungCounty'
          break
        case '基隆':
          area = 'Keelung'
          break
        case '宜蘭':
          area = 'YilanCounty'
          break
        case '花蓮':
          area = 'HualienCounty'
          break
        case '台東':
          area = 'TaitungCounty'
          break
        case '南投':
          area = 'NantouCounty'
          break
        case '澎湖':
          area = 'PenghuCounty'
          break
        case '連江':
          area = 'LienchiangCounty'
          break
        case '金門':
          area = 'KinmenCounty'
          break
      }
      if (name === 'spot') {
        this.getSpotAreaData(area)
      } else if (name === 'activity') {
        this.getActivityAreaData(area)
      } else if (name === 'foods') {
        this.getFoodsAreaData(area)
      } else if (name === 'hotel') {
        this.getHotelAreaData(area)
      }
    },
    filterClass (data, event) {
      this.class = event.target.value
      const newData = data.filter(item => {
        return item.Class === this.class || item.Class1 === this.class || item.Class2 === this.class || item.Class3 === this.class
      })
      render.showPage(newData)
    },
    getActivityAreaData (area) {
      if (area === '') {
        render.getAllActivityData()
      }
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_ACTIVITY}/${area}?$format=JSON`
      axios.get(api).then((res) => {
        render.showPage(res.data)
      })
    },
    getSpotAreaData (area) {
      if (area === '') {
        render.getAllSpotsData()
      }
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_SPOT}/${area}?$format=JSON`
      axios.get(api).then((res) => {
        render.showPage(res.data)
      })
    },
    getFoodsAreaData (area) {
      if (area === '') {
        render.getAllFoodsData()
      }
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_FOODS}/${area}?$format=JSON`
      axios.get(api).then((res) => {
        render.showPage(res.data)
      })
    },
    getHotelAreaData (area) {
      if (area === '') {
        render.getAllHotelData()
      }
      const api = `${import.meta.env.VITE_APP_API}${import.meta.env.VITE_APP_HOTEL}/${area}?$format=JSON`
      axios.get(api).then((res) => {
        render.showPage(res.data)
      })
    }
  }
})
