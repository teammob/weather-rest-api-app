import mongoose from 'mongoose';
/*
* TemperatureDocument document type  on MongoDB
*/
export type TemperatureDocument = mongoose.Document & {
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
  
};
/*
* TemperatureSchema document type on MongoDB
*/
const TemperatureSchema = new mongoose.Schema({
  
  cityId:  { type: Number, required: true, index: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  monthlyAvg: [{ 
    month: {type: String, required: true },  
    high: {type: Number,required: true},
    low: {type: Number,required: true},
    dryDays:{type: Number,required: true},
    snowDays: {type: Number,required: true},
    rainfall: {type: Number,required: true}}]
});

export const temperature = (mongoose.models.temperature ||
mongoose.model<TemperatureDocument>('temperature', TemperatureSchema, process.env.DB_TEMPERATURE_COLLECTION)
);