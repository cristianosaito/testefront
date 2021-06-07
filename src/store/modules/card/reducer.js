const ADD_CARD = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [action.card]
    default:
      return state
  }
}

export default ADD_CARD
