import { useState } from "react";
import { Location, WeatherData } from "../Models/Types";


export const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const updateWeatherData = async (location: Location) => {
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&daily=wind_direction_10m_dominant,uv_index_max,sunrise,sunset,precipitation_sum,sunshine_duration,wind_speed_10m_max,weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&hourly=temperature_2m,precipitation,weather_code,is_day&&current=temperature_2m,weather_code,is_day&timezone=auto`);
      if(response.status === 200){
        const data = await response.json();
        setWeatherData(data);
      }
    } catch (error) {
      console.error("Fehler beim Laden der Wetterdaten", error);
    } 

  };

  return { weatherData, updateWeatherData };
}


