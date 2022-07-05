import './App.css';
import NavBar from './components/NavBar/NavBar';
import IndividualPage from './components/IndividualPage/IndividualPage';
import CarCarrousels from './components/CarCarrousels/CarCarrousels';
import MainForm from './components/MainForm/MainForm';
import { Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn'
import { useContext, useEffect } from "react"
import { Context } from "./SharedState"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function App() {

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
        <a href="/backoffice/"><Button className="ms-auto">Empleados</Button></a>
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
