// Video 59

const city = require('./city/city');
const weather = require('./weather/weather');
const colors = require('colors');


const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad a obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async(ciudad) => {
    try {
        const coordenadas = await city.getCityLatLon(ciudad);
        const temperatura = await weather.getWeather(coordenadas.latitud, coordenadas.longitud);

        console.log(`La temperatura actual de la ciudad de ${ciudad}, es de: ${temperatura}`.yellow);

    } catch (e) {
        console.log(`No se pudo determinar la temperatura de ${ciudad}`.red);
    }

}

getInfo(argv.ciudad)
    //   .then(console.log)
    //  .catch(console.log);