const axios = require('axios');


const getClima = async (lat, lng ) => {

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lng}&lon=${lng}&appid=05fecde552a36c8f13dff718957b9633&units=metric`);

   return resp.data.main.temp;

}

module.exports = {
    getClima
}