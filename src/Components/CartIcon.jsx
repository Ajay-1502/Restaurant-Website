import carticon from '../assets/carticon.png';
import './CartIcon.css';

const CartIcon = () => {
  return (
    <>
      <div className="icon">
        <img className="cart-img" src={carticon} alt="cart" />
      </div>
    </>
  );
};

export default CartIcon;
