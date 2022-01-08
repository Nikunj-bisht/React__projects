import React, { useState , useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import { Authcontext } from './components/store/Authcontext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(()=>{
console.log('useeffect ran');
  const islogged = localStorage.getItem('isloggedin');
if(islogged === '1'){

setIsLoggedIn(true);

}
} , [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isloggedin','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <Authcontext.Provider value = {{isloggedin : isLoggedIn}}>
      <MainHeader  onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </Authcontext.Provider>
    </React.Fragment>
  );
}

export default App;
