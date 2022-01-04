import classes from './Cartbutton.module.css';
import CartIcon from './Carticon';

const Cartbutton = () => {

return (

<button className={classes.button}>
     
    <span className={classes.icon}>
        <CartIcon></CartIcon>
        </span>   

<span>Your Cart</span>
<span>3</span>
</button>

)


}

export default Cartbutton;