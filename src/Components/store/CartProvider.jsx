import CartContext from './cart-context';
import { useState } from 'react';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemCartHandler = (item) => {
    setItems((prevItems) => {
      let updateItems;
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);

      if (existingItemIndex != -1) {
        updateItems = [...prevItems];
        const existingItem = updateItems[existingItemIndex];

        updateItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + item.quantity,
        };
      } else {
        updateItems = [...prevItems, { ...item }];
      }

      setTotalAmount((prevAmount) => prevAmount + item.quantity * item.price);

      return updateItems;
    });
  };
  const removeItemCartHandler = (id) => {
    setItems((prevItems) => {
      let updateItems;
      const existingItemIndex = prevItems.findIndex((i) => i.id === id);
      if (existingItemIndex === -1) return prevItems;

      const exisitngItem = prevItems[existingItemIndex];

      if (exisitngItem.quantity === 1) {
        prevItems.filter((i) => i.id != id);
      } else {
        updateItems = [...prevItems];
        updateItems[existingItemIndex] = {
          ...exisitngItem,
          quantity: exisitngItem.quantity - 1,
        };
      }

      setTotalAmount((prevAmount) => prevAmount - exisitngItem.price);
      return updateItems;
    });
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItems: addItemCartHandler,
    removeItems: removeItemCartHandler,
  };

  <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>;
};

export default CartProvider;
