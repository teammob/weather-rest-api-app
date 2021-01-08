import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

import { weather,temperature as localTemp } from './model';
//import { WeatherController } from './controller/weather';
//import { CurrentWeatherController } from './controller/currentWeather';
import { 
  TemperatureController,
  CurrentWeatherController,
  WeatherController
} from './controller';

const weatherController = new WeatherController(weather);
const currentWeatherController = new CurrentWeatherController();
const temperatureController = new TemperatureController(localTemp);

/* WeatherController functions */
export const create: Handler = (event: any, context: Context) => {
  return weatherController.create(event, context);
};
export const update: Handler = (event: any) => weatherController.update(event);
export const find: Handler = () => weatherController.find();
export const findOne: Handler = (event: any, context: Context) => {
  return weatherController.findOne(event, context);
};
export const deleteOne: Handler = (event: any) => weatherController.deleteOne(event);

/* CurrentWeatherController functions */
export const openWeather: Handler = (event:any) => currentWeatherController.getWeather(event);

/* TemperatureController functions */
export const temperature: Handler = (event:any) => temperatureController.findOneTemperature(event);
export const temperaturemonth: Handler = (event:any) => temperatureController.findOneTemperatureMonth(event);
