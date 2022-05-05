
import { db } from "../models/db.mjs"

//Controlador para devolver todos los coches
export function getAllCars(request, response) {
    db.all(
        `SELECT * FROM coches`,
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

//Controlador para devolver un coche
export function getOneCarController(request, response) {
    const car = parseInt(request.params.id)
    db.all(
        `SELECT id_coche, matricula, modelo, marca, km, precio
        , foto, cilindrada, combustible, alquiler, oferta FROM coches WHERE id_coche="${car}"`,
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


//Controlador para insertar un coche
export function postCarController(request, response) {
    const { matricula, modelo, marca, km, precio
        , foto, cilindrada, combustible, alquiler, oferta } = request.body;
    db.run(
        `INSERT INTO coches(matricula, modelo, marca, km, precio
            , foto, cilindrada, combustible, alquiler, oferta) VALUES 
            ("${matricula}","${modelo}","${marca}",${km},${precio},
            "${foto}","${cilindrada}","${combustible}","${alquiler}","${oferta}")`,
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

//Controlador para modificar una tarea
export function putTaskController(request, response) {
    const { id, description, done } = request.body;
    db.run(
        `UPDATE tasks SET description="${description}",
        done= ${done} WHERE id="${id} "`,
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
//Controlador para eliminar una tarea
export function deleteTaskController(request, response) {
    const { id } = request.body;
    db.run(
        `DELETE FROM tasks WHERE id="${id}"`,
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