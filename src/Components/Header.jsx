import meals from '../assets/meals.jpeg';
import './Header.css';
import CartIcon from './cartIcon';
import RestaurantSummary from './RestaurantSummary';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="title">The President Hotel</h1>
        <button className="cart-button">
          <CartIcon />
          <span>Your Cart - </span>
          <span className="badge">0</span>
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
