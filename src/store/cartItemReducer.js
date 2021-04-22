const defaultState = {
  item: [],
};

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const ADD_ALL_ITEM = 'ADD_ALL_ITEM';

export const cartItemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state.item, item: [...state.item, action.playload] };
    case REMOVE_ITEM:
      return {
        ...state.item,
        item: [...state.item.filter((prod) => prod.id !== action.playload)],
      };
    case ADD_ALL_ITEM:
      return {
        ...state.item,
        item: [...action.playload],
      };
    case DELETE_ITEM:
      return { ...state, item: [] };
    default:
      return state;
  }
};

export const addItemAction = (playload) => ({ type: ADD_ITEM, playload });
export const removeItemAction = (playload) => ({ type: REMOVE_ITEM, playload });
export const deleteItemAction = (playload) => ({ type: DELETE_ITEM, playload });
export const addAllItemAction = (playload) => ({
  type: ADD_ALL_ITEM,
  playload,
});
