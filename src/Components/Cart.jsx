import Modal from './Modal';
import './Cart.css';

const Cart = () => {
  const cartItems = [
    {
      id: 'm6',
      name: 'Burger',
      description: 'American snack with cheese,patty',
      price: 250,
    },
  ];
  return (
    <Modal>
      <div className="cart">
        <ul>
          {cartItems.map((item) => {
            return (
              <>
                <div className="item-name">
                  <li key={item.id}>{item.name}</li>
                  <div className="total">
                    <span className="total-text">Total Amount</span>
                    <span className="total-amount">₹250</span>
                  </div>
                  <div className="actions">
                    <button className="close">Close</button>
                    <button className="order">Order</button>
                  </div>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </Modal>
  );
};

export default Cart;
