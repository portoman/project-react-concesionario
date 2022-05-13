
export const HOST = "/api"

//Funcion para coger coches GET
export async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}



export async function authPost(url, token, data) {
    const response = await fetch(
        url,
        {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        }
    );
    const responseData = await response.json();
    return responseData;
}