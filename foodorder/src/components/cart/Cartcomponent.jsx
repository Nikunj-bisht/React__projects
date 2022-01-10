import classes from './Cartcomponent.module.css';
import { Cartorder } from './Cartorders';
import { Modalcomp } from './Modal';
import { useContext } from 'react';
import { Cart_context } from '../store/Cartcontext';

const Cartcomponent = (props) => {

    const cart_cxt = useContext(Cart_context);

    const closethemodal = () => {

        props.hidecartfun();

    }


    function hidecartheadercomp() {
        props.funtohidecart();
    }



    return (

        <Modalcomp>
            <Cartorder></Cartorder>
            <div className={classes.total}>

                <div>Total amount</div>
                <div>{cart_cxt.totalamount}</div>
            </div>
            <div>
                <button onClick={closethemodal}>Close</button>
            </div>
        </Modalcomp>



    )


}


export default Cartcomponent;