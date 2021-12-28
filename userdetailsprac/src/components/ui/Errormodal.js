import Button from './Button';
import Card from './Card';
import classes from './Errormodal.module.css';


function Errormodal (props) {

    const {title,message} = props;

    return (
<Card className={classes.modal}>
<header className={classes.header}>

</header>

<div className={classes.content}>
<p>{title}</p>
</div>

<footer className={classes.actions}>
<Button onClick = {props.vanishmodal}></Button>
</footer>

</Card>

    )

}

export default Errormodal;