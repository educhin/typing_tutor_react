import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'>Home  </NavLink>
      <NavLink to='/test'>Test  </NavLink>
      <NavLink to='/quoteForm'>Add a quote!</NavLink>
    </div>
  );
};

export default NavBar;