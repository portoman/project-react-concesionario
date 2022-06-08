import './App.css';
import NavBar from './components/NavBar/NavBar';
import IndividualPage from './components/IndividualPage/IndividualPage';
import CarCarrousels from './components/CarCarrousels/CarCarrousels';
import MainForm from './components/MainForm/MainForm';
import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from "react"
import { Context } from "./SharedState"
import { get } from "./aux_api";
import { Link } from 'react-router-dom';
function App() {

  const ruta = "http://127.0.0.1:5500/02_01_frontend_clientes/src/img/";

  const { state, actions } = useContext(Context);

  useEffect(
    () => {
      getCars()
    },

    [state]
  )

  /*Llamada al fetch de get donde se incluyen los datos de todos los coches de la base
  de datos en el setState*/
  function getCars() {
    get("http://localhost:3000/api" + "/allCoches/").then(
      data => actions.setState(data)
    )
  }
  
  return (
    <>
      <Link to={"/"}><h1>Concesionario Vioño</h1></Link>
      <NavBar />
      <Routes>
        <Route path="/" element={<CarCarrousels />} />
        <Route path="/vehiculo/:id" element={<IndividualPage />} />
        <Route path="/mainform" element={<MainForm />} />
      </Routes>
    </>

  );
}

export default App;
