import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


function NavBar() {

    return (

        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            Alquilar
                        </Nav>
                        <Nav className="me-auto">
                            Vender
                        </Nav>
                        <Nav className="me-auto">
                            Altas
                        </Nav>
                        <Nav className="me-auto">
                            <Link to={"/carTable"}>Listar vehiculos</Link>
                        </Nav>
                        <Nav className="me-auto">
                            Listar personas
                        </Nav>
                        <Nav className="me-auto">
                            Listar formularios
                        </Nav>
                        <Nav className="me-auto">
                            Listar ventas
                        </Nav>
                        <Nav className="me-auto">
                            Listar alquileres
                        </Nav>
                        <Nav className="me-auto">
                            Buscar
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}




export default NavBar;