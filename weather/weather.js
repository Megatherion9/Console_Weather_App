const axios = require('axios');


// Funcion para obtener la temperatura de la ciudad segun la latitud y longitud
const getWeather = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&apikey=b692144649c14fffe8d5326aac05c050&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getWeather
}