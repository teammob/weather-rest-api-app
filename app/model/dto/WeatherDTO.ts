export class WeatherDTO {
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
  };
}
