import { useState } from 'react';
import classes from './Usersform.module.css';
import Card from '../ui/Card.js';
import Button from '../ui/Button.js';
import Errormodal from '../ui/Errormodal';

const Usercomponent = (props) => {

        const [uname, usernamestate] = useState('');
        const [uage, useragestate] = useState();
        const [error , errorstate] = useState();

        const addtouserslist = (event) => {
                event.preventDefault();
                if(uname.trim().length === 0){
                        errorstate({
                                title:'Invalid input!'
                        })
return;
                }
props.savedatatoarray({
        username : uname,
        age : uage
})
usernamestate('');
useragestate('');

        }

        function saveusername(event) {

                usernamestate(event.target.value);


        }

        function saveage(event) {

                useragestate(event.target.value);

        }

        function funtovanishmodal(){
                errorstate(null);
        }

        return (
                <div>

{error && <Errormodal title={error.title} vanishmodal = {funtovanishmodal}></Errormodal>}

<Card className={classes.input}>

<form onSubmit={addtouserslist}>
        <label>Username</label>
        <input id="username" type='text' value={uname} onChange={saveusername}></input>


        <label>Age</label>
        <input id="age" type='number' value={uage} onChange={saveage}></input>

        <Button></Button>
</form>

</Card>
                </div>
        );

}

export default Usercomponent;