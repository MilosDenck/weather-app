export type WeatherData = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: {
        time: string;
        interval: string;
        temperature_2m: string;
		weather_code: string;
    };
    current: {
        time: string;
        interval: number;
        temperature_2m: number;
		weather_code: number,
    };
    hourly_units: {
        time: string;
        temperature_2m: string;
    };
    hourly: {
        time: string[];
        temperature_2m: number[];
    };
    daily_units: {
        time: string;
        temperature_2m_max: string;
        temperature_2m_min: string;
		weather_code: string;
    };
    daily: {
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
		weather_code: number[],
    };
};

type Address = {
    road: string;
    neighbourhood: string;
    suburb: string;
    borough: string;
    city: string;
    "ISO3166-2-lvl4": string;
    postcode: string;
    country: string;
    country_code: string;
};
  
export type Location = {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    class: string;
    type: string;
    place_rank: number;
    importance: number;
    addresstype: string;
    name: string;
    display_name: string;
    address: Address;
    boundingbox: [string, string, string, string];
};