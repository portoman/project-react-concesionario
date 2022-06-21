import './App.css';
import NavBar from './components/NavBar/NavBar';
import IndividualPage from './components/IndividualPage/IndividualPage';
import CarCarrousels from './components/CarCarrousels/CarCarrousels';
import MainForm from './components/MainForm/MainForm';
import LogIn from './components/LogIn/LogIn'
import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from "react"
import { Context } from "./SharedState"
import { get } from "./aux_api";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function App() {

  const ruta = "http://127.0.0.1:5500/02_01_frontend_clientes/src/img/";

  const { state, actions } = useContext(Context);

  useEffect(
    () => {
      getCars()
    },
    []
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
      <Stack direction="horizontal">
        <h1 className="mx-auto"><Link to={"/"}>Concesionario Vioño</Link></h1>
        <Link to={"/login"}><Button className="ms-auto">Usuarios</Button></Link>
      </Stack>
      <NavBar />
      <Routes>
        <Route path="/" element={<CarCarrousels />} />
        <Route path="/vehiculo/:id" element={<IndividualPage />} />
        <Route path="/mainform" element={<MainForm />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>

  );
}

export default App;
