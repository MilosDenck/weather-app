export const getWeatherIconLink = (weatherCode: number): string => {
	// const iconMap: { [key: number]: string } = {
	// 	0: "https://openweathermap.org/img/wn/01d@2x.png",  
	// 	1: "https://openweathermap.org/img/wn/02d@2x.png",  
	// 	// 2: "https://openweathermap.org/img/wn/03d@2x.png", 
	// 	// 3: "https://openweathermap.org/img/wn/04d@2x.png", 
		
	// 	10: "https://openweathermap.org/img/wn/09d@2x.png", 
	// 	11: "https://openweathermap.org/img/wn/10d@2x.png",
	// 	12: "https://openweathermap.org/img/wn/10d@2x.png", 
	// 	13: "https://openweathermap.org/img/wn/13d@2x.png",
	// 	14: "https://openweathermap.org/img/wn/13d@2x.png", 

	// 	20: "https://openweathermap.org/img/wn/11d@2x.png", 
	// 	21: "https://openweathermap.org/img/wn/11d@2x.png", 
	// 	22: "https://openweathermap.org/img/wn/11d@2x.png", 

	// 	30: "https://openweathermap.org/img/wn/50d@2x.png", 
	// 	31: "https://openweathermap.org/img/wn/50d@2x.png", 
	// 	32: "https://openweathermap.org/img/wn/50d@2x.png", 

	// 	40: "https://openweathermap.org/img/wn/10d@2x.png", 
	// 	41: "https://openweathermap.org/img/wn/11d@2x.png", 

	// 	50: "https://openweathermap.org/img/wn/50d@2x.png", 

	// 	60: "https://openweathermap.org/img/wn/10d@2x.png", 
	// 	61: "https://openweathermap.org/img/wn/10d@2x.png", 
	// 	62: "https://openweathermap.org/img/wn/11d@2x.png", 
	// 	63: "https://openweathermap.org/img/wn/11d@2x.png", 
	// 	64: "https://openweathermap.org/img/wn/13d@2x.png", 
	// 	65: "https://openweathermap.org/img/wn/13d@2x.png", 
	// 	66: "https://openweathermap.org/img/wn/13d@2x.png", 
	// 	67: "https://openweathermap.org/img/wn/13d@2x.png", 
	// 	68: "https://openweathermap.org/img/wn/13d@2x.png", 
	// 	69: "https://openweathermap.org/img/wn/50d@2x.png",
	// };
	if(weatherCode < 2) { return "https://openweathermap.org/img/wn/01d@2x.png" } else
	if(weatherCode ) { return "https://openweathermap.org/img/wn/02d@2x.png"}

	return "https://openweathermap.org/img/wn/01d@2x.png"; 
};