import React, {useState} from 'react';
import Meals from './componenets/Meals/Meals';
import Header from'./componenets/Layouts/Header';
import Cart from './componenets/Cart/Cart';
import CartProvider from './Store/CartProvider';

function App() {
  const[cartIsShown,setCartIsShowm]=useState(false)

  const showCartHandler = () =>{
        setCartIsShowm(true)
  }

  const hideCartHandler = () =>{
       setCartIsShowm(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
