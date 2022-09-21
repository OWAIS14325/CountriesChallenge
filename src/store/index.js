import { createStore } from 'vuex'

export default createStore({
  state: {
    countries : []
  },
  getters: {
    getCountries : (state) => {
      return state.countries.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
    }
  },
  mutations: {
    setCountries(state, payload){
      state.countries = payload
    }
  },
  actions: {
    async fetchCountries (context){
      const res = await fetch('https://restcountries.com/v3.1/all')
      const data =await  res.json()
      context.commit('setCountries', data)
    }
  },
  modules: {
  }
})
