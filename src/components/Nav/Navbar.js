import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
           <div className={classes.item}>
              <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
           </div>
           <div className={classes.item}>
              <NavLink to="/messages" activeClassName={classes.activeLink}>Message</NavLink>
            </div>
           <div className={classes.item}>
               <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
          </div>
         </nav>
       );
}

export default Navbar;
