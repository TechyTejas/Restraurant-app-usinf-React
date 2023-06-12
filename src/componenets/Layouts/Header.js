import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './header.module.css';
import HeaderCartbutton from './HeaderCartbutton';

const  header =props=> {
  return  <React.Fragment>
         <header className={classes.header}>
            <h1>Restaurants App</h1>
            <HeaderCartbutton/>
         </header>
         <div className={classes['main-image']}>
            <img src={mealsImage} alt="a table full of delicious food!"/>
         </div>

    </React.Fragment>
  
}


export default header;