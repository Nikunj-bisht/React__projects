import classes from './Mealform.module.css'
import React , { useEffect, useState , useRef} from 'react';

const Mealform = (props) =>{

  const amount = useRef();


function addtocart(event){

  event.preventDefault();
console.log(amount.current.value);

}

const Input = React.forwardRef((props,ref)=>{
return (

<input type="number" ref = {ref}></input>

)
})

function amountchanged(event) {


}


    return (

    <form className= {classes.form} onSubmit={addtocart}>
        <div className={classes.input}>
        <label>Amount</label>
        <Input ref = {amount}></Input>
        </div>
 <button>+ Add</button>

    </form>

    )


}

export default Mealform