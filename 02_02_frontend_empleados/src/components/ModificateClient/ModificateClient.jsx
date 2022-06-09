import { Link } from 'react-router-dom';
import { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../../SharedState"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { modify } from "../../aux_api";


function ModificateClient() {

    const { states, actions } = useContext(Context);

    //Variable para coger datos de la URL
    const parms = useParams();
    let id_client = parseInt(parms.id);

    //Buscamos el cliente en el state que coincida con el parametro de la url, para poder mostrarlo
    const client = states.clients.find(element => element.id_cliente === id_client);

    const [id_cliente, setId_cliente] = useState(client.id_cliente);
    const [DNI, setDNI] = useState(client.DNI);
    const [nombre, setNombre] = useState(client.nombre);
    const [apellidos, setApellidos] = useState(client.apellidos);
    const [telefono, setTelefono] = useState(client.telefono);
    const [cpostal, setCpostal] = useState(client.cpostal);
    const [ciudad, setCiudad] = useState(client.ciudad);

    function DNIInputChangeHandler(event) {
        setDNI(event.target.value)
    }
    function nombreInputChangeHandler(event) {
        setNombre(event.target.value)
    }
    function apellidosInputChangeHandler(event) {
        setApellidos(event.target.value)
    }
    function telefonoInputChangeHandler(event) {
        setTelefono(event.target.value)
    }
    function cpostalInputChangeHandler(event) {
        setCpostal(event.target.value)
    }
    function ciudadInputChangeHandler(event) {
        setCiudad(event.target.value)
    }

    async function clickHandler() {
        setId_cliente(client.id_cliente);
        const data = JSON.stringify({ id_cliente, DNI, nombre, apellidos, telefono, cpostal, ciudad });
        await modify("http://localhost:3000/api" + "/client", data);
        actions.getAllClients();
    }


    return (

        <>
            <Form className="col-3 mx-auto">
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" onChange={DNIInputChangeHandler} defaultValue={client.DNI} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" onChange={nombreInputChangeHandler} defaultValue={client.nombre} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" onChange={apellidosInputChangeHandler} defaultValue={client.apellidos} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="number" onChange={telefonoInputChangeHandler} defaultValue={client.telefono} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Código Postal</Form.Label>
                    <Form.Control type="number" onChange={cpostalInputChangeHandler} defaultValue={client.cpostal} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" onChange={ciudadInputChangeHandler} defaultValue={client.ciudad} />
                </Form.Group>
                <Link to="/clientTable"><Button onClick={clickHandler} variant="primary" type="submit">
                    Modificar
                </Button></Link>
            </Form>
        </>
    );
}

export default ModificateClient;