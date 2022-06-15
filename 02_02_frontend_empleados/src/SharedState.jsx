import { get } from "./aux_api";
import { useState, createContext } from "react";
import { URL } from "./defines";
export const Context = createContext();

/*Componente que se comparte en toda la aplicación.
 */
export function ContextProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [clients, setClients] = useState([]);
  const [sales, setSales] = useState([]);

  const context = {
    states: { cars, clients, sales },
    actions: {
      getAllCars: function () {
        get(URL + "/allCoches/").then((data) => setCars(data));
      },
      getAllClients: function () {
        get(URL + "/allClients/").then((data) => setClients(data));
      },
      getAllSales: function () {
        get(URL + "/allSales/").then((data) => setSales(data));
      },
    },
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
