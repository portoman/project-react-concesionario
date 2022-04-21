import { useEffect, useState, useRef } from 'react';
import './CarCarrousel.css';
import Carousel from 'react-bootstrap/Carousel';
import '../../bootstrap-5.1.3-dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { Context } from "../../SharedState"

function CarCarrousel({ vehiculos }) {

    const { state } = useContext(Context);
    /*
    Constante que almacena un nuevo array con la lista de vehiculos a partir de un map
    */
    let contador = 0;
    const listCar = vehiculos.map(
        (element, index) =>
            <Carousel.Item key={contador++}>
                <Link to={"/vehiculo/" + index}>
                    <img
                        className="d-block w-100"
                        src={element.img}
                        alt="First slide"
                    />
                </Link>
                <Carousel.Caption>
                    <h3>{element.marca}</h3>
                    <p>{element.precio}</p>
                </Carousel.Caption>
            </Carousel.Item>

    );


    return (
        <>
            <Carousel className="carusel">
                {listCar}
            </Carousel>
        </>
    );
}


export default CarCarrousel;