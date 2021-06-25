import React, { useState, useEffect, useRef } from 'react';
import { returnLatLon, cities } from './Helpers';
const axios = require('axios').default;

export const Context = React.createContext<any | undefined>(undefined);

const ContextProvider = ({ children }: any) => {
   const [data, setData] = useState<any | undefined>(undefined);
   const [forecast, setForecast] = useState<any | undefined>(undefined);
   const [changePanel, setchangePanel] = useState(true);
   const [pressedCity, setPressedCity] = useState('');
   const [loading, setloading] = useState(false);
   const [allCities, setAllCities] = useState<any>();
   const isFirstRender = useRef(true);

   useEffect(() => {
      if (isFirstRender.current) {
         isFirstRender.current = false;
         return;
      }

   }, [allCities]);

   const fetchAllCities = async () => {
      const arrayOfPromises = cities.map((city) =>
         axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29501213cfe466764c7b2b83e1e9506e&units=metric`
         )
      );

      const res = await Promise.all(arrayOfPromises).catch((e) =>
         console.log(e)
      );
      setAllCities(res);
   };

   const pressHandler = async () => {
      await fetchAllCities();
      setchangePanel(!changePanel);

   };

   const handlePressedCity = (city: any) => {
      setloading(true);
      const town = city ?? 'Bratislava';
      const { lat, lon } = returnLatLon(town);
      const weatherPromise = axios.get(
         `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=29501213cfe466764c7b2b83e1e9506e&units=metric`
      );
      const forecastPromise = axios.get(
         `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=29501213cfe466764c7b2b83e1e9506e`
      );

      Promise.all([weatherPromise, forecastPromise])
         .then((res: any) => {
            setData(res[0].data);
            setForecast(res[1].data);
            setPressedCity(city);
            setloading(false);
            setchangePanel(!changePanel);
         })
         .catch(function (error) {
            setloading(false);
            console.log(error);
         });
   };

   return (
      <Context.Provider
         value={{
            data,
            forecast,
            pressedCity,
            changePanel,
            loading,
            allCities,
            handlePressedCity,
            pressHandler,
            fetchAllCities
         }}>
         {children}
      </Context.Provider>
   );
};
export default ContextProvider;
