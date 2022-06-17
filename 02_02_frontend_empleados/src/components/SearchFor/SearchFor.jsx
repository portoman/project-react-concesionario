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
  const [client, setClient] = useState(states.clients[0]);

  async function clickHandlerDelete(id_cliente) {
    let data = JSON.stringify({ id_cliente });
    await apiDelete(URL + "/client", data);
    actions.getAllClients();
  }

  async function clickHandlerSearchFor(value, clientes, valor) {
    let valor2 = value;
    let valorNumero = Number(valor);
    let prueba = clientes.filter(element => element[valor2] === valorNumero);
    setClient(clientes.filter(element => element[valor2] === valorNumero));
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
                {
                  <tr>
                    <td>{client.id_cliente}</td>
                    <td>{client.DNI}</td>
                    <td>{client.nombre}</td>
                    <td>{client.apellidos}</td>
                    <td>{client.telefono}</td>
                    <td>{client.cpostal}</td>
                    <td>{client.ciudad}</td>
                    <td>
                      <Button
                        onClick={() => {
                          clickHandlerDelete(client.id_cliente);
                        }}
                        variant="primary"
                        type="submit"
                      >
                        Eliminar
                      </Button>
                    </td>
                    <td>
                      {" "}
                      <Link to={"/client/" + client.id_cliente}>
                        <Button variant="primary" type="submit">
                          Modificar
                        </Button>
                      </Link>
                    </td>
                  </tr>
                }
              </tbody>
            </Table>
          </div>
          <Form>
            <Stack direction="horizontal" gap={2}>
              <Form.Select aria-label="Default select example" value={value} onChange={(event) => setValue(event.target.value)} >
                <option value="id_cliente">id_cliente</option>
                <option value="DNI">DNI</option>
                <option value="nombre">nombre</option>
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
