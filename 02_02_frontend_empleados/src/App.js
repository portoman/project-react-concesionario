import './App.css';
import { useContext, useEffect } from "react"
import { Context } from './SharedState';
import { get } from "./aux_api";
import NavBar from './components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import CarTable from './components/CarTable/CarTable';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ModificateCar from './components/ModificateCar/ModificateCar';
import Uploads from './views/Uploads';
import ClientTable from './components/ClientTable/ClientTable';
import ModificateClient from './components/ModificateClient/ModificateClient'

function App() {

  const { states, actions } = useContext(Context);

  useEffect(
    () => {
      actions.getAllCars()
    },
    []
  )
  useEffect(
    () => {
      actions.getAllClients()
    },
    []
  )

  return (
    <>
      <h1>Concesionario Vioño</h1>
      <NavBar />
      <Routes>
        <Route path="/carTable" element={<CarTable />} />
        <Route path="/vehiculo/:id" element={<ModificateCar />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/clientTable" element={<ClientTable />} />
        <Route path="/client/:id" element={<ModificateClient />} />
      </Routes>
    </>
  );
}

export default App;
