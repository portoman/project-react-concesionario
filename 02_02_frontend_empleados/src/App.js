import './App.css';
import { useContext, useEffect } from "react"
import { Context } from './SharedState';
import { get } from "./aux_api";
import NavBar from './components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import CarTable from './components/CarTable/CarTable';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {

  const { state, actions } = useContext(Context);

  useEffect(
    () => {
      actions.getAllCars()
    },

    [state]
  )
  
  return (
    <>
      <h1>Concesionario Vioño</h1>
      <NavBar />
      <Routes>
        <Route path="/carTable" element={<CarTable />} />
      </Routes>
    </>
  );
}

export default App;
