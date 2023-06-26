import { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../Store/Cart-Context'
import CartItem from './CartItem'


const Cart=(props)=>{
  const cartCtx = useContext(CartContext)
  // console.log(cartCtx,"from cart")

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length>0

  const cartItemRemoveHandler = (id) =>{
   cartCtx.removeItem(id);        
  }

  const cartItemAddHandler = (item) =>{
    cartCtx.addItem({...item,amount:1});   //add 1 quanity in portal
  }

    const cartItems =
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
      <CartItem 
      key={item.id} 
      name={item.name} 
      amount={item.amount} 
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null,item.id)}
      onAdd={cartItemAddHandler.bind(null,item)}/>
      ))}
      </ul>


      return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
             {/* close button in portal */}
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {/* order button in portal */}
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
}


export default Cart;