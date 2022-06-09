import express from "express";


import { getAllCars, postCarController, getOneCarController ,putCarController,
    deleteCarController, getAllClients, postClientController, getOneClientController,
    putClientController, postFormController, getAllForms} from "./controllers/Controllers.mjs";

const PATH_PREFIX = "/api"
const app = express();
try {
    const jsonParser = express.json();
    //app.use(requestLog);
    //app.post(PATH_PREFIX+"/users/", jsonParser, postUserController);

    //Coches
    app.get(PATH_PREFIX + "/allCoches/", getAllCars);
    app.post(PATH_PREFIX + "/car/", jsonParser, postCarController);
    app.get(PATH_PREFIX+"/car/:id", getOneCarController);
    app.put(PATH_PREFIX+"/car/", jsonParser, putCarController);
    app.delete(PATH_PREFIX+"/car/", jsonParser, deleteCarController);

    //Clientes
    app.get(PATH_PREFIX + "/allClients/", getAllClients);
    app.post(PATH_PREFIX + "/client/", jsonParser, postClientController);
    app.get(PATH_PREFIX+"/client/:id", getOneClientController);
    app.put(PATH_PREFIX+"/client/", jsonParser, putClientController);
    //app.delete(PATH_PREFIX+"/client/", jsonParser, deleteClientController);

    //Formulario
    app.post(PATH_PREFIX + "/form/", jsonParser, postFormController);
    app.get(PATH_PREFIX + "/allForms/", getAllForms);

    app.listen(process.env.PORT || 3000, () => {
        console.log("Express running...");
    });
} catch (err) {
    console.error(err);
}