import { useState, useEffect } from "react";
import { Location, WeatherData } from "../Models/Types";


export const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loadingWeather, setLoading] = useState(true);


  const updateWeatherData = async (location: Location) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,rain&current=temperature_2m,weather_code`);
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


