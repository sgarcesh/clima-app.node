const axios = require('axios');
const apiKey = '159ba7f04d5cab7c57fbfc64229df361'
const unitFormat = {
    f: 'units=imperial',
    c: 'units=metric'
}

const getClima = async(lat, lng) => {

    // axios.....

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&${unitFormat.c}&appid=${apiKey}`);


    if (resp.cod === 200) {
        throw new Error(`Error en la ejecucion de Weather API.  ${resp.message} `);
    }

    let temp = resp.data.main.temp;

    return temp

}

// se agrega amodulo elementos que se desea usar de forma global
module.exports = {
    getClima
}