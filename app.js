// api key:    AIzaSyBcM4d0MJIX4zBbDTBOX0IB55pW6XB2YsM

// api key weather: 159ba7f04d5cab7c57fbfc64229df361

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de ciudad',
        demand: true
    }
}).argv;

//inicio de programa
// lugar.getLugarLatLng(argv.direccion)
//     .then(response => {
//         clima.getClima(response.lat, response.lng)
//             .then(temp => {
//                 console.log(`Para ${argv.direccion} hay de temperatura actual ${temp} °C`);
//             })
//             .catch(e => console.log(e));
//     })
//     .catch(e => console.log(e));

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${argv.direccion} es de ${temp}°C`;

    } catch (e) {
        return `No se pudo obtener el clima en ${direccion}.`
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));