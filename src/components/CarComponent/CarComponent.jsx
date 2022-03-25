import { useEffect, useState, useRef } from 'react';

function CarComponent({ vehiculo }) {

    return (
        <div className="carousel-item {vehiculo.portada ? 'active' : ''}">
                      <div className="card bg-dark text-white">
                        <img src="${urlImg}" class="card-img" alt="..."/>
                        <div className="card-img-overlay">
                          <h5 className="card-title">{vehiculo.marca}+{vehiculo.modelo}</h5>
                          <p className="card-text">{vehiculo.precio}</p>
                          <p className="card-text">{vehiculo.km}</p>
                        </div>
                      </div>
                    </div>

    );
}

export default CarComponent;