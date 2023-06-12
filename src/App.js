import React, {Fragment} from 'react';
import Meals from './componenets/Meals/Meals';
import Header from'./componenets/Layouts/Header';
function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
