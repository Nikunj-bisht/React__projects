import classes from './Cartcomponent.module.css';
import { Cartorder } from './Cartorders';
import { Modalcomp } from './Modal';

const Cartcomponent = (props) => {

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
                <div>100</div>
            </div>
            <div>
                <button onClick={closethemodal}>Close</button>
            </div>
        </Modalcomp>



    )


}


export default Cartcomponent;