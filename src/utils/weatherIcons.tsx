export const getWeatherIconLink = (weatherCode: number, isDay: boolean = true): string => {

	
	const iconMap: { [key: number]: string } = {
		
		0: isDay ? `wi-day-sunny` : `wi-night-clear`,  
		1: isDay ? `wi-day-cloudy`: `wi-night-alt-cloudy`,  
		2: `wi-cloud`, 
		3: `wi-cloudy`, 
		
		45: 'wi-fog', 
		48: 'wi-fog',

		51: `wi-snow`, 
		53: `wi-snow`,
		55: `wi-snow`, 

		56: `wi-rain-mix`, 
		57: `wi-rain-mix`, 

		61: `wi-rain-mix`, 
		63: `wi-hail`, 
		65: 'wi-rain', 

		66: `wi-snow`, 
		67: `wi-snow`, 

		41: `wi-snow`, 
		50: `wi-snow`, 
		60: `wi-snow`, 

		77: `wi-snow`, 

		80: `wi-showers`, 
		81: `wi-showers`, 
		82: `wi-showers`, 

		85: `wi-snow`, 
		86: `wi-snow`, 

		95: `wi-storm-showers`, 
		96: `wi-thunderstorm`, 
		99: `wi-thunderstorm`,
	};

	return iconMap[weatherCode] || "https://openweathermap.org/img/wn/01d@2x.png"; 
};