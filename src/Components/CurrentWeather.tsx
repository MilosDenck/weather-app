import { Location } from "../Models/Types";
import { getWeatherIconLink } from "../utils/weatherIcons";
import "./CurrentWeather.css"

type currentWeatherProps = {
	temp: number;
	wmoCode: number;
	location: Location;
	isDay: boolean;
}

const CurrentWeatherComponent = ({ temp, wmoCode, location, isDay }: currentWeatherProps) =>{

	return (
		<div className="current-weather-container">
			<h2>{location.address.city}</h2>
			<i style={{fontSize: 90}} className={`wi ${getWeatherIconLink(wmoCode, isDay)}`}></i>
			<h3>{temp}°C</h3>
		</div>
	)
}

export default CurrentWeatherComponent;