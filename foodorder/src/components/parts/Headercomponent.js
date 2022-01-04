import React from 'react';
import classes from './Headercomponent.module.css';
import mealimage from '../../assests/meals.jpg';
import Cartbutton from '../UI/Cartbutton';

const Headercomponent = () =>{

return (

    <React.Fragment>

<header className={classes.header}>
    <h1>Meals</h1>
    <Cartbutton></Cartbutton>
</header>
<div className={classes['main-image']}>
    <img src={mealimage}></img>
</div>



    </React.Fragment>

)



}


export default Headercomponent;