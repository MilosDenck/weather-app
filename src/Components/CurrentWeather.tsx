import { Location } from "../Models/Types";
import { getWeatherIconLink } from "../utils/weatherIcons";
import "./CurrentWeather.css"

type currentWeatherProps = {
	temp: number;
	wmoCode: number;
	location: Location;
}

const CurrentWeatherComponent = ({ temp, wmoCode, location }: currentWeatherProps) =>{

	return (
		<div className="current-weather-container">
			<h2>{location.address.city}</h2>
			<img src={getWeatherIconLink(wmoCode)} />
			<h3>{temp}°C</h3>
		</div>
	)
}

export default CurrentWeatherComponent;