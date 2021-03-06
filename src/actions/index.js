import axios from 'axios';

const API_KEY = 'b9e84c29cfd9241e2a88c2b0a7d9edbf';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
