import { useState, useContext } from 'react';
import './AvailableMeals.css';
import CartContext from '../Components/store/cart-context';

const MealList = (props) => {
  const [quantity, setQuantity] = useState(1);
  const CartCtx = useContext(CartContext);

  const addToCartHandler = (event) => {
    event.preventDefault();

    alert(`${props.name} is added to your cart`);

    CartCtx.addItems({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantity,
    });
  };

  return (
    <li key={props.id} className="meal-item">
      <div className="meal-info">
        <strong>{props.name}</strong>
        <p className="description">{props.description}</p>
        <p className="price">₹{props.price}</p>
      </div>

      <div className="meal-form-wrapper">
        <form onSubmit={addToCartHandler}>
          <div className="qty-wrapper">
            <label htmlFor={`qty-${props.id}`}>Qty</label>
            <input
              type="number"
              id={`qty-${props.id}`}
              min="1"
              defaultValue="1"
              onChange={(e) => setQuantity(+e.target.value)}
            />
          </div>
          <button type="submit">+ Add</button>
        </form>
      </div>
    </li>
  );
};

export default MealList;
