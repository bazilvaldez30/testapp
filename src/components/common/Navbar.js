import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button, Flex, Text, View } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

const MyNavbar = () => {

  const [showLogin, setShowLogin] = useState(false);

  const isLogin = Auth.user;
  console.log(Auth.user.attributes.email)

  const handleSIgnInClick = () =>{
    setShowLogin(true)
  }

  const handleSignout = () => {
    Auth.signOut()
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
       <div className='d-flex justify-content-around w-100'>
        <Navbar.Brand as={Link} to="/" className='col-4'>Zil-Amplify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link className='mx-auto' as={Link} to="/workouts">Workouts</Nav.Link>
          <Nav className="ms-auto">
          {!isLogin && (
            <Nav.Link onClick={handleSIgnInClick}>Sign in</Nav.Link>
          )}
          {showLogin && (
            <Authenticator/>
          )}
          {isLogin && (
            <Flex justifyContent="around" alignItems='center'>
              <Text>{Auth.user.attributes.email}</Text>
              <Button onClick={handleSignout}>Signout</Button>
            </Flex>
          )}
          </Nav>
        </Navbar.Collapse>
       </div>
      </Container>
    </Navbar>
  )
}

export default MyNavbar