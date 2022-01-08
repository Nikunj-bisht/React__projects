import React from 'react';

import classes from './Navigation.module.css';
import { Authcontext } from '../store/Authcontext';

const Navigation = (props) => {
  return (
<Authcontext.Consumer>
  {

(ctx)=>{

return <nav className={classes.nav}>
      <ul>
        {ctx.isloggedin && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isloggedin && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isloggedin && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  

}

  }
    </Authcontext.Consumer>
  );
};

export default Navigation;
