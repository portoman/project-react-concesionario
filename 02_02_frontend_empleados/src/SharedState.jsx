import { get } from "./aux_api";
import { useState, createContext, useEffect } from "react";
export const Context = createContext();


/*Componente que se comparte en toda la aplicación. 
Hacemos un get de todos los coches para compartir en todos los componentes
*/
export function ContextProvider({ children }) {

    const [cars, setCars] = useState([]);
    const [clients, setClients]=useState([]);

    const context = {
        states: {cars,clients},
        actions: {
            getAllCars: function () {
                get("http://localhost:3000/api" + "/allCoches/").then(
                    data => setCars(data)
                )
            },
            getAllClients: function(){
                get("http://localhost:3000/api" + "/allClients/").then(
                    data => setClients(data)
                ) 
            }
        }
    }


    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}