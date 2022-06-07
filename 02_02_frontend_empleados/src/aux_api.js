
export const HOST = "/api"

//Funcion para coger coches GET
export async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}



export async function post(url, data) {
    const response = await fetch(
        url,
        {
            method: 'POST',
            body: data,
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
    const responseData = await response.json();
    return responseData;
}

export async function apiDelete(url, data) {
    const response = await fetch(
        url,
        {
            method: 'DELETE',
            body: data,
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
    return response.status;
}

export async function modify(url, data) {
    const response = await fetch(
        url,
        {
            method: 'PUT',
            body: data,
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
    return response.status;
}