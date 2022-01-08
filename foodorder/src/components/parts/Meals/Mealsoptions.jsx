import classes from './Mealsoptions.module.css';
import DUMMY_MEALS from './Meals';
import React from 'react';
import Card from '../../UI/Card';
import { useState, useEffect } from 'react';
import Singlemeal from './Singlemeal';

const Mealoptions = () => {

    // const [val, valstate] = useState(false);

    // useEffect(() => {

    //     setTimeout(() => {
    //         console.log(33);
    //         valstate(true);
    //     }, 3000);


    // }, []);

    console.log(DUMMY_MEALS);

    return (

        <section className={classes.meals}>
            <Card>

                <ul>
                    {

                        DUMMY_MEALS.map(meal => {

                            return (
                                <Singlemeal mealobj={meal}></Singlemeal>
                            )

                        })
                    }

                </ul>

            </Card>

        </section>


    )

}





export default Mealoptions;