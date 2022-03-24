import { useEffect, useState, useRef } from 'react';

function CarComponent({ vehiculo }) {

    return (
        <div className="carousel-item {vehiculo.portada ? 'active' : ''}">
                      <div class="card bg-dark text-white">
                        <img src="${urlImg}" class="card-img" alt="..."/>
                        <div className="card-img-overlay">
                          <h5 class="card-title">{vehiculo.marca}+{vehiculo.modelo}</h5>
                          <p class="card-text">{vehiculo.precio}</p>
                          <p class="card-text">{vehiculo.km}</p>
                        </div>
                      </div>
                    </div>

    );
}

export default CarComponent;