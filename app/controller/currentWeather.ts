import { Context } from 'aws-lambda';
import { Model } from 'mongoose';
import { MessageUtil } from '../utils/message';
import { WeatherService } from '../service/weather';
import { WeatherDTO } from '../model/dto/WeatherDTO';

export class CurrentWeatherController extends WeatherService {
  constructor (weather: Model<any>) {
    super(weather);
  }

  /**
   * Create weather
   * @param {*} event
   */
  async create (event: any, context?: Context) {
    console.log('functionName', context.functionName);
    const params: WeatherDTO = JSON.parse(event.body);

    try {
      const result = await this.createWeather(params);
      console.log("params:" ,JSON.stringify(params));
      
      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  /**
   * Update a weather by id
   * @param event
   */
  async update (event: any) {
    const id: number = Number(event.pathParameters.id);
    const body: object = JSON.parse(event.body);

    try {
      const result = await this.updateWeather(id, body);
      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  /**
   * Find weather list
   */
  async find () {
    try {
      const result = await this.findWeather();

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  /**
   * Query weather by id
   * @param event
   */
  async findOne (event: any, context: Context) {
    // The amount of memory allocated for the function
    console.log('memoryLimitInMB: ', context.memoryLimitInMB);

    const id: number = Number(event.pathParameters.id);

    try {
      const result = await this.findOneWeatherById(id);

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  /**
   * Delete weather by id
   * @param event
   */
  async deleteOne (event: any) {
    const id: number = event.pathParameters.id;

    try {
      const result = await this.deleteOneWeatherById(id);

      if (result.deletedCount === 0) {
        return MessageUtil.error(1010, 'The data was not found! May have been deleted!');
      }

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }
}
