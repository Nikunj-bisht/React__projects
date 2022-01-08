import classes from './Cartbutton.module.css';
import CartIcon from './Carticon';
import { useContext } from 'react';
import { Cart_context } from '../store/Cartcontext';

const Cartbutton = (props) => {

const cart_cxt = useContext(Cart_context);

function showthecart(){
    props.showmfun();
}

const cart_total_items = cart_cxt.items.reduce((prv_val , current)=>{

return prv_val + current.amount;

},0)
console.log(cart_total_items);
return (

<button className={classes.button} onClick={showthecart}>
     
    <span className={classes.icon}>
        <CartIcon></CartIcon>
        </span>   

<span>Your Cart</span>
<span className={classes.badge}>{cart_total_items}</span>
</button>

)


}

export default Cartbutton;