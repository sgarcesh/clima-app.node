const axios = require('axios');

const getLugarLatLng = async(lugar) => {

    let encodedAdress = encodeURI(lugar);


    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedAdress }&key=AIzaSyBcM4d0MJIX4zBbDTBOX0IB55pW6XB2YsM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la direccion ${encodedAdress} `);
    }

    let obj = resp.data.results[0];

    let direccion = obj.formatted_address;
    let lng = obj.geometry.location.lng;
    let lat = obj.geometry.location.lat;

    return {
        direccion,
        lat,
        lng
    }

};

// se agrega amodulo elementos que se desea usar de forma global
module.exports = {
    getLugarLatLng
}