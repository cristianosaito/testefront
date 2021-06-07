const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return [action.cart]
    default:
      return state
  }
}

export default cart
