import { useEffect, useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarComponent({ vehiculo }) {

  /*
  Version vehiculo Bootstrap
  <div className="carousel-item {vehiculo.portada ? 'active' : ''}">
                      <div className="card bg-dark text-white">
                        <img src="${urlImg}" className="card-img" alt="..."/>
                        <div className="card-img-overlay">
                          <h5 className="card-title">{vehiculo.marca}+{vehiculo.modelo}</h5>
                          <p className="card-text">{vehiculo.precio}</p>
                          <p className="card-text">{vehiculo.km}</p>
                        </div>
                      </div>
                    </div>
  */

                    
  return (
    <>
    
    <h2>{vehiculo.marca}</h2>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={vehiculo.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{vehiculo.marca}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </>

  );
}

export default CarComponent;