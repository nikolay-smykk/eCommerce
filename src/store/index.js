import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cartQuantityReducer } from './cartQuantityReducer';
import { cartItemReducer } from './cartItemReducer';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  cartQuantity: cartQuantityReducer,
  carItem: cartItemReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk))
// );
