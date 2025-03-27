import { useState, useEffect } from "react";
import { Location, WeatherData } from "../Models/Types";


export const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loadingWeather, setLoading] = useState(true);


  const updateWeatherData = async (location: Location) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&daily=wind_direction_10m_dominant,uv_index_max,sunrise,sunset,precipitation_sum,sunshine_duration,wind_speed_10m_max,weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&hourly=temperature_2m,precipitation,weather_code&&current=temperature_2m,weather_code&timezone=GMT`);
      const data = await response.json();
      setWeatherData(data);
      console.log(data)
    } catch (error) {
      console.error("Fehler beim Laden der Wetterdaten", error);
    } finally {
      setLoading(false);
    }

  };

  return { weatherData, loadingWeather, updateWeatherData };
}


