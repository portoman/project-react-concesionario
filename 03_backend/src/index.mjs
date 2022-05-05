import express from "express";


import { getAllCars, postCarController, getOneCarController ,putCarController} from "./controllers/tasksControllers.mjs";

const PATH_PREFIX = "/api"
const app = express();
try {
    const jsonParser = express.json();
    //app.use(requestLog);

    //app.post(PATH_PREFIX+"/users/", jsonParser, postUserController);

    app.get(PATH_PREFIX + "/allCoches/", getAllCars);
    app.post(PATH_PREFIX + "/car/", jsonParser, postCarController);
    app.get(PATH_PREFIX+"/car/:id", getOneCarController);
    app.put(PATH_PREFIX+"/car/", jsonParser, putCarController);
    //app.delete(PATH_PREFIX+"/task/", jsonParser, deleteTaskController);

    app.listen(process.env.PORT || 3000, () => {
        console.log("Express running...");
    });
} catch (err) {
    console.error(err);
}