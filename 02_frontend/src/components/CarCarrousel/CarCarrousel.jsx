import { useEffect, useState, useRef } from 'react';
import './CarCarrousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { Context } from "../../SharedState"
import { get } from "../../aux_api";

function CarCarrousel() {

    const { state } = useContext(Context);

    let [ coches, setCoches ] = useState([]);
    const [timer, setTimer] = useState(null);

     /*
    useEffect
    */
    useEffect(
        () => {
            getCars()  
        },
 
        [state]
    )
    let contador = 0

    function getCars() {
        setCoches(state.map(
                (element) =>
            <Carousel.Item key={contador++}>
                <Link to={"/vehiculo/"+element.id_coche }>
                    <img
                        className="d-block w-100"
                        src={"http://127.0.0.1:5500/02_frontend/src/img/"+element.foto}
                        alt="First slide"
                    />
                </Link>
                <Carousel.Caption>
                    <h3>{element.marca}</h3>
                    <p>{element.precio}</p>
                </Carousel.Caption>
            </Carousel.Item>
            ))
        //)
    }
    /*
    TODO: ligaremos el Link con la imagen correcta a traves del id del
    coche de la base de datos. Ejemplo: coche.id
    */
    


    return (
        <>
            <Carousel className="carusel">
                {coches}
            </Carousel>
        </>
    );
}


export default CarCarrousel;