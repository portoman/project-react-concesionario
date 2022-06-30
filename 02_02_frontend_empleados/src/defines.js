export let URL;

switch (window.location.hostname) {
    case "localhost":
        URL="http://localhost:3000/api"
        break;

    case "127.0.0.1":
        URL="http://127.0.0.1:3000/api"
        break;
        
    default:
        URL="/api"
        break;
}

export const loginEndpoint = '/login/'
export const secretsEndpoint = '/secretos/'