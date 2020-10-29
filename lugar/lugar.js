const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+"${ encodedUrl }"?json=1'`
    });

    const resp = await instance.get();

    if (!resp.data) {
        throw new Error(`No hay datos para ${ direccion }`);
    }

    const lng = resp.data.longt;
    const lat = resp.data.latt;
    const city = resp.data.standard.city;

    return {
        city,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}