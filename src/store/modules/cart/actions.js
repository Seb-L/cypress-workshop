export default {
  addToCart ({ commit }, product) {
    commit('ADD_TO_CART', product)
  },
  removeFromCart ({ commit }, product) {
    commit('REMOVE_FROM_CART', product)
  }
}
