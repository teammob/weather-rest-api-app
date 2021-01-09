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
      try {
        if (!cityName) {
            return MessageUtil.error(2010, ' City name can not be null !');
        }
        const result = await this.findOneTemperatureByName(cityName);
        if (result === null || undefined) {
          return MessageUtil.error(2011, 'The data was not found for given city!');
        }
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
        
        const cityName: string = event.pathParameters.city;
        const selectedMonth: string = event.pathParameters.selectedmonth;
       // console.log('findOneTemperatureMonth: ',cityName +' selectedMonth:'+selectedMonth)
  
      try {
        if (!cityName && !selectedMonth) {
            return MessageUtil.error(2020, ' City name and selected month can not be null !');
        }
        const result = await this.findOneTemperatureByName_Month(cityName,selectedMonth);
        console.log('TemperatureController -result',result)
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
  