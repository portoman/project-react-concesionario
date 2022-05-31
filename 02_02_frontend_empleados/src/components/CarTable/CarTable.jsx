import { useEffect, useState, useRef, useContext } from 'react';
import Table from 'react-bootstrap/Table'
import { Context } from "../../SharedState"

function CarTable() {

    const { state } = useContext(Context);

    function disponible(numero){
        let texto="";
        if(numero==1){
            texto="Sí"
        }else{
            texto="No"
        }
        return texto;
    }

    function alquilerVenta(numero){
        let texto="";
        if(numero==1){
            texto="Alquiler"
        }else{
            texto="Venta"
        }
        return texto;
    }

    const vehiculos = state.map(
        (element, index) =>

            <tr>
                <td>{index}</td>
                <td>{element.matricula}</td>
                <td>{element.modelo}</td>
                <td>{element.marca}</td>
                <td>{element.km}</td>
                <td>{element.precio}</td>
                <td>{element.cilindrada}</td>
                <td>{disponible(element.disponible)}</td>
                <td>{alquilerVenta(element.alquiler)}</td>
                <td>{element.oferta}</td>
            </tr>
    );

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
                        </tr>
                    </thead>
                    <tbody>
                        {vehiculos}                          
                    </tbody>
                </Table>
            </div>
        </>
    );
}




export default CarTable;