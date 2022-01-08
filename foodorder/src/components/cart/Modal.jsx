import classes from './Modal.module.css';
import { Fragment, ReactDOM } from 'react';




const Modalcomp = (props) =>{

const modaldiv = document.getElementById("modal");

    return (
        <Fragment>
<div className={classes.backdrop}></div>
<div className={classes.modal}>
{props.children}
</div>

        </Fragment>

    )


}

export  {Modalcomp};