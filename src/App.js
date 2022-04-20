import { useEffect, useState, useRef } from 'react';
import CarCarrousel from './components/CarCarrousel/CarCarrousel';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import IndividualPage from './components/IndividualPage/IndividualPage';
import viewCarCarrousel from './views/viewCarCarrousel';
import CarCarrousels from './components/CarCarrousels/CarCarrousels';



function App() {

  const ruta = "http://127.0.0.1:5500/project-react/src/img/";

  const [vehiculosArray, setVehiculosArray] = useState([
    {
      marca: "Opel",
      modelo: "Corsa",
      precio: "12.900 €",
      km: "5000 km",
      img: ruta + "opelAstra.jpg",
      venta: true
    },
    {
      marca: "Ford",
      modelo: "Mondeo",
      precio: "15.900 €",
      km: "8500 km",
      img: ruta + "fordMondeo.jpg",
      venta: true
    },
    {
      marca: "Peugeot",
      modelo: "408",
      precio: "8.900 €",
      km: "2500 km",
      img: ruta + "peugeotPartner.jpg",
      venta: true
    },
    {
      marca: "Peugeot",
      modelo: "Partner",
      precio: "8.900 €",
      km: "2500 km",
      img: ruta + "peugeotPartner.jpg",
      venta: false
    }
    ,
    {
      marca: "Nissan",
      modelo: "Qashqai",
      precio: "10.900 €",
      km: "5500 km",
      img: ruta + "nissanQashqai.jpg",
      venta: true
    },
    {
      marca: "Peugeot",
      modelo: "2008",
      precio: "12.900 €",
      km: "1500 km",
      img: ruta + "peugeot2008.jpg",
      venta: false
    },
    {
      marca: "Seat",
      modelo: "Ibiza",
      precio: "5.900 €",
      km: "2500 km",
      img: ruta + "seatIbiza.jpg",
      venta: false
    },
    {
      marca: "Seat",
      modelo: "Arona",
      precio: "5.900 €",
      km: "2500 km",
      img: ruta + "seatIbiza.jpg",
      venta: false
    },
    {
      marca: "VolksWagen",
      modelo: "Polo",
      precio: "7.900 €",
      km: "10500 km",
      img: ruta + "vwPolo.jpg",
      venta: false
    }
  ]);

  const vistaInicial = viewCarCarrousel(vehiculosArray);

  /* useState para gestionar las vistas, que la inicio con el Carrousel que es lo que inicialmente
  quiero mostrar*/
  const [currentView, setCurrentView] = useState(vistaInicial);



  return (
    <>
      <h1>Concesionario Vioño</h1>
      <NavBar vehiculos={vehiculosArray} />
      <CarCarrousels vehiculos={vehiculosArray} />
      <IndividualPage vehiculo={vehiculosArray[1]} />
    </>

  );
}

export default App;
