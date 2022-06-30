
import { db } from "../index.mjs"

//Controlador para devolver todos los coches
export async function getAllCars(request, response) {
    try {
        const data = await db.query(
            `SELECT * FROM coches`)
        if (data.rowCount === 0) {
            response.sendStatus(404)
        } else {
            response.json(data.rows)
        }

    } catch (error) {
        console.error(error);
        response.sendStatus(500)
    }
}

//Controlador para devolver un coche
export async function getOneCarController(request, response) {
    const car = parseInt(request.params.id)
    try {
        const data = await db.query(
            `SELECT id_coche, matricula, modelo, marca, km, precio
        , foto, cilindrada, combustible, alquiler, oferta FROM coches WHERE id_coche=${car}`)
        if (data.rowCount === 0) {
            response.sendStatus(404)
        } else {
            response.json(data.rows)
        }
    } catch (error) {
        console.error(error);
        response.sendStatus(500)
    }
}


//Controlador para insertar un coche
export async function postCarController(request, response) {
    const { matricula, modelo, marca, km, precio
        , cilindrada, combustible, disponible, alquiler, oferta } = request.body;
    const foto = request.file.filename;
    try {
        const data = await db.query(
            `INSERT INTO coches(matricula, modelo, marca, km, precio
                , foto, cilindrada, combustible, disponible, alquiler, oferta) VALUES 
                ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`, [
            matricula, modelo, marca, km, precio,
            foto, cilindrada, combustible, disponible, alquiler, oferta])
        if (data.rowCount === 0) {
            response.sendStatus(404)
        } else {
            response.json(data.rows)
        }
    } catch (error) {
        console.error(error);
        response.sendStatus(500)
    }
}

//Controlador para modificar un coche
export async function putCarController(request, response) {
    const { id_coche, matricula, modelo, marca, km, precio
        , foto, cilindrada, combustible, disponible, alquiler, oferta } = request.body;

    try {
        const data = await db.query(
            `UPDATE coches SET matricula=$1,modelo=$2,marca=$3,
        km= $4,precio= $5,foto=$6,cilindrada=$7,
        combustible=$8,disponible=$9,alquiler=$10,oferta=$11 WHERE id_coche=12`,
        [matricula,modelo,marca,km,precio,foto,cilindrada,combustible,disponible,alquiler,oferta,id_coche])
        if (data.rowCount === 0) {
            response.sendStatus(404)
        } else {
            response.json(data.rows)
        }
    } catch (error) {
        console.error(error);
        response.sendStatus(500)
    }
}
/*
//Controlador para eliminar un coche
export function deleteCarController(request, response) {
    const { id_coche } = request.body;
    db.run(
        `DELETE FROM coches WHERE id_coche="${id_coche}"`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(200)
            }
        }
    )
}

//Controlador para devolver todos los clientes
export function getAllClients(request, response) {
    db.all(
        `SELECT * FROM clientes`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.json(data)
            }
        }
    )
}



//Controlador para insertar un cliente
export function postClientController(request, response) {
    const { DNI, nombre, apellidos, telefono, cpostal
        , ciudad } = request.body;
    db.run(
        `INSERT INTO clientes(DNI, nombre, apellidos, telefono, cpostal
            , ciudad) VALUES 
            ("${DNI}","${nombre}","${apellidos}",${telefono},${cpostal},
            "${ciudad}")`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}

//Controlador para devolver un cliente
export function getOneClientController(request, response) {
    const client = parseInt(request.params.id)
    db.all(
        `SELECT * FROM clientes WHERE id_cliente="${client}"`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.json(data)
            }
        }
    )
}

//Controlador para modificar un cliente
export function putClientController(request, response) {
    const { id_cliente, DNI, nombre, apellidos, telefono, cpostal
        , ciudad } = request.body;
    db.run(
        `UPDATE clientes SET DNI="${DNI}",nombre="${nombre}",apellidos="${apellidos}",
        telefono= ${telefono},cpostal= ${cpostal},ciudad="${ciudad}" WHERE id_cliente="${id_cliente} "`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}

//Controlador para eliminar un cliente
export function deleteClientController(request, response) {
    const { id_cliente } = request.body;
    db.run(
        `DELETE FROM clientes WHERE id_cliente="${id_cliente}"`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(200)
            }
        }
    )
}

//Controlador para insertar un formulario
export function postFormController(request, response) {
    const { nombre, apellidos, telefono, consulta } = request.body;
    db.run(
        `INSERT INTO formularios(nombre, apellidos, telefono, consulta) VALUES 
            ("${nombre}","${apellidos}",${telefono},"${consulta}")`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}

//Controlador para devolver todos los formularios
export function getAllForms(request, response) {
    db.all(
        `SELECT * FROM formularios`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.json(data)
            }
        }
    )
}

//Controlador para eliminar el formulario
export function deleteFormController(request, response) {
    const { id } = request.body;
    db.run(
        `DELETE FROM formularios WHERE id="${id}"`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(200)
            }
        }
    )
}

//Controlador para devolver todos las ventas
export function getAllSales(request, response) {
    db.all(
        `SELECT * FROM ventas`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.json(data)
            }
        }
    )
}


//Controlador para insertar una venta
export function postSaleController(request, response) {
    const { fecha, id_coche, id_cliente, precio } = request.body;
    db.run(
        `INSERT INTO ventas(fecha, id_coche, id_cliente, precio) VALUES 
            ("${fecha}","${id_coche}","${id_cliente}",${precio})`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}

//Controlador para modificar un venta
export function putSaleController(request, response) {
    const { id, fecha, id_coche, id_cliente, precio } = request.body;
    db.run(
        `UPDATE ventas SET fecha="${fecha}",id_coche="${id_coche}",id_cliente="${id_cliente}",
        precio= ${precio} WHERE id="${id} "`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}
//Controlador para eliminar una venta
export function deleteSaleController(request, response) {
    const { id } = request.body;
    db.run(
        `DELETE FROM ventas WHERE id="${id}"`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(200)
            }
        }
    )
}

//Controlador para devolver todos los alquileres
export function getAllRents(request, response) {
    db.all(
        `SELECT * FROM alquileres`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.json(data)
            }
        }
    )
}

//Controlador para insertar un alquiler
export function postRentController(request, response) {
    const { fecha_entrega, fecha_devolucion, id_coche, id_cliente, precio } = request.body;
    db.run(
        `INSERT INTO alquileres(fecha_entrega,fecha_devolucion,id_coche, id_cliente, precio) VALUES 
            ("${fecha_entrega}","${fecha_devolucion}","${id_coche}","${id_cliente}",${precio})`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}

//Controlador para modificar un alquiler
export function putRentController(request, response) {
    const { id, fecha_entrega, fecha_devolucion, id_coche, id_cliente, precio } = request.body;
    db.run(
        `UPDATE alquileres SET fecha_entrega="${fecha_entrega}",fecha_devolucion="${fecha_devolucion}",id_coche="${id_coche}",id_cliente="${id_cliente}",
        precio= ${precio} WHERE id="${id} "`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}
//Controlador para eliminar un alquiler
export function deleteRentController(request, response) {
    const { id } = request.body;
    db.run(
        `DELETE FROM alquileres WHERE id="${id}"`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(200)
            }
        }
    )
}
*/