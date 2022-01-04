import classes from './Singlemeal.module.css';
import Mealform from './Mealform';

const Singlemeal = (props) => {


  const { mealobj } = props;
  return (

    <li className={classes.meal}>
      <div>
        <h3>{mealobj.name}</h3>
        <div className={classes.description}>{mealobj.description}</div>
        <div className={classes.price}>{mealobj.price}</div>
      </div>

      <div>

        <Mealform></Mealform>
      </div>

    </li>

  )

}

export default Singlemeal;