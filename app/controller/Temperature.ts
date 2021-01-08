import { Model } from "mongoose";
import { TemperatureService } from "../service/Temperature";
import { MessageUtil } from "../utils/message";


export class TemperatureController extends TemperatureService {
    constructor (temperature: Model<any>) {
      super(temperature);
    }
  

    /**
     * Query Temperature by id
     * @param event
     */
    async findOneTemperature (event: any) {
      
      const cityName: string = event.pathParameters.city;
        console.log('findOneTemperatureByName-X: ', cityName);
      try {
        if (!cityName) {
            return MessageUtil.error(2010, ' City name can not be null !');
        }
        const result = await this.findOneTemperatureByName(cityName);
  
        return MessageUtil.success(result);
      } catch (err) {
        console.error(err);
  
        return MessageUtil.error(err.code, err.message);
      }
    }
  
    /**
     * findOneTemperatureByName_Month weather by id
     * @param event
     */
    async findOneTemperatureMonth (event: any) {
        
        const cityName: string = event.pathParameters.cityName;
        const selectedMonth: string = event.pathParameters.selectedMonth;
  
      try {
        if (!cityName && !selectedMonth) {
            return MessageUtil.error(2020, ' City name and selected month can not be null !');
        }
        const result = await this.findOneTemperatureByName_Month(cityName,selectedMonth);
  
        if (result === null || undefined) {
          return MessageUtil.error(2021, 'The data was not found for given city and selected month!');
        }
  
        return MessageUtil.success(result);
      } catch (err) {
        console.error(err);
  
        return MessageUtil.error(err.code, err.message);
      }
    }
  }
  