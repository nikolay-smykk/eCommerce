import { addAllItemAction } from '../store/cartItemReducer';

export const fetchProducts = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => dispatch(addAllItemAction(json)));
  };
};
