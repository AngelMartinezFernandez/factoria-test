import { createStore } from 'vuex'

export default createStore({
  state: {
    shoppingCart: []
  },
  mutations: {
    setShoppingCart (state, payload) {
      state.shoppingCart.push(payload)
      console.log('cart', state.shoppingCart)
    },
  },
  actions: {
    addItemToShoppingCart ({ commit }, product) {
      commit('setShoppingCart', product)
    },
  },
  getters: {
    getTotal: state => {
      let total = 0
      state.shoppingCart.forEach(item => total += item.price)
      return total
    }
  },
  modules: {
  }
})
