import { useEffect, useState, useRef } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import '../../bootstrap-5.1.3-dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({ vehiculos }) {


    //Mediante el método filter, segrego los coches que son de alquiler o venta
    let vehiculosArrayAlquiler = vehiculos.filter(coche => coche.venta == false);
    let vehiculosArrayVenta = vehiculos.filter(coche => coche.venta == true);

    const vehiculosAlquiler = vehiculosArrayAlquiler.map(
        (element, index) =>
            <Nav className="me-auto">
                <NavDropdown title={element.marca} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">{element.modelo}</NavDropdown.Item>
                </NavDropdown>
            </Nav>
    );

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Alquiler" id="basic-nav-dropdown">
                                {vehiculosAlquiler}
                            </NavDropdown>
                        </Nav>
                        <Nav className="me-auto">
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>

    );
}

export default NavBar;