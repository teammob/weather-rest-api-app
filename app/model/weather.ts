import mongoose from 'mongoose';

export type WeatherDocument = mongoose.Document & {
  cityId: number;
  country: String;
  name: string;
  coord: { lon: number; lat: number };
  weather: {
    id: number;
    main: string;
    description: string;
  };
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  }
};

const weatherSchema = new mongoose.Schema({
  
  cityId:  { type: Number, required: true, index: true },
  country: { type: String, required: true },
  name:    { type: String, required: true },
  coord:  { type: Object, required: true },
  weather: { type: Object},
  main: {type: Object},
  createdAt: { type: Date, default: Date.now },
});

export const weather = (mongoose.models.weather ||
mongoose.model<WeatherDocument>('weather', weatherSchema, process.env.DB_WEATHER_COLLECTION)
);