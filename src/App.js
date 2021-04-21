import { useDispatch, useSelector } from 'react-redux';
import { addItemAction, removeItemAction } from './store/cartItemReducer';

function App() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cartQuantity.item);
  const cartItem = useSelector((state) => state.carItem.item);

  const addCart = () => {
    dispatch({
      type: 'ADD_CART',
      playload: 1,
    });
  };
  const deleteCart = () => {
    dispatch({
      type: 'DELETE_CART',
      playload: 1,
    });
  };

  const addItem = () => {
    const custom = {
      id: Date.now(),
      value: 'some 100' + Date.now(),
    };
    dispatch(addItemAction(custom));
  };

  const removeItem = (id) => {
    dispatch(removeItemAction(id));
  };

  return (
    <>
      <button onClick={() => addItem()}> * </button> <br />
      <button onClick={() => addCart()}> + </button> <br />
      <button onClick={() => deleteCart()}> - </button>
      <h1 className="text-purple-600">{cartQuantity}</h1>
      {cartItem.length > 0 ? (
        cartItem.map((item) => (
          <div onClick={() => removeItem(item.id)} key={item.id}>
            {item.value}
          </div>
        ))
      ) : (
        <h1 className="text-red-500">Пусто</h1>
      )}
    </>
  );
}

export default App;
