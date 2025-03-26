import { getWeatherIconLink } from "../utils/weatherIcons";

type WeatherProps = {
	maxTemp: number;
	minTemp: number;
	wmoCode: number,
	date: string,
	onClick: () => void;
};

const WeatherDisplayComponent = ({ maxTemp, minTemp, wmoCode, date, onClick }: WeatherProps) =>{

	function getWeekday(dateString:string) {
		const date = new Date(dateString);
		const weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
		return weekdays[date.getDay()];
	}

	return (
		<div onClick={onClick}>
			<div>{getWeekday(date)}</div>
			<img src={getWeatherIconLink(wmoCode)} />
			<div>{maxTemp}</div>
			<div>{minTemp}</div>
		</div>
	)
}

export default WeatherDisplayComponent;

