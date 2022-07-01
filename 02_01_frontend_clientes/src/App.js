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
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function App() {

  //const ruta = "http://127.0.0.1:5500/02_01_frontend_clientes/src/img/";

  const { states, actions } = useContext(Context);

  useEffect(
    () => {
      actions.getAllCars()
    },
    []
  )


  return (
    <>
      <Stack direction="horizontal">
        <h1 className="mx-auto"><Link to={"/"}>Concesionario Vioño</Link></h1>
        <Link to={"/backoffice/"}><Button className="ms-auto">Empleados</Button></Link>
      </Stack>
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
