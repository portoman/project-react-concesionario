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
  const [rents, setRents] = useState([]);
  const [forms, setForms] = useState([]);

  const context = {
    states: { cars, clients, sales, rents, forms },
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
      getAllRents: function () {
        get(URL + "/allRents/").then((data) => setRents(data));
      },
      getAllForms: function () {
        get(URL + "/allForms/").then((data) => setForms(data));
      },
    },
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
