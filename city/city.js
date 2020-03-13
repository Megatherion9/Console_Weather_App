// Importacion del paquete "axios" el cual nos permite conectarnos a la API "location"
const axios = require('axios');

// Funcion para obtener la latitud y la longitud de la ciudad
const getCityLatLon = async(ciudad) => {

    const encodedUrl = encodeURI(ciudad);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '039b78e976mshdc2ab1b94983002p176670jsn20a5aaf3b398' }
    })


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ciudad}`)
    }

    const data = resp.data.Results[0];
    const cityName = data.name;
    const latitud = data.lat;
    const longitud = data.lon;


    return {
        cityName,
        latitud,
        longitud
    }
}


module.exports = {
    getCityLatLon
};