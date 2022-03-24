import { useEffect, useState, useRef } from 'react';

import CarComponent from '../CarComponent/CarComponent';

function CarCarrousel({ vehiculos }) {


    const componentCar = vehiculos.map(
        element => <div className="">
            <h2>{element.km}</h2>
            <h2>{element.modelo}</h2>
        </div>
    );

    return (
        <p>
            <div id="carouselVentas" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <div id="botonesVenta"></div>
                </div>
                <div class="carousel-inner">
                    <CarComponent vehiculo={vehiculos[0]} />
                    <CarComponent vehiculo={vehiculos[1]} />
                    <CarComponent vehiculo={vehiculos[2]} />
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
        </p>

    );
}

export default CarCarrousel;