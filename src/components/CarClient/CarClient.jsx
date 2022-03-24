import { useEffect, useState, useRef } from 'react';

function CarClient({vehiculos}) {

    const liArray = vehiculos.map(
        element => <h5>{element.marca}+{element.modelo}</h5>
    )
    return (
        <p>
            {liArray}
        </p>
        
    );
}

export default CarClient;