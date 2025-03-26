import { useState, useEffect } from "react";
import { WeatherData } from "../Models/Types";


const getUserLocation = async (): Promise<{ lat: number; lon: number } > => {
	return new Promise((resolve, reject) => {
	  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
		  (position) => {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;
			resolve({ lat, lon });
		  },
		  (error) => {
			resolve({ lat: 52.5244, lon: 13.4105 });
		  }
		);
	  } else {
		resolve({ lat: 52.5244, lon: 13.4105 });
	  }
	});
  };

export const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  const initWeatherData = async () => {
	const location =  await getUserLocation()
	updateWeatherData(String(location.lat), String(location.lon))
  }
  

  const updateWeatherData = async (lat:string, lon:string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m&current=temperature_2m,weather_code`);
      const data = await response.json();
      setWeatherData(data);
      console.log(data)
    } catch (error) {
      console.error("Fehler beim Laden der Wetterdaten", error);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    initWeatherData();
  }, []);

  return { weatherData, updateWeatherData };
}


