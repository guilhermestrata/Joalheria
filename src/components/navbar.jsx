import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';


function NavScrollExample() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Navbar bg="light" expand="lg">
        <Container fluid className="navbar">
        <div className="top-navbar">
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Button className="menu-suspenso" variant="light" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4D4D4D" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/home">Sobre</Nav.Link>
        <Nav.Link href="/home">Contato</Nav.Link>
         </Nav>
    </Tab.Container>
        </Offcanvas.Body>
      </Offcanvas>
      
        <Navbar.Brand className="brand" href="#">Joalheria Arendt</Navbar.Brand>
        <Button variant="light">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4D4D4D" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path></svg>
        </Button>
        </div>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2 rounded-pill" aria-label="Search" />
            <Button className="lupa rounded-pill bg-white border-0" variant="light" size="sm"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg></Button>
          </Form>
        <Nav className="me-auto my-2 my-lg-0 links" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="/src/pages/sobre.jsx">Sobre</Nav.Link>
            <Nav.Link href="#action2">Contato</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default NavScrollExample;