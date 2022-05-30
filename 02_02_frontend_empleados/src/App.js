import './App.css';
import { useContext, useEffect } from "react"
import { Context } from './SharedState';
import { get } from "./aux_api";
import NavBar from './components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import CarTable from './components/CarTable/CarTable';


function App() {

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
      <h1>Concesionario Vioño</h1>
      <NavBar />
      <CarTable/>
    </>
  );
}

export default App;
