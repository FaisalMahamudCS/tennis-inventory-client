import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user,loading]=useAuthState(auth);
  console.log(user);
  const logout=()=>{
    signOut(auth);
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark' className='text-white'>
  <Container>
  <Navbar.Brand as={Link} to='/'>Tennis Inventory</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} className='text-white' to='/item'>Item</Nav.Link>
      <Nav.Link as={Link} className='text-white' to='/blog'>Blog</Nav.Link>
      {
       user?
       <>
      <button className='text-decoration-none btn btn-link  text-white text-center' onClick={logout}> logout </button>
      <Nav.Link as={Link} className='text-white' to='/manageInventory'>Manage Item</Nav.Link>
      <Nav.Link as={Link} className='text-white' to='/addInventoryItem'>Add Item</Nav.Link>
      <Nav.Link as={Link} className='text-white' to='/myItem'>My Item</Nav.Link>
      </>
    :
    <Nav.Link as={Link} className='text-white' to='/login'>Login</Nav.Link>
      }
     
  
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;