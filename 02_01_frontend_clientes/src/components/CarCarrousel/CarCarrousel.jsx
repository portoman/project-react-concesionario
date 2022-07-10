import { useEffect, useState, useRef } from "react";
import "./CarCarrousel.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../SharedState";
import { PATH, host } from "../../defines";

function CarCarrousel({ vehiculos }) {
  const { states, actions } = useContext(Context);

  let [coches, setCoches] = useState([]);

  useEffect(() => {
    getCars();
  }, [states]);
  let contador = 0;

  function devolverAlquilerOVenta(valor) {
    let texto;
    if (valor === 1) {
      texto = "/ dia";
    }
    return texto;
  }

  function getCars() {
    setCoches(
      vehiculos.map((element) => (
        <Carousel.Item key={contador++}>
          <Link to={"/vehiculo/" + element.id_coche}>
            <img
              className="d-block w-100"
              src={host + PATH + element.foto}
              alt="First slide"
            />
          </Link>
          <Carousel.Caption>
            <h2>{element.marca}</h2>
            <h3>{element.modelo}</h3>
            <p>
              {element.precio} €{devolverAlquilerOVenta(element.alquiler)}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))
    );
  }

  return (
    <>
      <Carousel className="carusel mx-auto">{coches}</Carousel>
    </>
  );
}

export default CarCarrousel;
