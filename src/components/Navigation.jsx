import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./../assets/ppq-w.png";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigasi = () => {
    return (
        <div className="bg-light">
            <Navbar variant="light" expand="lg" className="px-5">
                <Navbar.Brand href="#home" className="ml-auto">
                    <img src={Logo} alt="" style={{ width: "190px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav "
                    className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="mx-3">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" className="mx-3">
                            Galeri
                        </Nav.Link>
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                href="#action/3.1"
                                style={{ padding: "15px", color: "gray" }}>
                                Tentang PPQ Al Mahir
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#action/3.2"
                                style={{ padding: "15px", color: "gray" }}>
                                Pondasi dan Keunggulan
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#action/3.3"
                                style={{ padding: "15px", color: "gray" }}>
                                KBM
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact" className="mx-3">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigasi;
