import { Model } from 'mongoose';
import { WeatherDTO } from '../model/dto/WeatherDTO';

export class WeatherService {
  private weather: Model<any>;
  constructor(weather: Model<any>) {
    this.weather = weather;
  }

  /**
   * Create weather
   * @param params
   */
  protected async createWeather (params: WeatherDTO): Promise<object> {
    try {
      const result = await this.weather.create({

        cityId: params.cityId,
        country: params.country,
        name: params.name,
        coord: 
        { lon: params.coord.lon,
          lat: params.coord.lat 
        },
        weather: 
        {
         id: params.weather.id,
          main: params.weather.main,
          description: params.weather.description
        },
        main: {
          temp: params.main.temp,
          pressure: params.main.pressure,
          humidity: params.main.humidity,
          temp_min: params.main.temp_min,
          temp_max: params.main.temp_min
        }

      });

      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }

  /**
   * Update a weather by id
   * @param cityId
   * @param data
   */
  protected updateWeather (cityId: number, data: object) {
    return this.weather.findOneAndUpdate(
      { cityId },
      { $set: data },
      { new: true },
    );
  }

  /**
   * Find weather
   */
  protected findWeather () {
    return this.weather.find();
  }

  /**
   * Query weather by cityId
   * @param cityId
   */
  protected findOneWeatherById (cityId: number) {
    return this.weather.findOne({ cityId });
  }

  /**
   * Delete weather by cityId
   * @param cityId
   */
  protected deleteOneWeatherById (cityId: number) {
    return this.weather.deleteOne({ cityId });
  }
}
