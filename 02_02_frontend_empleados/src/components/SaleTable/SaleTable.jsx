import { useEffect, useState, useRef, useContext } from 'react';
import Table from 'react-bootstrap/Table'
import { Context } from "../../SharedState"
import Button from 'react-bootstrap/Button'
import { apiDelete, post } from "../../aux_api";
import { Link } from 'react-router-dom';

function SaleTable() {

    const { states, actions } = useContext(Context);


    async function clickHandlerDelete(id) {
        let data = JSON.stringify({ id });
        await apiDelete("http://localhost:3000/api" + "/sale", data);
        actions.getAllClients();
        actions.getAllSales();
    }

    /**
     * Función para obtener la matrícula a partir del id del coche
     * @param {*} id 
     * @returns matricula
     */
    function takeMatricula(id) {
        let coche = states.cars.filter(element => element.id_coche == id);
        return coche[0].matricula;
    }
    /**
     * Función para obtener el modelo a partir del id del coche
     * @param {*} id id del coche
     * @returns modelo
     */
    function takeModelo(id) {
        let coche = states.cars.filter(element => element.id_coche == id);
        return coche[0].modelo;
    }
    /**
     * Función para obtener la marca a partir del id del coche
     * @param {*} id id del coche
     * @returns marca
     */
    function takeMarca(id) {
        let coche = states.cars.filter(element => element.id_coche == id);
        return coche[0].marca;
    }

    return (

        <>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>fecha</th>
                            <th>id_coche</th>
                            <th>Matricula</th>
                            <th>Modelo</th>
                            <th>Marca</th>
                            <th>id_cliente</th>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Precio</th>
                            <th>Eliminar</th>
                            <th>Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {states.sales.map(
                            (element, index) =>
                                <tr key={index}>
                                    <td>{element.id}</td>
                                    <td>{element.fecha}</td>
                                    <td>{element.id_coche}</td>
                                    <td>{takeMatricula(element.id_coche)}</td>
                                    <td>{takeModelo(element.id_coche)}</td>
                                    <td>{takeMarca(element.id_coche)}</td>
                                    <td>{element.id_cliente}</td>
                                    <td>{"DNI"}</td>
                                    <td>{"Nombre"}</td>
                                    <td>{"Apellidos"}</td>
                                    <td>{element.precio}</td>
                                    <td><Button onClick={() => { clickHandlerDelete(element.id) }} variant="primary" type="submit">
                                        Eliminar
                                    </Button></td>
                                    <td> <Link to={"/client/" + element.id_cliente}><Button variant="primary" type="submit">
                                        Modificar
                                    </Button>
                                    </Link></td>
                                </tr>)}
                    </tbody>
                </Table>
            </div>
        </>
    );
}




export default SaleTable;