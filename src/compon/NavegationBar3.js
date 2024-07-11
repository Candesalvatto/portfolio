
import React from 'react'
import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';
import { List } from 'react-bootstrap-icons'; 



export const NavegationBar3 = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false); 

  return (

    <Navbar expand={false} id="NavCanvas" className=" NavCanvas bg-transparent mb-3 flex-column">
    <Container fluid>
      <Navbar.Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="top"
        className="offcanvas-navbar"


      >
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/" className='flip-up-360'>Inicio</Nav.Link>
            <Nav.Link href="/more-me" className='flip-up-360'>Sobre mi</Nav.Link>
            <Nav.Link href="/projects" className='flip-up-360'>Proyectos</Nav.Link>
            <Nav.Link href="/write-me" className='flip-up-360'>Contacto</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
      <Button
        id="hambur-custom-button"
        variant="outline-danger"
        onClick={() => setShowOffcanvas(!showOffcanvas)}
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
        className="ms-auto custom-button"
      >

        <List style={{ fontSize: '2.2em', color: '#F0E9E2' }} />
      </Button>
    </Container>
  </Navbar>


  )
}
