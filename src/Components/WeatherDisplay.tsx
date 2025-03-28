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
		const weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
		return weekdays[date.getDay()];
	}

	return (
		<div className={`weather-display ${className}`} onClick={onClick}>
			<h4>{getWeekday(date)}</h4>
			<i style={{fontSize: 52}} className={`wi ${getWeatherIconLink(wmoCode)}`}></i>
			<div>{maxTemp}</div>
			<div>{minTemp}</div>
		</div>
	)
}

export default WeatherDisplayComponent;

