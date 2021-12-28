import classes from './Button.module.css';


const Button = (props) =>{
// console.log(props.children);
return <button className={`${classes.button}`}  onClick={props.onClick}>Click</button>;

}

export default Button;