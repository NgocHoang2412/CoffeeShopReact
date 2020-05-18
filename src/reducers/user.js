
const userReducer = (state = '', action) => {
  switch (action.type) {
      case 'USERNAME':
        return action.userName
      default:
        return state
  }
}

export default userReducer;
