import { getWeatherIconLink } from "../utils/weatherIcons";

type WeatherProps = {
	maxTemp: number;
	minTemp: number;
	wmoCode: number,
	date: string,
	className: string,
	onClick: () => void;
};

const WeatherDisplayComponent = ({ maxTemp, minTemp, wmoCode, date, className, onClick }: WeatherProps) =>{

	function getWeekday(dateString:string) {
		const date = new Date(dateString);
		const weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
		return weekdays[date.getDay()];
	}

	return (
		<div className={`weather-display ${className}`} onClick={onClick}>
			<h4>{getWeekday(date)}</h4>
			<i className={`wi weather-icon ${getWeatherIconLink(wmoCode)}`}></i>
			<div className="weather-display-text" style={{fontWeight: 'bold'}}>{maxTemp}°</div>
			<div className="weather-display-text">{minTemp}°</div>
		</div>
	)
}

export default WeatherDisplayComponent;

