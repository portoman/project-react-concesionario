import { useEffect, useState, useRef } from 'react';
import CarCarrousel from './components/CarCarrousel/CarCarrousel';



function App() {

  const [vehiculosArray, setVehiculosArray] = useState([
    {
      marca: "Opel",
      modelo: "Corsa",
      precio: "12.900 €",
      km: "5000 km",
      img: "https://picsum.photos/499/300",
      portada: true,
      venta: true
  },
  {
      marca: "Ford",
      modelo: "Mondeo",
      precio: "15.900 €",
      km: "8500 km",
      img: "https://picsum.photos/500/300",
      portada: false,
      venta: true
  },
  {
    marca: "Peugeot",
    modelo: "Partner",
    precio: "8.900 €",
    km: "2500 km",
    img: "https://picsum.photos/501/300",
    portada: false,
    venta: true
}
  ]);

  return (
    <>
    <CarCarrousel vehiculos={vehiculosArray}/>
    </>
   
  );
}

export default App;
