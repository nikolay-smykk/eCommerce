const defaultState = {
  item: 0,
};

export const cartQuantityReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return { ...state, item: state.item + action.playload };
    case 'DELETE_CART':
      return { ...state, item: state.item - action.playload };
    default:
      return state;
  }
};
