import { useEffect, useState, useRef } from 'react';

import CarComponent from '../CarComponent/CarComponent';
import Carousel from 'react-bootstrap/Carousel';


function CarCarrousel({ vehiculos }) {

/*
Constante que almacena un nuevo array con la lista de vehiculos a partir de un map
*/
    const listCar = vehiculos.map(
        element => 
            <CarComponent vehiculo={element} />
        
    );

    return (
        <>
            <div id="carouselVentas" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <div id="botonesVenta"></div>
                </div>
                <div class="carousel-inner">                    
                    {listCar}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselVentas"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselVentas"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    );
}

export default CarCarrousel;