import { Link } from 'react-router-dom';
import { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../../SharedState"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { post } from "../../aux_api";


function Uploads() {

    const { states, actions } = useContext(Context);


    const [matricula, setMatricula] = useState("");
    const [modelo, setModelo] = useState("");
    const [marca, setMarca] = useState("");
    const [km, setKm] = useState("");
    const [precio, setPrecio] = useState("");
    const [foto, setFoto] = useState("");
    const [cilindrada, setCilindrada] = useState("");
    const [combustible, setCombustible] = useState("");
    const [id_coche, setId_coche] = useState("");
    const [disponible, setDisponible] = useState(0);
    const [alquiler, setAlquiler] = useState(0);
    const [oferta, setOferta] = useState(0);

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
        const data = JSON.stringify({ id_coche, matricula, modelo, marca, km, precio, foto, cilindrada, combustible, disponible, alquiler, oferta });
        await post("http://localhost:3000/api" + "/car", data);
        actions.getAllCars();
    }



    return (

        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Matricula</Form.Label>
                    <Form.Control type="text" onChange={matriculaInputChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control type="text" onChange={modeloInputChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control type="text" onChange={marcaInputChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Km</Form.Label>
                    <Form.Control type="number" onChange={kmInputChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" onChange={precioInputChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Cilindrada</Form.Label>
                    <Form.Control type="text" onChange={cilindradaInputChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Disponible</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={disponibleInputChangeHandler} value="0" >
                        <option value="0" >No</option>
                        <option value="1">Sí</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alquiler</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={alquilerInputChangeHandler} value="0">
                        <option value="0" >Venta</option>
                        <option value="1">Alquiler</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail"  defaultValue="0">
                    <Form.Label>Oferta</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={ofertaInputChangeHandler} defaultValue="0">
                        <option value="0" >No</option>
                        <option value="1">Si</option>
                    </Form.Select>
                </Form.Group>
                <Link to="/carTable"><Button onClick={clickHandler} variant="primary" type="submit">
                    Registrar
                </Button></Link>
            </Form>

        </>
    );
}

export default Uploads;