
const initialState = {
  item : [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_TO_CART': {
        const newItem = [...state.item];
        newItem.push(action.item);
        return {
          ...state,
          item : newItem,
        };
      }
      
      case 'REMOVE_TO_CART': {
        const newItem = [...state.item];
        newItem.splice(action.itemIndex,1);
        return {
          ...state,
          item : newItem,
        };
      }
      
      default:
        return state
  }
}

export default cartReducer;
