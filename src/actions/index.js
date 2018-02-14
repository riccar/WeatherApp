//Import axion library to solely make ajax calls without having to bring in the whole jquery library. 
import axios from 'axios';

const API_KEY = '364404447650d84daa9a5073009e4ec6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Create variables constant for the action types to avoid typos mistakes between the actions and the reducers 
//and also to be able to change the action type string in one place only 
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`;

  //Axion returns a promise. It doesn't contain the data but the promise is returned to the payload below.
  //the goal of the promise is to stop the action from being returned untill the call is fully resolved
  //and the required data is ready to be delivered to the payload and then to all the reducers
  const request = axios.get(url);

  //console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}