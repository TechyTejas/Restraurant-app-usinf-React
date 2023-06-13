import React, {Fragment,useState} from 'react';
import Meals from './componenets/Meals/Meals';
import Header from'./componenets/Layouts/Header';
import Cart from './componenets/Cart/Cart';

function App() {
  const[cartIsShown,setCartIsShowm]=useState(false)

  const showCartHandler = () =>{
        setCartIsShowm(true)
  }

  const hideCartHandler = () =>{
       setCartIsShowm(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
