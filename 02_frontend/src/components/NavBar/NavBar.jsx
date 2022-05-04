import { useEffect, useState, useRef } from 'react';

import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBBtn
} from 'mdb-react-ui-kit';

function NavBar({ vehiculos }) {


    //Mediante el método filter, segrego los coches que son de alquiler o venta
    let vehiculosArrayAlquiler = vehiculos.filter(coche => coche.venta == false);
    let vehiculosArrayVenta = vehiculos.filter(coche => coche.venta == true);


    /**
 * Función que permite agrupar un array por el atributo que queramos
 * devolviendonos un Map-Diccionario, donde el elemento por el que se agrupa 
 * es el index
 * @param {Parámetro por el que queremos agrupar} key 
 * @param {Array que queremos agrupar} arr 
 * @returns Map
 */
    let groupBy = (key, arr) =>
        arr.reduce((cache, product) => {
            const property = product[key];
            if (property in cache) {
                return { ...cache, [property]: cache[property].concat(product) };
            }
            return { ...cache, [property]: [product] };
        }, {});


    let arrayAgrupadoMarcas = groupBy("marca", vehiculosArrayAlquiler);

    let arrayMarcas = []
    let arrayMarcasIndividuales = [];
    let arrayMarcasMultiples = [];

    //Bucle que segrega el Map en 2 nuevos, según haya varios elementos o no
    for (const property in arrayAgrupadoMarcas) {
        console.log({ property });
        arrayMarcas = property;
        console.log(arrayAgrupadoMarcas[property].length);
        for (let i = 0; i < arrayAgrupadoMarcas[property].length; i++) {
            if (arrayAgrupadoMarcas[property].length == 1) {
                arrayMarcasIndividuales.push(arrayAgrupadoMarcas[property][i].marca);
            } else {
                arrayMarcasMultiples.push(arrayAgrupadoMarcas[property][i].marca);
            }
        }
    }
    let arrayMarcasMultiplesSinDuplicados = [];

    console.log(arrayMarcasMultiples);

    //Bucle que genera un nuevo array con las marcas (sin duplicar) que tienen más de un modelo
    for (let i = 0; i < arrayMarcasMultiples.length; i++) {

        const elemento = arrayMarcasMultiples[i];

        if (!arrayMarcasMultiplesSinDuplicados.includes(arrayMarcasMultiples[i])) {
            arrayMarcasMultiplesSinDuplicados.push(elemento);
        }
    }


    let arrayMarcasIndividualesCompleto = [];

    /*Blucle que genera un nuevo array con los coches de las marcas que solo tienen un modelo
    con todos sus datos*/
    for (let i = 0; i < arrayMarcasIndividuales.length; i++) {
        for (let j = 0; j < vehiculos.length; j++) {
            if (arrayMarcasIndividuales[i] == vehiculos[j].marca) {
                arrayMarcasIndividualesCompleto.push(vehiculos[j])
            }
        }
    }

    console.log(arrayMarcasIndividualesCompleto);

    let arrayMarcasMultiplesCompleto = [];

    /*Blucle que genera un nuevo array con los coches de las marcas que tienen más de un modelo
    con todos sus datos*/
    for (let i = 0; i < arrayMarcasMultiplesSinDuplicados.length; i++) {
        for (let j = 0; j < vehiculos.length; j++) {
            if (arrayMarcasMultiplesSinDuplicados[i] == vehiculos[j].marca) {
                arrayMarcasMultiplesCompleto.push(vehiculos[j])
            }
        }
    }

    //Constante que genera los menús para las marcas que tienen solo un modelo
    const vehiculosAlquilerMarcasIndividuales = arrayMarcasIndividualesCompleto.map(
        (element, index) =>
            <Nav className="me-auto">
                <NavDropdown title={element.marca} id="basic-nav-dropdown">
                    <NavDropdown.Item className="submenu" href="#action/3.1">{element.modelo}</NavDropdown.Item>
                </NavDropdown>
            </Nav>
    );

    /**
     * Función que devuelve un submenu con los modelos correspondientes con la marca 
     * introducida
     * @param {Marca de coche que nos interesa} elemento 
     * @returns Submenú con todos los modelos dependiendo de la marca introducida
     */
    function segregar(elemento) {
        const arrayModelosSeleccionados = []
        for (let i = 0; i < arrayMarcasMultiplesCompleto.length; i++) {
            if (arrayMarcasMultiplesCompleto[i].marca === elemento) {
                arrayModelosSeleccionados.push(arrayMarcasMultiplesCompleto[i].modelo)
            }
        }
        const devolucion = arrayModelosSeleccionados.map(
            (element, index) =>
                <NavDropdown.Item href="#action/3.1" className="submenu">{element}</NavDropdown.Item>
        )
        return devolucion

    }
    //Constante que genera los menús para las marcas que tienen múltiples modelos
    const vehiculosAlquilerMarcasMultiples = arrayMarcasMultiplesSinDuplicados.map(
        (element, index) =>
            <Nav className="me-auto">
                <NavDropdown title={element} id="basic-nav-dropdown" >
                    {segregar(element)}
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
                                {vehiculosAlquilerMarcasIndividuales}
                                {vehiculosAlquilerMarcasMultiples}
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