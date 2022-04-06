import { useEffect, useState, useRef } from 'react';


function IndividualPage({ vehiculo }) {


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