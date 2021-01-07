import { Model } from 'mongoose';
import { MessageUtil } from '../utils/message';
import { CurrentWeatherService } from '../service/currentWeather';
import { WeatherDTO } from '../model/dto/WeatherDTO';
import axios from 'axios';


export class CurrentWeatherController extends CurrentWeatherService {
    //constructor (weather: Model<any>) {
      //super(weather);
   

            /**
 * Makes an API call to retrieve current weather information for a specified location.
 * 
 * @param target 
 * Target location to retrieve weather for.
 * 
 * @param type 
 * Target location type to retrieve weather for.
 */
    async queryApi(target: any) {  
        const response = await axios.get<WeatherDTO>(this.makeUrl(target)); 
        console.log('queryApi: ',response.data);
        return response.data as WeatherDTO;
    }
    
     async getWeather(target: any) {
        const cityName: string = String(target.pathParameters.location);
        const dto = await this.queryApi(cityName);
        const result= this.parseWeatherDto(dto);
          
        return MessageUtil.success(result); ;
          
      }

    }