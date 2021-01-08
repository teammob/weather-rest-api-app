import mongoose from 'mongoose';

export type TemperatureDocument = mongoose.Document & {
    city_id: number;
    city: String;
    country: string;
    monthlyAvg:Array<{
        high: number,
        low: number,
        dryDays:number,
        snowDays: number,
        rainfall: number
    }>;
  
};

const TemperatureSchema = new mongoose.Schema({
  
  cityId:  { type: Number, required: true, index: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  monthlyAvg: [{ 
    high: {type: Number,required: true},
    low: {type: Number,required: true},
    dryDays:{type: Number,required: true},
    snowDays: {type: Number,required: true},
    rainfall: {type: Number,required: true}}]
});

export const temperature = (mongoose.models.temperature ||
mongoose.model<TemperatureDocument>('temperature', TemperatureSchema, process.env.DB_TEMPERATURE_COLLECTION)
);