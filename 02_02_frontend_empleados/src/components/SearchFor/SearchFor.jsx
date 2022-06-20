import { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import { Context } from "../../SharedState";
import Button from "react-bootstrap/Button";
import { apiDelete } from "../../aux_api";
import { Link } from "react-router-dom";
import {
  takeMatricula,
  takeModelo,
  takeMarca,
  takeDNI,
  takeNombre,
  takeApellidos,
} from "../../local/functions";
import { URL } from "../../defines";
import Stack from "react-bootstrap/Stack";
import Form from 'react-bootstrap/Form';

function SearchFor() {
  const { states, actions } = useContext(Context);

  const [value, setValue] = useState("id_cliente");
  const [valor, setValor] = useState("");
  const [client, setClient] = useState([{}]);

  async function clickHandlerDelete(id_cliente) {
    let data = JSON.stringify({ id_cliente });
    await apiDelete(URL + "/client", data);
    actions.getAllClients();
  }

  async function clickHandlerSearchFor(value, datos, valor) {
    if (!isNaN(valor)) {
      if (value === "id_cliente" || value === "telefono" || value === "cpostal") {
        let valorNumero = Number(valor);
        setClient(datos.filter(element => element[value] === valorNumero));
      }
    } else {
      setClient(datos.filter(element => element[value] === valor));
    }
  }

  return (
    <>
      <Stack gap={1}>
        <h2 className="mx-auto">Buscar cliente</h2>
        <Stack direction="horizontal" gap={2}>
          <div className="col-9">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>DNI</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Telefono</th>
                  <th>CP</th>
                  <th>Ciudad</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {client.map((element, index) => (
                  <tr>
                    <td>{element.id_cliente}</td>
                    <td>{element.DNI}</td>
                    <td>{element.nombre}</td>
                    <td>{element.apellidos}</td>
                    <td>{element.telefono}</td>
                    <td>{element.cpostal}</td>
                    <td>{element.ciudad}</td>
                    <td>
                      <Button
                        onClick={() => {
                          clickHandlerDelete(element.id_cliente);
                        }}
                        variant="primary"
                        type="submit"
                      >
                        Eliminar
                      </Button>
                    </td>
                    <td>
                      {" "}
                      <Link to={"/client/" + element.id_cliente}>
                        <Button variant="primary" type="submit">
                          Modificar
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <Form>
            <Stack direction="horizontal" gap={2}>
              <Form.Select aria-label="Default select example" value={value} onChange={(event) => setValue(event.target.value)} >
                <option value="id_cliente">ID</option>
                <option value="DNI">DNI</option>
                <option value="nombre">Nombre</option>
                <option value="apellidos">Apellidos</option>
                <option value="telefono">Teléfono</option>
                <option value="cpostal">CP</option>
                <option value="ciudad">Ciudad</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="id" onChange={(event) => setValor(event.target.value)} />
              </Form.Group>
              <Button
                onClick={() => {
                  clickHandlerSearchFor(value, states.clients, valor);
                }}
                variant="primary"
                type="button"
              >
                Buscar
              </Button>
            </Stack>
          </Form>
        </Stack>
      </Stack>
      <Stack gap={1}>
        <h2 className="mx-auto">Buscar vehículos</h2>
        <Stack direction="horizontal" gap={2}>
          <div className="col-9">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>DNI</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Telefono</th>
                  <th>CP</th>
                  <th>Ciudad</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {client.map((element, index) => (
                  <tr>
                    <td>{element.id_cliente}</td>
                    <td>{element.DNI}</td>
                    <td>{element.nombre}</td>
                    <td>{element.apellidos}</td>
                    <td>{element.telefono}</td>
                    <td>{element.cpostal}</td>
                    <td>{element.ciudad}</td>
                    <td>
                      <Button
                        onClick={() => {
                          clickHandlerDelete(element.id_cliente);
                        }}
                        variant="primary"
                        type="submit"
                      >
                        Eliminar
                      </Button>
                    </td>
                    <td>
                      {" "}
                      <Link to={"/client/" + element.id_cliente}>
                        <Button variant="primary" type="submit">
                          Modificar
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <Form>
            <Stack direction="horizontal" gap={2}>
              <Form.Select aria-label="Default select example" value={value} onChange={(event) => setValue(event.target.value)} >
                <option value="id_cliente">ID</option>
                <option value="DNI">DNI</option>
                <option value="nombre">Nombre</option>
                <option value="apellidos">Apellidos</option>
                <option value="telefono">Teléfono</option>
                <option value="cpostal">CP</option>
                <option value="ciudad">Ciudad</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="id" onChange={(event) => setValor(event.target.value)} />
              </Form.Group>
              <Button
                onClick={() => {
                  clickHandlerSearchFor(value, states.clients, valor);
                }}
                variant="primary"
                type="button"
              >
                Buscar
              </Button>
            </Stack>
          </Form>
        </Stack>
      </Stack>
    </>
  );
}

export default SearchFor;
