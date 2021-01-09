import { WeatherDTO } from '../model/dto/WeatherDTO';


export class CurrentWeatherService {
   // private currentWeather: WeatherDTO;
   // constructor(currentWeather: WeatherDTO) {
     // this.currentWeather = currentWeather;
 


    /**
 * Constructs an API URL based on a specified target location and type.
 * 
 * @param location 
 * The target location to construct the URL against.
 * 
 */
    protected makeUrl(location: any) {
        try{
        const BASE_URL =process.env.API_BASE_URL;
        const APP_ID = process.env.APPID;
        const partialUri =`https://${BASE_URL}?q=${location}`             
        return `${partialUri}&appId=${APP_ID}&units=metric`;
        
        } catch (err) {
            console.error(err);
    
            throw err;
        }
}

    protected parseWeatherDto(response: any){
        console.log("parseWeatherDto",response);
        try{
        const weatherResponse: WeatherDTO = {
            cityId: response.id,
            name: response.name,
            country: response.sys.country,
            coord: {
                lon: response.coord.lon,
                lat: response.coord.lat,
            },
            weather: {
              id: response.weather[0].id,
              main: response.weather[0].main,
              description: response.weather[0].description
            },
            main: {
              temp: response.main.temp,             
              pressure: response.main.pressure,
              humidity: response.main.humidity,
              temp_min: response.main.temp_min,
              temp_max: response.main.temp_max,
            }
        
        }
        return weatherResponse;
        
    } catch (err) {
        console.error(err);

        throw err;
    }
      }

}