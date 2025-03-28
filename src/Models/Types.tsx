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
      is_day: string;
    };
    current: {
      time: string;
      interval: number;
      temperature_2m: number;
      weather_code: number;
      is_day: number;
    };
    hourly_units: {
      time: string;
      temperature_2m: string;
      precipitation: string;
      weather_code: string;
      is_day: string;
    };
    hourly: {
      time: string[];
      temperature_2m: number[];
      precipitation: number[];
      weather_code: number[];
      is_day: number[];
    };
    daily_units: {
      time: string;
      wind_direction_10m_dominant: string;
      uv_index_max: string;
      sunrise: string;
      sunset: string;
      precipitation_sum: string;
      sunshine_duration: string;
      wind_speed_10m_max: string;
      weather_code: string;
      temperature_2m_max: string;
      temperature_2m_min: string;
      precipitation_probability_max: string;
    };
    daily: {
      time: string[];
      wind_direction_10m_dominant: number[];
      uv_index_max: number[];
      sunrise: string[];
      sunset: string[];
      precipitation_sum: number[];
      sunshine_duration: number[];
      wind_speed_10m_max: number[];
      weather_code: number[];
      temperature_2m_max: number[];
      temperature_2m_min: number[];
      precipitation_probability_max: number[];
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

export type LocationArray = Location[];