import React from 'react'
import { NavLink as NavLinkIMP } from 'react-router-dom';
import styled from './NavLink.module.css';

function NavLink({to, children, ...props}) {
  return (
    <NavLinkIMP
        {...props}
        to={to}
        className={({ isActive })=> (isActive ? styled.isActive : undefined)} 
    >{children}</NavLinkIMP>
  )

}

export default NavLink
