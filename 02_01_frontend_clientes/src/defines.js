//Ruta de las fotos
export const PATH = "/public/";
//Ruta de la API
export const URL = "http://localhost:3000/api";
export const loginEndpoint = '/login/'
export const secretsEndpoint = '/secretos/'

export let HOST;

switch (window.location.hostname) {
  case "localhost":
    HOST="http://localhost:3000/"
    break;

  case "127.0.0.1":
    HOST="http://127.0.0.1:8080/"
    break;
    
  default:
    HOST="/"
    break;
}