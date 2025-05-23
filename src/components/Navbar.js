import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function CustomNavbar() {
    return (
        <Navbar expand="lg" sticky="top" className="navbar">
            <Container>
                <Navbar.Brand href="/">
                    <img className="logo" src="/images/logo.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/company">Company</Nav.Link>

                        <NavDropdown title="Projects" id="projects-dropdown" className="hover-dropdown">
                            <NavDropdown.Item href="/project/mine-centre">Mine Centre, Ontario</NavDropdown.Item>
                            <NavDropdown.Item href="/project/quartz-mountain">Quartz Mountain, Oregon</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/investors">Investors</Nav.Link>
                        <Nav.Link href="/news">News</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
