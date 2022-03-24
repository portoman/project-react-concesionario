import { useEffect, useState, useRef } from 'react';
import CarClient from './components/CarCarrousel/CarCarrousel';



function App() {

  const [vehiculosArray, setVehiculosArray] = useState([
    {
      marca: "Opel",
      modelo: "Corsa",
      precio: "12.900 €",
      km: "5000 km",
      img: "opelAstra.jpg",
      portada: true,
      venta: true
  },
  {
      marca: "Ford",
      modelo: "Mondeo",
      precio: "15.900 €",
      km: "8500 km",
      img: "fordMondeo.jpg",
      portada: false,
      venta: true
  },
  {
      marca: "Ford",
      modelo: "Mondeo",
      precio: "15.900 €",
      km: "8500 km",
      img: "fordMondeo.jpg",
      portada: false,
      venta: true
  }
  ]);

  return (
    <>
    <CarClient vehiculos={vehiculosArray}/>
    </>
   
  );
}

export default App;
