import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import "../styles/nameNavBar.css"

const NavBar = () => {
    const name = "{ CRHISTIAN RAMÍREZ }";
    

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/#/"><div className='wrapper'>{name}</div></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav >
                        <Nav.Link className="navLink" href="/#/">Home</Nav.Link>
                        <Nav.Link className="navLink" href="/#/about-me">About Me</Nav.Link>
                        <Nav.Link className="navLink" href="/#/projects">Portfolio</Nav.Link>
                        <Nav.Link className="navLink" href="/#/contact-me">Contact Me</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;