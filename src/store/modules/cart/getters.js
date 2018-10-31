export default {
  cartContent: state => state.cartContent,
  cartProductAmount: state => state.cartContent
    .reduce((counter, item) => {
      counter += item.amount
      return counter
    }, 0)
}
