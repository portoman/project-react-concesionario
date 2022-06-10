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

function Sale() {

    const { states, actions } = useContext(Context);


    const [fecha, setFecha] = useState("");
    const [id_coche, setIdcoche] = useState("");
    const [id_cliente, setIdCliente] = useState("");
    const [precio, setPrecio] = useState("");

    function fechaInputChangeHandler(event) {
        setFecha(event.target.value)
    }
    function idCocheInputChangeHandler(event) {
        setIdcoche(event.target.value)
    }
    function idClienteChangeHandler(event) {
        setIdCliente(event.target.value)
    }
    function precioInputChangeHandler(event) {
        setPrecio(event.target.value)
    }

    async function clickHandler() {
        const data = JSON.stringify({ fecha, id_coche, id_cliente, precio });
        await post("http://localhost:3000/api" + "/sale", data);
        actions.getAllSales();
    }



    return (

        <>
            <h2 className="mx-auto">Venta</h2>
            <Container>
                <Form className="col-5 mx-auto">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control type="text" onChange={fechaInputChangeHandler} />
                                </Stack>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Id Coche</Form.Label>
                                    <Form.Control type="number" onChange={idCocheInputChangeHandler} />
                                </Stack>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Id Cliente</Form.Label>
                                    <Form.Control type="number" onChange={idClienteChangeHandler} />
                                </Stack>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Stack direction="horizontal" gap={2}>
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="number" onChange={precioInputChangeHandler} />
                                </Stack>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Stack>
                        <div className="ms-auto">
                            <Link to="/carTable"><Button onClick={clickHandler} variant="primary" type="submit">
                                Registrar
                            </Button></Link>
                        </div>
                    </Stack>
                </Form>
            </Container>
        </>
    );
}

export default Sale;