import { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../../SharedState"

function IndividualPage({ vehiculos }) {


    //Variable para coger datos de la URL
    const parms = useParams();

    let numeroString = parms.id;
    let venta = parms.venta;
    console.log(venta);
    let numero = parseInt(numeroString);

    const vehiculoElegido=vehiculos[numero];

    return (
        <>
            <h2>Marca: {vehiculoElegido.marca}</h2>
            <h2>Modelo: {vehiculoElegido.modelo}</h2>
            <h2>Precio: {vehiculoElegido.precio}</h2>
            <img src={vehiculoElegido.img} />
        </>

    );
}

export default IndividualPage;