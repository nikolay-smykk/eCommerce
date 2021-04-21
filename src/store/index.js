import { createStore, combineReducers } from 'redux';
import { cartQuantityReducer } from './cartQuantityReducer';
import { cartItemReducer } from './cartItemReducer';

const rootReducer = combineReducers({
  cartQuantity: cartQuantityReducer,
  carItem: cartItemReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
