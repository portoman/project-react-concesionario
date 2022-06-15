
/**
    * Función para obtener la matrícula a partir del id del coche
    * @param {*} id 
    * @returns matricula
    */
export function takeMatricula(id, coches) {
    let coche = coches.filter(element => element.id_coche == id);
    return coche[0].matricula;
}

/**
     * Función para obtener el modelo a partir del id del coche
     * @param {*} id id del coche
     * @returns modelo
     */
export function takeModelo(id, coches) {
    let coche = coches.filter(element => element.id_coche == id);
    return coche[0].modelo;
}

/**
 * Función para obtener la marca a partir del id del coche
 * @param {*} id id del coche
 * @returns marca
 */
export function takeMarca(id, coches) {
    let coche = coches.filter(element => element.id_coche == id);
    return coche[0].marca;
}

 

    /**
     * Función para obtener el DNI a partir del id del cliente
     * @param {*} id id del cliente
     * @returns DNI
     */
     export function takeDNI(id, clientes) {
        let cliente = clientes.filter(element => element.id_cliente == id);
        return cliente[0].DNI;
    }

    /**
     * Función para obtener el nombre a partir del id del cliente
     * @param {*} id id del cliente
     * @returns nombre
     */
     export function takeNombre(id,clientes) {
        let cliente = clientes.filter(element => element.id_cliente == id);
        return cliente[0].nombre;
    }

     /**
     * Función para obtener los Apellidos a partir del id del cliente
     * @param {*} id id del cliente
     * @returns apellidos
     */
     export function takeApellidos(id,clientes) {
        let cliente = clientes.filter(element => element.id_cliente == id);
        return cliente[0].apellidos;
    }