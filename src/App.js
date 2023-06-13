import React, {Fragment} from 'react';
import Meals from './componenets/Meals/Meals';
import Header from'./componenets/Layouts/Header';
import Cart from './componenets/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
