import { Location } from "../Models/Types";
import { getWeatherIconLink } from "../utils/weatherIcons";
import { getWeatherInfo } from "../utils/weatherInfo";

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
			<div>{getWeatherInfo(wmoCode, isDay)}</div>
			<i className={`wi current-weather-icon ${getWeatherIconLink(wmoCode, isDay)}`}></i>
			<div>aktuell</div>
			<div>{temp}°</div>
		</div>
	)
}

export default CurrentWeatherComponent;