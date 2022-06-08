import { Link } from 'react-router-dom';
import { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../../SharedState"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { modify } from "../../aux_api";


function ModificateCar() {

    const { states, actions } = useContext(Context);

    //Variable para coger datos de la URL
    const parms = useParams();
    let id_coche = parseInt(parms.id);

    //Buscamos el coche en el state que coincida con el parametro de la url, para poder mostrarlo
    const coche = states.cars.find(element => element.id_coche === id_coche);

    const [matricula, setMatricula] = useState("");
    const [modelo, setModelo] = useState("");
    const [marca, setMarca] = useState("");
    const [km, setKm] = useState("");
    const [precio, setPrecio] = useState("");
    const [foto, setFoto] = useState("");
    const [cilindrada, setCilindrada] = useState("");
    const [combustible, setCombustible] = useState("");
    const [id_cliente, setId_cliente] = useState("");
    const [disponible, setDisponible] = useState("");
    const [alquiler, setAlquiler] = useState("");
    const [oferta, setOferta] = useState("");

    function matriculaInputChangeHandler(event) {
        setMatricula(event.target.value)
    }
    function modeloInputChangeHandler(event) {
        setModelo(event.target.value)
    }
    function marcaInputChangeHandler(event) {
        setMarca(event.target.value)
    }
    function kmInputChangeHandler(event) {
        setKm(event.target.value)
    }
    function precioInputChangeHandler(event) {
        setPrecio(event.target.value)
    }
    function cilindradaInputChangeHandler(event) {
        setCilindrada(event.target.value)
    }
    function disponibleInputChangeHandler(event) {
        setDisponible(event.target.value)
    }
    function alquilerInputChangeHandler(event) {
        setAlquiler(event.target.value)
    }
    function ofertaInputChangeHandler(event) {
        setOferta(event.target.value)
    }

    async function clickHandler() {
        setFoto(coche.foto);
        setCombustible(coche.combustible);
        setId_cliente(coche.id_cliente);
        const data = JSON.stringify({ id_coche, matricula, modelo, marca, km, precio, foto, cilindrada, combustible, id_cliente, alquiler, oferta });
        await modify("http://localhost:3000/api" + "/car", data);
        actions.getAllCars();
    }

    function unoSiCeroNo(numero) {
        let texto = "";
        if (numero == 1) {
            texto = "Sí"
        } else {
            texto = "No"
        }
        return texto;
    }

    function alquilerVenta(numero) {
        let texto = "";
        if (numero == 1) {
            texto = "Alquiler"
        } else {
            texto = "Venta"
        }
        return texto;
    }

    return (

        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Matricula</Form.Label>
                    <Form.Control type="text" onChange={matriculaInputChangeHandler} placeholder={coche.matricula} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control type="text" onChange={modeloInputChangeHandler} placeholder={coche.modelo} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control type="text" onChange={marcaInputChangeHandler} placeholder={coche.marca} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Km</Form.Label>
                    <Form.Control type="number" onChange={kmInputChangeHandler} placeholder={coche.km} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" onChange={precioInputChangeHandler} placeholder={coche.precio} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Cilindrada</Form.Label>
                    <Form.Control type="text" onChange={cilindradaInputChangeHandler} placeholder={coche.cilindrada} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Disponible</Form.Label>
                    <Form.Control type="number" onChange={disponibleInputChangeHandler} placeholder={unoSiCeroNo(coche.disponible)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alquiler</Form.Label>
                    <Form.Control type="number" onChange={alquilerInputChangeHandler} placeholder={alquilerVenta(coche.alquiler)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Oferta</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={ofertaInputChangeHandler} defaultValue={coche.oferta}>
                        <option value="0" >No</option>
                        <option value="1">Si</option>
                    </Form.Select>
                </Form.Group>
                <Link to="/carTable"><Button onClick={clickHandler} variant="primary" type="submit">
                    Modificar
                </Button></Link>
            </Form>

        </>
    );
}





export default ModificateCar;