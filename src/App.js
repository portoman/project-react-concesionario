import { useEffect, useState, useRef } from 'react';
import CarCarrousel from './components/CarCarrousel/CarCarrousel';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import NavBar from './components/NavBar/NavBar';


function App() {

  const ruta="http://127.0.0.1:5500/project-react/src/img/";

  const [vehiculosArray, setVehiculosArray] = useState([
    {
      marca: "Opel",
      modelo: "Corsa",
      precio: "12.900 €",
      km: "5000 km",
      img: ruta+"opelAstra.jpg",
      portada: true,
      venta: true
  },
  {
      marca: "Ford",
      modelo: "Mondeo",
      precio: "15.900 €",
      km: "8500 km",
      img: ruta+"fordMondeo.jpg",
      portada: false,
      venta: true
  },
  {
    marca: "Peugeot",
    modelo: "Partner",
    precio: "8.900 €",
    km: "2500 km",
    img: ruta+"peugeotPartner.jpg",
    portada: false,
    venta: true
}
  ]);

  return (
    <>
    <h1>Concesionario Vioño</h1>
    <NavBar  vehiculos={vehiculosArray}/>
    <h3>Ofertas alquiler</h3>
    <CarCarrousel   vehiculos={vehiculosArray}/>
    </>
   
  );
}

export default App;
