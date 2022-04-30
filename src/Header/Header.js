import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user]=useAuthState(auth);
  console.log(user);
  const logout=()=>{
    signOut(auth);
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white">
  <Container>
  <Navbar.Brand href="#home">Sports Gear Inventory Management</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} className='text-dark' to='/item'>Item</Nav.Link>
      <Nav.Link as={Link} className='text-dark' to='/category'>Category</Nav.Link>
      {
       user?
       <>
      <button className='text-decoration-none btn btn-link  text-dark' onClick={logout}> logout </button>
      <Nav.Link as={Link} className='text-dark' to='/manageItem'>Manage Item</Nav.Link>
      <Nav.Link as={Link} className='text-dark' to='/addItem'>Add Item</Nav.Link>
      <Nav.Link as={Link} className='text-dark' to='/myItem'>Manage Item</Nav.Link>
      </>
    :
    <Nav.Link as={Link} className='text-dark' to='/login'>Login</Nav.Link>
      }
     
  
    </Nav>
    <Nav>
      <Nav.Link as={Link} className='text-dark' to='/inventory' >Inventory</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;