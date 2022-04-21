import { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../../SharedState"

function IndividualPage({vehiculo}) {


    //Variable para coger datos de la URL
    const parms = useParams();
    console.log(parms.id);
    



    return (
        <>
            <h2>Marca: {vehiculo.marca}</h2>
            <h2>Modelo: {vehiculo.modelo}</h2>
            <h2>Precio: {vehiculo.precio}</h2>
            <img src={vehiculo.img}/>
        </>

    );
}

export default IndividualPage;