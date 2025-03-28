import { useEffect, useState } from "react";
import { Location } from "../Models/Types";
import { getUserLocation } from "../utils/getUserLocation";

export const useLocationApi = () => {
    const [location, setNewLocation] = useState<Location | null> (null)

    const initLocation =  async() => {
        const userLocation = await getUserLocation()
        updateLocationByCoordinates(String(userLocation.lat), String(userLocation.lon))
    }

    const updateLocationByCoordinates = async (lat: string, lon: string) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
            console.log("hjbhjh")
            if(response.status === 200){
              const data = await response.json();
              setNewLocation(data);
            }
          } catch (error) {
            console.error("Fehler beim Laden der Wetterdaten", error);
          } 
    }

    const updateLocationBySearchValue = async (searchValue: string) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${searchValue}&format=json`);
            if(response.status === 200){
              const data = await response.json();
              setNewLocation(data[0]);
            }
          } catch (error) {
            console.error("Fehler beim Laden der Wetterdaten", error);
          } 
    }

    useEffect(() => {
        initLocation();
    }, []);

    return {location, updateLocationBySearchValue}
}