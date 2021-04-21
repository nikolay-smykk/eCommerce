const defaultState = {
  item: [
    {
      id: 123,
      value: 'some1 value',
    },
    {
      id: 1111123,
      value: 'some2 value',
    },
    {
      id: 122323,
      value: 'some3 value',
    },
  ],
};

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

export const cartItemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state.item, item: [...state.item, action.playload] };
    case REMOVE_ITEM:
      return {
        ...state.item,
        item: [...state.item.filter((prod) => prod.id !== action.playload)],
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
