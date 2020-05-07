import React from 'react'
import { Navbar, NavDropdown, FormControl, Form, Nav, Button } from 'react-bootstrap';
import './navigation.style.scss';
import Search from '../search/search';
import CartDropDown from '../cart-dropdown/cart-dwopdown';
import {

  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";


const Navigation = (props) => {
  return (
    <>
    
      <div className='an'>
      
      
      <Navbar expand="lg" >
          <Navbar.Brand href="#home" style={{ color: 'red' }}>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" className='text-color' style={{ color: 'red' }}>Home</Nav.Link>
              <Nav.Link href="/form" className='text-color' style={{ color: 'red' }}>Rejister</Nav.Link>
              <CartDropDown />
            </Nav>

          </Navbar.Collapse>
        </Navbar>

      </div>

    
      {props.children}


   
    </>
  )
}

export default Navigation
