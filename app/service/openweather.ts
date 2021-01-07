import axios from 'axios';
import { MessageUtil } from '../utils/message';

/**
 * Represents a response DTO shape from the Weather API.
 */
export interface IOpenWeatherResponseDTO {
    weather: Array<{
        main: string,
        description: string
    }>,
    main: {
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number,
    }
}


/**
 * Constructs an API URL based on a specified target location and type.
 * 
 * @param location 
 * The target location to construct the URL against.
 * 
 */
function makeUrl(location: any) {
    const BASE_URL =process.env.API_BASE_URL;
    const APP_ID = process.env.APPID;
    const partialUri =`https://${BASE_URL}?q=${location}`     
    // Full URL with query location and app ID.
    return `${partialUri}&appId=${APP_ID}&units=metric`;
}

function parseWeatherDto(response: IOpenWeatherResponseDTO){

  const weatherResponse: IOpenWeatherResponseDTO = {
      weather: [{
        main: response.weather[0].main,
        description: response.weather[0].description
      }],
      main: {
        temp: response.main.temp,
        feels_like:response.main.feels_like,
        pressure: response.main.pressure,
        humidity: response.main.humidity
      },
      visibility: response.visibility,
      wind: {
        speed: response.wind.speed,
        deg: response.wind.deg
      }
  }
  return MessageUtil.success(weatherResponse); ;
}


/**
 * Makes an API call to retrieve current weather information for a specified location.
 * 
 * @param target 
 * Target location to retrieve weather for.
 * 
 * @param type 
 * Target location type to retrieve weather for.
 */
async function queryApi(target: any) {  
    const response = await axios.get<IOpenWeatherResponseDTO>(makeUrl(target)); 
   // console.log('console.log',response.data);
    return response.data as IOpenWeatherResponseDTO;
}

/**
 * Retrieves current weather information for a specified location.
 * 
 * @param target 
 * Target location to retrieve weather for.
 * 
 * @param type 
 * Target location type to retrieve weather for.
 */
export async function getWeather(target: any) {
  const cityName: string = String(target.pathParameters.location);
  const dto = await queryApi(cityName);
    
    return parseWeatherDto(dto);
    
}