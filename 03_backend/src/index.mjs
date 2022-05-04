import express from "express";


import { postUserController } from "./controllers/usersControllers.mjs";
import { getAllCars, getOneTaskController, getAllTasksController, postTaskController, putTaskController } from "./controllers/tasksControllers.mjs";

const PATH_PREFIX = "/api/"
const app = express();
try {
    const jsonParser = express.json();
    app.use(requestLog);

    //app.post(PATH_PREFIX+"/users/", jsonParser, postUserController);

    app.get(PATH_PREFIX+"/allCoches/", getAllCars);

    app.get(PATH_PREFIX+"/tasks/:id", getOneTaskController);

    
    app.post(PATH_PREFIX+"/task/", jsonParser, postTaskController);
    app.put(PATH_PREFIX+"/task/", jsonParser, putTaskController);
    app.delete(PATH_PREFIX+"/task/", jsonParser, deleteTaskController);

    app.listen(process.env.PORT || 3000,()=>{
        console.log("Express running...");
    });
} catch (err) {
    console.error(err);
}