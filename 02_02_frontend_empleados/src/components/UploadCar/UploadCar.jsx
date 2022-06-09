import { Link } from 'react-router-dom';
import { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../../SharedState"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { post } from "../../aux_api";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

function UploadCar() {

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
    function fotoInputChangeHandler(event) {
        setFoto(event.target.value)
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
        <h2 className="mx-auto">Vehículo</h2>
            <Container>
                <Form className="col-5 mx-auto">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Matricula</Form.Label>
                                    <Form.Control type="text" onChange={matriculaInputChangeHandler} />
                                </Stack>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Modelo</Form.Label>
                                    <Form.Control type="text" onChange={modeloInputChangeHandler} />
                                </Stack>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Control type="text" onChange={marcaInputChangeHandler} />
                                </Stack>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Km</Form.Label>
                                    <Form.Control type="number" onChange={kmInputChangeHandler} />
                                </Stack>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="number" onChange={precioInputChangeHandler} />
                                </Stack>
                            </Form.Group>
                        </Col>
                        <Col>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Foto</Form.Label>
                                    <Form.Control type="text" onChange={fotoInputChangeHandler} />
                                </Stack>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Cilindrada</Form.Label>
                                    <Form.Control type="text" onChange={cilindradaInputChangeHandler} />
                                </Stack>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Disponible</Form.Label>
                                    <Form.Select aria-label="Default select example" onChange={disponibleInputChangeHandler} >
                                        <option value="0" >No</option>
                                        <option value="1">Sí</option>
                                    </Form.Select>
                                </Stack>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Alquiler</Form.Label>
                                    <Form.Select aria-label="Default select example" onChange={alquilerInputChangeHandler}>
                                        <option value="0" >Venta</option>
                                        <option value="1">Alquiler</option>
                                    </Form.Select>
                                </Stack>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail" defaultValue="0">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Oferta</Form.Label>
                                    <Form.Select aria-label="Default select example" onChange={ofertaInputChangeHandler} >
                                        <option value="0" >No</option>
                                        <option value="1">Si</option>
                                    </Form.Select>
                                </Stack>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Link to="/carTable"><Button onClick={clickHandler} variant="primary" type="submit">
                        Registrar
                    </Button></Link>
                </Form>
            </Container>
        </>
    );
}

export default UploadCar;