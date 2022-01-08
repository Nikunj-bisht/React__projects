import classes from './Singlemeal.module.css';
import Mealform from './Mealform';
import { useContext } from 'react';
import { Cart_context } from '../../store/Cartcontext';

const Singlemeal = (props) => {


  const { mealobj } = props;
const cartcontext = useContext(Cart_context);
  function addtocart (meal_amount){

cartcontext.additem({
id:mealobj.id,
name:mealobj.name,
amount:meal_amount,
price:mealobj.price
})

  }

  return (

    <li className={classes.meal}>
      <div>
        <h3>{mealobj.name}</h3>
        <div className={classes.description}>{mealobj.description}</div>
        <div className={classes.price}>{mealobj.price}</div>
      </div>

      <div>

        <Mealform mealchoosed = {addtocart}></Mealform>
      </div>

    </li>

  )

}

export default Singlemeal;