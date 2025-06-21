import React, { useState } from 'react';
import Header from './Components/Header';
import AvailableMeals from './Components/AvailableMeals';
import Cart from './Components/Cart';
import CartProvider from './Components/store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Header displayCart={showCartHandler} />
      {showCart && <Cart hideCart={hideCartHandler} />}
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
