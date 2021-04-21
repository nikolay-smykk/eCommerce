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

export const cartItemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state.item, item: [...state.item, action.playload] };

    case 'DELETE_ITEM':
      return { ...state, item: [] };
    default:
      return state;
  }
};
