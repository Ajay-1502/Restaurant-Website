import { useContext } from 'react';
import meals from '../assets/meals.jpeg';
import './Header.css';
import CartIcon from './cartIcon';
import RestaurantSummary from './RestaurantSummary';
import CartContext from './store/cart-context';

const Header = (props) => {
  const CartCtx = useContext(CartContext);

  const totalQuantity = CartCtx.items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return (
    <>
      <header className="header">
        <h1 className="title">The President Hotel</h1>
        <button className="cart-button" onClick={props.displayCart}>
          <CartIcon />
          <span>Your Cart - </span>
          <span className="badge">{totalQuantity}</span>
        </button>
      </header>
      <div className="main-image">
        <img src={meals} alt="Header-image" />
      </div>
      <RestaurantSummary />
    </>
  );
};

export default Header;
