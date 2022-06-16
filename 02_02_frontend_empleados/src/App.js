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
import ModificateClient from './components/ModificateClient/ModificateClient';
import Sale from './components/Sale/Sale';
import SaleTable from './components/SaleTable/SaleTable';
import ModificateSale from './components/ModificateSale/ModificateSale';
import Rent from './components/Rent/Rent';
import RentTable from './components/RentTable/RentTable';
import Stack from "react-bootstrap/Stack";


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
  useEffect(
    () => {
      actions.getAllSales()
    },
    []
  )
  useEffect(
    () => {
      actions.getAllRents()
    },
    []
  )

  return (
    <>
    <Stack  gap={1}>
      <h1 className="mx-auto">Concesionario Vioño</h1>
      <NavBar />
      <Routes>
        <Route path="/carTable" element={<CarTable />} />
        <Route path="/vehiculo/:id" element={<ModificateCar />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/clientTable" element={<ClientTable />} />
        <Route path="/client/:id" element={<ModificateClient />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/saleTable" element={<SaleTable />} />
        <Route path="/sale/:id" element={<ModificateSale />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/rentTable" element={<RentTable />} />
      </Routes>
    </Stack>
    </>
  );
}

export default App;
