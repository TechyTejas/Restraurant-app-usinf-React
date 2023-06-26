import classes from './Input.module.css'
import React from 'react';

const Input= React.forwardRef((props,ref )=>{
  return (
    <div className={classes.input}>
    <label htmlFor={props.label.id}>{props.label}</label>  
    {/* here lable is for that quantity wor */}
    <input ref={ref}{...props.input}/>  
  </div> 
  )   // no need of ...props.input
})

export default Input;