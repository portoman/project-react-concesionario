import { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../../SharedState"

function IndividualPage({ vehiculos }) {

    const { state } = useContext(Context);

    //Variable para coger datos de la URL
    const parms = useParams();
    let numero = parseInt(parms.id);

    //Buscamos el coche en el state que coincida con el parametro de la url, para poder mostrarlo
    const coche = state.find(element => element.id_coche === numero);

    return (
        <>
            <h2>Marca: {coche.marca}</h2>
            <h2>Modelo: {coche.modelo}</h2>
            <h2>Precio: {coche.precio}</h2>
            <img src={"http://127.0.0.1:5500/02_frontend/src/img/" + coche.foto} />
        </>

    );
}

export default IndividualPage;