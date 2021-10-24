import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar(props) {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Resume">Resume</Nav.Link>
              <Nav.Link href="/RapidbuS">RapidbuS</Nav.Link>
              <Nav.Link href="/CodeWars">Code Wars</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
