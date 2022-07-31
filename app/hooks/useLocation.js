import * as Location from "expo-location";
import React, {useState, useEffect} from 'react'
export const useLocation = () => {
    const [location, setLocation] = useState();
    useEffect(() => {
      async function requestLocation() {
        try {
            const { granted } = await Location.requestBackgroundPermissionsAsync();
            if (!granted) {
              return;
            }
            const {
              coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            setLocation({ latitude, longitude });     
        } catch (error) {
            console.log(error);
        }
       
      }
      requestLocation();
    }, []);
    return [location];
};
