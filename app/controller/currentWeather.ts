import { MessageUtil } from '../utils/message';
import { CurrentWeatherService } from '../service';
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
 */
    protected async queryApi(target: any) {  
    try{
        const response = await axios.get<WeatherDTO>(this.makeUrl(target)); 
        console.log('queryApi: ',response.data);
        return response.data as WeatherDTO;
        
        } catch (err) {
         console.error(err);        
      }
    }
    
     async getWeather(target: any) {
        try{ 
        const cityName: string = String(target.pathParameters.location);
        const dto = await this.queryApi(cityName);
        const result= this.parseWeatherDto(dto);
          
        return MessageUtil.success(result); ;
        
        } catch (err) {
        console.error(err);
  
        return MessageUtil.error(err.code, err.message);
      }
          
      }

    }