import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&APPID=d11a484b34eab79cd48be487cd2ce4ba';
let defaultCity = 'Kathmandu';

const cityUrl = 'http://api.geonames.org/searchJSON?username=ksuhiyp&country=';
const cityQuery = '&maxRows=1000&style=SHORT';
const countryUrl = 'https://restcountries.eu/rest/v2/all';

export const fetchData = async(city) => {
    if(city) {
        defaultCity = city;
    }

    try {
        const { data:{ main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, coord: {lat, lon} }}= await axios.get(`${url}${defaultCity}${apiKey}`); 
        const modifiedData = { temp, pressure, humidity, lat, lon};
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}