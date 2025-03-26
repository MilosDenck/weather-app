export const getWeatherIconLink = (weatherCode: number): string => {
	const iconMap: { [key: number]: string } = {
		0: "https://openweathermap.org/img/wn/01d@2x.png",  
		1: "https://openweathermap.org/img/wn/02d@2x.png",  
		2: "https://openweathermap.org/img/wn/03d@2x.png", 
		3: "https://openweathermap.org/img/wn/04d@2x.png", 
		
		45: "https://openweathermap.org/img/wn/50d@2x.png", 
		48: "https://openweathermap.org/img/wn/50d@2x.png",

		51: "https://openweathermap.org/img/wn/09d@2x.png", 
		53: "https://openweathermap.org/img/wn/09d@2x.png",
		55: "https://openweathermap.org/img/wn/09d@2x.png", 

		56: "https://openweathermap.org/img/wn/13d@2x.png", 
		57: "https://openweathermap.org/img/wn/13d@2x.png", 

		61: "https://openweathermap.org/img/wn/10d@2x.png", 
		63: "https://openweathermap.org/img/wn/10d@2x.png", 
		65: "https://openweathermap.org/img/wn/10d@2x.png", 

		66: "https://openweathermap.org/img/wn/13d@2x.png", 
		67: "https://openweathermap.org/img/wn/13d@2x.png", 

		41: "https://openweathermap.org/img/wn/13d@2x.png", 
		50: "https://openweathermap.org/img/wn/13d@2x.png", 
		60: "https://openweathermap.org/img/wn/13d@2x.png", 

		77: "https://openweathermap.org/img/wn/13d@2x.png", 

		80: "https://openweathermap.org/img/wn/09d@2x.png", 
		81: "https://openweathermap.org/img/wn/09d@2x.png", 
		82: "https://openweathermap.org/img/wn/09d@2x.png", 

		85: "https://openweathermap.org/img/wn/13d@2x.png", 
		86: "https://openweathermap.org/img/wn/13d@2x.png", 

		95: "https://openweathermap.org/img/wn/11d@2x.png", 
		96: "https://openweathermap.org/img/wn/11d@2x.png", 
		99: "https://openweathermap.org/img/wn/11d@2x.png",
	};

	return iconMap[weatherCode] || "https://openweathermap.org/img/wn/01d@2x.png"; 
};