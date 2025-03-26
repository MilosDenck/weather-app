import React from 'react';
import './App.css';
import { useWeatherApi } from './ViewModels/WeatherApiViewModel'
import WeatherDisplayComponent from './Components/WeatherDisplay'
import CurrentWeatherComponent from './Components/CurrentWeather';

function App()  {
  const { weatherData, updateWeatherData } = useWeatherApi()

  
  return (
    <div className="App">
      {
        weatherData != null ?
        <div style={{justifyContent: 'center',alignItems: 'center',display: 'flex', flexDirection:'column', width: '100%'}}>
          <CurrentWeatherComponent temp={weatherData.current.temperature_2m} wmoCode={weatherData.current.weather_code} />
          <div style={{display: 'flex'}}>
            {
              Array.from({ length: 7 }, (_, i) => (
                <WeatherDisplayComponent maxTemp={weatherData.daily.temperature_2m_max[i]} minTemp={weatherData.daily.temperature_2m_min[i]} wmoCode={weatherData.daily.weather_code[i]} date={weatherData.daily.time[i]}/>
              ))
            }
          </div>
        </div>
        : null
      }
    </div>
    );
}

export default App;
