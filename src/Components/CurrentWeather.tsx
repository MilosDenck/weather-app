import { getWeatherIconLink } from "../utils/weatherIcons";
import "./CurrentWeather.css"

type currentWeatherProps = {
	temp: number;
	wmoCode: number;
}

const CurrentWeatherComponent = ({ temp, wmoCode }: currentWeatherProps) =>{

	return (
		<div className="current-weather-container">
			<h2>Berlin</h2>
			<img src={getWeatherIconLink(wmoCode)} />
			<h3>{temp}°C</h3>
		</div>
	)
}

export default CurrentWeatherComponent;