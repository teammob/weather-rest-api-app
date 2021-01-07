
import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

import { weather } from './model';
import { CurrentWeatherController } from './controller/currentWeather';
const weatherController = new CurrentWeatherController(weather);

import { getWeather } from './service/openweather';

//import { WeatherService } from '../service/weather';

export const create: Handler = (event: any, context: Context) => {
  return weatherController.create(event, context);
};

export const update: Handler = (event: any) => weatherController.update(event);

export const find: Handler = () => weatherController.find();

export const findOne: Handler = (event: any, context: Context) => {
  return weatherController.findOne(event, context);
};

export const deleteOne: Handler = (event: any) => weatherController.deleteOne(event);

export const openWeather: Handler=(event:any)=> getWeather(event);
