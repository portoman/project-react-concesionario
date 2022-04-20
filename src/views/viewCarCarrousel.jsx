import CarCarrousel from "../components/CarCarrousel/CarCarrousel"

function viewCarCarrousel(vehiculosArray) {
//Mediante el método filter, segrego los coches que son de alquiler o venta
let vehiculosArrayAlquiler = vehiculosArray.filter(coche => coche.venta == false);
let vehiculosArrayVenta = vehiculosArray.filter(coche => coche.venta == true);

    return(
        <>
        <h3>Ofertas alquiler</h3>
        <CarCarrousel vehiculos={vehiculosArrayAlquiler}/>
        <h3>Ofertas venta</h3>
        <CarCarrousel vehiculos={vehiculosArrayVenta}/>
        </>
    )
}

export default viewCarCarrousel