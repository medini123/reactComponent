import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";

class NavBar extends React.Component {
    render(){
return ( <>

<Navbar bg="primary" variant="dark" sticky='top'>
  <Container>
    <Navbar.Brand href="#home">ZM.coder</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Container>
</Navbar>


</>
);
    }
}
export default NavBar;