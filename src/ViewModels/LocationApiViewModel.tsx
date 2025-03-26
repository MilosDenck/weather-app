import { useEffect, useState } from "react";
import { Location } from "../Models/Types";
import { getUserLocation } from "../utils/getUserLocation";

export const useLocationApi = () => {
    const [location, setNewLocation] = useState<Location | null> (null)
    const [loadingLocation, setLoading] = useState(true)

    const initLocation =  async() => {
        const userLocation = await getUserLocation()
        updateLocationByCoordinates(String(userLocation.lat), String(userLocation.lon))
    }

    const updateLocationByCoordinates = async (lat: string, lon: string) => {
        try {
            setLoading(true);
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
            const data = await response.json();
            setNewLocation(data);
            console.log(data)
          } catch (error) {
            console.error("Fehler beim Laden der Wetterdaten", error);
          } finally {
            setLoading(false);
          }
    }

    const updateLocationBySearchValue = async (searchValue: string) => {
        try {
            setLoading(true);
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${searchValue}&format=json`);
            const data = await response.json();
            setNewLocation(data[0]);
            console.log(data)
          } catch (error) {
            console.error("Fehler beim Laden der Wetterdaten", error);
          } finally {
            setLoading(false);
          }
    }

    useEffect(() => {
        initLocation();
    }, []);

    return {location, loadingLocation, updateLocationBySearchValue}
}