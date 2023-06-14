
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/Cart-Context'
import { useContext } from 'react'

const HeaderCartbutton=props=> {
  const cartctx = useContext(CartContext)

  const NumberOfCartItems = cartctx.items.reduce((curNumber, item)=>{
    return curNumber+ item.amount;
  },0);

  return <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{NumberOfCartItems}</span>
  </button>
}

export default HeaderCartbutton