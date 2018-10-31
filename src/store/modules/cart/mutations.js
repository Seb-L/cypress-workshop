export default {
  ADD_TO_CART (state, product) {
    const productAlreadyInCart = state.cartContent.find(item => item.id === product.id)

    if (productAlreadyInCart) {
      state.cartContent = state.cartContent
        .map(item => {
          ++item.amount
          return item
        })
    } else {
      state.cartContent.push({ ...product, amount: 1 })
    }
  },
  REMOVE_FROM_CART (state, product) {
    state.cartContent = state.cartContent.filter(item => item.id !== product.id)
  }
}
