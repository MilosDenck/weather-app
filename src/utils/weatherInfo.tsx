export const getWeatherInfo = (weatherCode: number, isDay: boolean = true): string => {

	
	const iconMap: { [key: number]: string } = {
		
		0: isDay ? `klarer Himmel` : `klare Nacht`,  
		1: isDay ? `leicht bewölkt` : `leicht bewölkte Nacht`,  
		2: `bewölkt`, 
		3: `bedeckt`, 
		
		45: 'Nebel', 
		48: 'Nebel',

		51: `leichter Nieselregen`, 
		53: `Nieselregen`,
		55: `starker Nieselregen`, 

		56: `gefrierener Niesel`, 
		57: `gefrierener Niesel`, 

		61: `leichter Regen`, 
		63: `Regen`, 
		65: 'starker Regen', 

		66: `gefrierender Regen`, 
		67: `gefrierender Regen`, 

		41: `leichter Schneefall`, 
		50: `Schneefall`, 
		60: `starker Schneefall`, 

		77: `Hagel`, 

		80: `leichte Regenschauer`, 
		81: `Regenschauer`, 
		82: `stareke Regenschauer`, 

		85: `leichte Schneeschauer`, 
		86: `starke Schneeschauer`, 

		95: `Gewitter`, 
		96: `Gewitter mit Hagel`, 
		99: `Gewitter mit Hagel`,
	};

	return iconMap[weatherCode] || "https://openweathermap.org/img/wn/01d@2x.png"; 
};