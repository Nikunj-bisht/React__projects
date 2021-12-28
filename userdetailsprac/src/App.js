import React , {useState} from 'react';
import Usercomponent from './components/users/Usercomponent';
import Userslist from './components/users/Userslist';


function App() {
  const uList = [{username:'Niks',age:24}];
console.log(uList);
const [userlist , savetouserlist] =  useState(uList);
console.log(userlist);
const callsavedatafun = (data) => {

savetouserlist([...userlist,data]);

}

  return (
    <div>

<Usercomponent savedatatoarray = {callsavedatafun}></Usercomponent>
<Userslist  list = {userlist}></Userslist>

    </div>
  );
}

export default App;
