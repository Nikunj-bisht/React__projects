import React, { useState , useEffect , useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
console.log(props);
const [mailvalid , funtoupdatestate] = useReducer((state , action)=>{

if(action.type === 'USER_INPUT'){
  return {value: action.val , isvalid : action.val.includes('@')};
}else if(action.type === 'INPUT_BLUR'){
  console.log(state.val)
  return {value:state.value , isvalid : state.value.includes('@')};
}
return {value : '' , isvalid:false}
} , {value:'' , isvalid:false} )

console.log('login component');
  useEffect(() =>{

    console.log('validation effect ran');
      setFormIsValid(
        mailvalid.value.includes('@') && enteredPassword.trim().length > 6
      );
    
    } , [mailvalid.value , enteredPassword])
    

  const emailChangeHandler = (event) => {

    funtoupdatestate({type:'USER_INPUT' , val : event.target.value});

    // setEnteredEmail(event.target.value);


  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    funtoupdatestate({type:'INPUT_BLUR'});

    // setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(mailvalid.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            mailvalid.isvalid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={mailvalid.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
