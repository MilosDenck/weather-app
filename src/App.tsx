import React, { useEffect, useState } from 'react';
import './App.css';
import { useWeatherApi } from './ViewModels/WeatherApiViewModel'
import WeatherDisplayComponent from './Components/WeatherDisplay'
import CurrentWeatherComponent from './Components/CurrentWeather';
import { useLocationApi } from './ViewModels/LocationApiViewModel';
import WeatherChart from './Components/WeatherChart';

function App()  {
  const { location, loadingLocation, updateLocationBySearchValue } = useLocationApi()
  const { weatherData, loadingWeather, updateWeatherData } = useWeatherApi()

  const [selectedDay, setSelectedDay] = useState<number>(0)

  useEffect(() => {
    if (location) {
      updateWeatherData(location)
  }}, [location]);
  
  
  return (
    <div className="App">
      {
        weatherData != null && location != null && !loadingWeather && !loadingLocation ?
        <div style={{justifyContent: 'center',alignItems: 'center',display: 'flex', flexDirection:'column', width: '100%'}}>
          <CurrentWeatherComponent temp={weatherData.current.temperature_2m} wmoCode={weatherData.current.weather_code} location={location} />
          <div style={{display: 'flex'}}>
            {
              Array.from({ length: 7 }, (_, i) => (
                <WeatherDisplayComponent onClick={() => setSelectedDay(i)} maxTemp={weatherData.daily.temperature_2m_max[i]} minTemp={weatherData.daily.temperature_2m_min[i]} wmoCode={weatherData.daily.weather_code[i]} date={weatherData.daily.time[i]}/>
              ))
            }
          </div>
          <WeatherChart values={weatherData.hourly.temperature_2m.slice(selectedDay*24, selectedDay*24 + 24)} times={weatherData.hourly.time.slice(selectedDay*24, selectedDay*24 + 24)} rain={weatherData.hourly.rain.slice(selectedDay*24, selectedDay*24 + 24)} />
        </div>
        : null
      }
    </div>
    );
}

export default App;
