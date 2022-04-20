import CarCarrousel from "../CarCarrousel/CarCarrousel";

function CarCarrousels({ vehiculos }) {

    //Mediante el método filter, segrego los coches que son de alquiler o venta
    let vehiculosArrayAlquiler = vehiculos.filter(coche => coche.venta == false);
    let vehiculosArrayVenta = vehiculos.filter(coche => coche.venta == true);

    return (
        <>
            <h3>Ofertas alquiler</h3>
            <CarCarrousel vehiculos={vehiculosArrayAlquiler} />
            <h3>Ofertas venta</h3>
            <CarCarrousel vehiculos={vehiculosArrayVenta} />
        </>
    )
}

export default CarCarrousels