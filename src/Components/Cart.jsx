import { useContext } from 'react';
import Modal from './Modal';
import './Cart.css';
import CartContext from '../Components/store/cart-context';

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const totalAmount = CartCtx.items.reduce((totalBill, item) => {
    return totalBill + item.price * item.quantity;
  }, 0);

  const cartItems = CartCtx.items.map((item) => {
    return (
      <li key={item.id} className="cart-item">
        <span className="item-name">{item.name}</span>
        <span className="item-price">₹{item.price}</span>
        <div className="quantity-controls">
          <button onClick={() => CartCtx.removeItems(item.id)}>-</button>
          <span className="item-qty">{item.quantity}</span>
          <button onClick={() => CartCtx.addItems({ ...item, quantity: 1 })}>
            +
          </button>
        </div>
      </li>
    );
  });

  return (
    <Modal hideCart={props.hideCart}>
      <div className="cart">
        <ul className="cart-items">{cartItems}</ul>
        <h2>Total Amount : {totalAmount}</h2>
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
