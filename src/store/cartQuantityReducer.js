const defaultState = {
  item: 0,
};

const delet = (state, action) => {
  return state.item <= 0
    ? { item: 0 }
    : { ...state, item: state.item - action.playload };
};

export const cartQuantityReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return { ...state, item: state.item + action.playload };
    case 'DELETE_CART':
      return delet(state, action);

    default:
      return state;
  }
};
