import express from "express";

import {
  getAllCars,
  postCarController,
  getOneCarController,
  putCarController,
  deleteCarController,
  getAllClients,
  postClientController,
  getOneClientController,
  putClientController,
  deleteClientController,
  postFormController,
  getAllForms,
  getAllSales,
  postSaleController,
  putSaleController,
  deleteSaleController,
  getAllRents,
  postRentController,
  putRentController,
  deleteRentController,
  deleteFormController,
} from "./controllers/Controllers.mjs";

const PATH_PREFIX = "/api";
const app = express();
try {
  const jsonParser = express.json();
  //app.use(requestLog);
  //app.post(PATH_PREFIX+"/users/", jsonParser, postUserController);

  //Coches
  app.get(PATH_PREFIX + "/allCoches/", getAllCars);
  app.post(PATH_PREFIX + "/car/", jsonParser, postCarController);
  app.get(PATH_PREFIX + "/car/:id", getOneCarController);
  app.put(PATH_PREFIX + "/car/", jsonParser, putCarController);
  app.delete(PATH_PREFIX + "/car/", jsonParser, deleteCarController);

  //Clientes
  app.get(PATH_PREFIX + "/allClients/", getAllClients);
  app.post(PATH_PREFIX + "/client/", jsonParser, postClientController);
  app.get(PATH_PREFIX + "/client/:id", getOneClientController);
  app.put(PATH_PREFIX + "/client/", jsonParser, putClientController);
  app.delete(PATH_PREFIX + "/client/", jsonParser, deleteClientController);

  //Formulario
  app.post(PATH_PREFIX + "/form/", jsonParser, postFormController);
  app.get(PATH_PREFIX + "/allForms/", getAllForms);
  app.delete(PATH_PREFIX + "/form/", jsonParser, deleteFormController);

  //Ventas
  app.get(PATH_PREFIX + "/allSales/", getAllSales);
  app.post(PATH_PREFIX + "/sale/", jsonParser, postSaleController);
  app.put(PATH_PREFIX + "/sale/", jsonParser, putSaleController);
  app.delete(PATH_PREFIX + "/sale/", jsonParser, deleteSaleController);

  //Alquileres
  app.get(PATH_PREFIX + "/allRents/", getAllRents);
  app.post(PATH_PREFIX + "/rent/", jsonParser, postRentController);
  app.put(PATH_PREFIX + "/rent/", jsonParser, putRentController);
  app.delete(PATH_PREFIX + "/rent/", jsonParser, deleteRentController);

  app.listen(process.env.PORT || 3000, () => {
    console.log("Express running...");
  });
} catch (err) {
  console.error(err);
}
