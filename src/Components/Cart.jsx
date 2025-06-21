import { useContext } from 'react';
import Modal from './Modal';
import './Cart.css';
import CartContext from '../Components/store/cart-context';

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const cartItems = CartCtx.items.map((item) => {
    return (
      <div className="item-name">
        <li key={item.id}>{item.name}</li>
        <div className="total">
          <span className="total-text">{item.quantity}</span>
          <span className="total-amount">{item.price}</span>
          <button onClick={() => CartCtx.addItems(item)}>+</button>
          <button onClick={() => CartCtx.removeItems(item.id)}>-</button>
        </div>
      </div>
    );
  });

  return (
    <Modal hideCart={props.hideCart}>
      <div className="cart">
        <ul>{cartItems}</ul>
        <div className="actions">
          <button className="close" onClick={props.hideCart}>
            Close
          </button>
          <button className="order">Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
