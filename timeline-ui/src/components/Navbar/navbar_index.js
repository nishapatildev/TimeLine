import React from 'react';
import { Nav, NavBtn, NavBtnLink,Bars, NavMenu, NavLink } from './navbar_elements';

function NavbarFunc() {
  const myImageStyle = { width: '125px', height: '80px' };
  return (
    <div>
     <Nav>
      <NavLink to="/">
       <img style={myImageStyle}  src ={require('../../img/timeline2.png')} 
        alt ='logo'/>
      </NavLink>
      <Bars/>
      <NavMenu>
        <NavLink to="/home" activeStyle>Home</NavLink>
        <NavLink to="/services" activeStyle>Services</NavLink>
        <NavLink to="/about" activeStyle>About</NavLink>
        <NavLink to="/contact" activeStyle>Contact</NavLink>
       
       
      </NavMenu>
      <NavBtn>
        <NavBtnLink to ='/signin'>Sign Up</NavBtnLink>
       
      </NavBtn>
     </Nav>
    </div>
    );

}




export default NavbarFunc;