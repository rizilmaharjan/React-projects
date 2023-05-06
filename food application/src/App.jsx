import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartIsShown, setCartIsShowm] = useState(false);
  const showCartHandler = ()=>{
    setCartIsShowm(true);
  }
  const hideCartHandler = ()=>{
    setCartIsShowm(false);
  }
  return (
    <>
      { cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCard={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
