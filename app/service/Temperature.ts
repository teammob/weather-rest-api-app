import { Model } from 'mongoose';
import { TemperatureDTO } from '../model/dto/TemperatureDTO';
import { Months } from '../utils/months';

export class TemperatureService {
  private temperature: Model<any>;
  constructor(temperature: Model<any>) {
    this.temperature = temperature;
  }

  /**
   * Query Temperature by cityId
   * @param cityName
   */
  protected findOneTemperatureByName (cityName: string) {
      console.log('TemperatureService-findOneTemperatureByName',cityName)
    return this.temperature.findOne({ city: cityName });
  }

  /**
   * Query Temperature by cityName
   * @param cityId
   * 
   *  Query Temperature by selectedMonth
   * @param selectedMonth
   */
  protected findOneTemperatureByName_Month (cityName: string, selectedMonth: String) {
      //const month : Months = Months.["${"selectedMonth"}"];  
    return this.temperature.findOne({ city: cityName, monthlyAvg: selectedMonth });
  }
}
