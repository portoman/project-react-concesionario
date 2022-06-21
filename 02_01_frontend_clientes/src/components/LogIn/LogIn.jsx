import { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../../SharedState"
import { PATH } from '../../defines';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Login() {
    const { actions } = useContext(Context)

    function loginHandler(event) {
        event.preventDefault()
        actions.getAPIToken(
            event.target.elements.username.value,
            event.target.elements.password.value,
        )
    }

    return (
        <>
            <Form className="col-3 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Stack direction="horizontal" gap={2}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="username" />
                    </Stack>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Stack direction="horizontal" gap={2}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" id="" />
                    </Stack>
                </Form.Group>

                <Stack>
                    <div className="ms-auto">
                        <Button onClick={loginHandler} variant="primary" type="submit">
                            Registrar
                        </Button>
                    </div>
                </Stack>
            </Form>
        </>

    )
}

export default Login;