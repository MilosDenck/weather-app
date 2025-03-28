import './../icons/weather-icons.css'
import './../icons/weather-icons-wind.css'
import { WeatherData } from '../Models/Types';

type DailyDataProps = {
    weatherData: WeatherData;
    selectedDay: number;
};

const DailyDataComponent = ({weatherData, selectedDay}: DailyDataProps) =>{

    function toTime(dateString:string) {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    return (
        <div className='container grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 place-items-center'>
            <div className='info-card'>
                <h3>Wind</h3>
                <i style={{fontSize: 48}} className={`wi wi-wind towards-${weatherData.daily.wind_direction_10m_dominant[selectedDay]}-deg`}></i>
                <div>{weatherData.daily.wind_speed_10m_max[selectedDay]} km/h</div>
            </div>
            <div className='info-card'>
                <h3>UV-Index</h3> 
                <div>
                    <i style={{fontSize: 48}} className={`wi wi-snowflake-cold`}></i>
                    <div>{ weatherData.daily.uv_index_max[selectedDay] }</div>
                </div>
            </div >
            <div className='info-card'>
                <h3>Niederschlag</h3> 
                <div>
                    <i style={{fontSize: 48}} className={`wi wi-umbrella`}></i>
                    <div>{ weatherData.daily.precipitation_sum[selectedDay] } mm</div>
                </div>
            </div>
            <div className='info-card'>
                <h3>Sonnenaufgang</h3>

                <div>
                    <i style={{fontSize: 48}} className={`wi wi-sunrise`}></i>
                    <div>{toTime(weatherData.daily.sunrise[selectedDay])}</div>
                </div>
            </div>
            <div className='info-card'>
                <h3>Sonnenuntergang</h3> 
                <div>
                    <i style={{fontSize: 48}} className={`wi wi-sunset`}></i>
                    <div>{ toTime(weatherData.daily.sunset[selectedDay]) }</div>
                </div>
            </div>
            
            <div className='info-card'>
                <h3>Sonnenstunden</h3> 
                <div>
                    <i style={{fontSize: 48}} className={`wi wi-day-sunny`}></i>
                    <div>{ Math.round(weatherData.daily.sunshine_duration[selectedDay]/360)/10 }</div>
                </div>
            </div>
            
         </div>
    )
}

export default DailyDataComponent;