import React, { useState } from 'react';
import Header from './Components/Header';
import AvailableMeals from './Components/AvailableMeals';
import Cart from './Components/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header displayCart={showCartHandler} />
      {showCart && <Cart hideCart={hideCartHandler} />}
      <AvailableMeals />
    </>
  );
}

export default App;
