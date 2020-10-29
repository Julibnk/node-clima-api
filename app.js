const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async (direccion) => {

    try {
        let respLugar = await lugar.getLugarLatLng(argv.direccion);
        let respClima = await clima.getClima(respLugar.lat, respLugar.lng);
        console.log(`El clima de ${respLugar.city} es de ${ respClima }`)
    } catch (e) {
        throw new Error("No se pudo determinar el clima ")
    }


    // clima.getClima(resp.lat, -1.48698)
    //     .then(console.log)
    //     .catch(err => console.log(err));

}


getInfo(argv.direccion);