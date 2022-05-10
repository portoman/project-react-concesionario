import { useEffect, useState, useRef } from 'react';
import './CarCarrousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { Context } from "../../SharedState"

function CarCarrousel({ vehiculos }) {

    const { state } = useContext(Context);

    let [coches, setCoches] = useState([]);

    useEffect(
        () => {
            getCars()
        },

        [state]
    )
    let contador = 0

    function getCars() {
        setCoches(vehiculos.map(
            (element) =>
                <Carousel.Item key={contador++}>
                    <Link to={"/vehiculo/" + element.id_coche}>
                        <img
                            className="d-block w-100"
                            src={"http://127.0.0.1:5500/02_frontend/src/img/" + element.foto}
                            alt="First slide"
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3>{element.marca}</h3>
                        <p>{element.precio}</p>
                    </Carousel.Caption>
                </Carousel.Item>
        ))
    }


    return (
        <>
            <Carousel className="carusel">
                {coches}
            </Carousel>
        </>
    );
}


export default CarCarrousel;