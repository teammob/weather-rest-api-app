export class TemperatureDTO {
    city_id: number;
    city: String;
    country: string;
    monthlyAvg:{
        month:String,
        high: number,
        low: number,
        dryDays:number,
        snowDays: number,
        rainfall: number
    }[];
  }