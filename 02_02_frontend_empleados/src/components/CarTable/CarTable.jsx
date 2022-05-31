import { useEffect, useState, useRef, useContext } from 'react';
import Table from 'react-bootstrap/Table'
import { Context } from "../../SharedState"
import Button from 'react-bootstrap/Button'
import { deletee, post } from "../../aux_api";

function CarTable() {

    const { state } = useContext(Context);
    
    function unoSiCeroNo(numero) {
        let texto = "";
        if (numero == 1) {
            texto = "Sí"
        } else {
            texto = "No"
        }
        return texto;
    }

    function alquilerVenta(numero) {
        let texto = "";
        if (numero == 1) {
            texto = "Alquiler"
        } else {
            texto = "Venta"
        }
        return texto;
    }

    async function clickHandler(id_coche) {
        let data = JSON.stringify({ id_coche });
        await deletee("http://localhost:3000/api" + "/car", data);
    }


    return (

        <>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Matrícula</th>
                            <th>Modelo</th>
                            <th>Marca</th>
                            <th>Km</th>
                            <th>Precio</th>
                            <th>Cilindrada</th>
                            <th>Disponible</th>
                            <th>Alquiler</th>
                            <th>Oferta</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {state.map(
                    (element, index) =>
                    <tr key={index}>
                    <td>{index}</td>
                    <td>{element.matricula}</td>
                    <td>{element.modelo}</td>
                    <td>{element.marca}</td>
                    <td>{element.km}</td>
                    <td>{element.precio}</td>
                    <td>{element.cilindrada}</td>
                    <td>{unoSiCeroNo(element.disponible)}</td>
                    <td>{alquilerVenta(element.alquiler)}</td>
                    <td>{unoSiCeroNo(element.oferta)}</td>
                    <td><Button onClick={() => { clickHandler(element.id_coche) }} variant="primary" type="submit">
                        Eliminar
                    </Button></td>
                    </tr>)}
                    </tbody>
                </Table>
            </div>
        </>
    );
}




export default CarTable;