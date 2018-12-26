import shop from '../../../api/shop'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}
// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

export default {
  namespaced: true,//更高的封装度和复用性
  state,
  getters,
  actions,
  mutations
}
