//input krna
import { useRef , useState} from 'react';
import Input from '../UI/Input.js';
import classes from './MealItemForm.module.css'

const MealItemForm = (props)=>{
     
    const[amountIsValid,setAmountIsValid] =useState(true);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
         event.preventDefault();
         const enteredAmount = amountInputRef.current.value;  //we have string value here to convert into num we write under that
         const enteredAmountNumber = +enteredAmount 

         if(enteredAmount.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber>5)
         {
         setAmountIsValid(false)
         return;    
         }

         props.onAddToCart(enteredAmountNumber);  // here we excuting the function sent VIA props
    }
    return(
        //here style is for only that add button
        <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label="Quantity" 
        input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm;