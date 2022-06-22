import { get } from "./aux_api";
import { useState, createContext } from "react";
import { URL, loginEndpoint, secretsEndpoint } from "./defines";
export const Context = createContext();

/*Componente que se comparte en toda la aplicación.
 */
export function ContextProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [clients, setClients] = useState([]);
  const [sales, setSales] = useState([]);
  const [rents, setRents] = useState([]);
  const [forms, setForms] = useState([]);
  const [state, setState] = useState({
    token: null,
    secrets: null,
  })

  const context = {
    states: { cars, clients, sales, rents, forms, state },
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
      setToken: function (token) {
        const newState = { ...state, token }
        setState(newState)
      },
      setSecrets: function (secrets) {
        const newState = { ...state, secrets }
        setState(newState)
      },
      deleteToken: function () {
        this.setToken(null)
      },
      getAPIToken: async function (username, password) {
        const Authorization = `Basic ${btoa(username + ':' + password)}`
        const response = await fetch(URL + loginEndpoint, {
          headers: {
            Authorization
            //Authorization: `Basic ${btoa(username+':'+password)}`,
          }
        })
        if (response.status === 200) {
          this.setToken(await response.text())
        }
      },
      getAPISecrets: async function () {
        const response = await fetch(URL + secretsEndpoint, {
          headers: {
            Authorization: "Bearer " + state.token
          }
        })
        if (response.status === 200) {
          this.setSecrets(await response.text())
        }
        if (response.status === 401) {
          this.deleteToken()
        }
      }
    },
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
