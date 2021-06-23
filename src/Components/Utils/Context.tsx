import React, { useState} from 'react';
import {returnLatLon} from './Helpers';
const axios = require('axios').default;

export const Context = React.createContext<any | undefined>(undefined);

const ContextProvider = ({ children }: any) => {
   const [data, setData] = useState<any | undefined>(undefined);
   const [forecast, setForecast] = useState<any | undefined>(undefined);
   const [pressedSearch, setPressedSearch] = useState(true);
   const [pressedCity, setPressedCity] = useState('');

   const pressHandler = () => {
      setPressedSearch(!pressedSearch);
   };

   const handlePressedCity = (city: any) => {
      console.log(city);
      const town = city ?? 'Bratislava';
      const { lat, lon } = returnLatLon(town);
      const weatherPromise = axios.get(
         `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=29501213cfe466764c7b2b83e1e9506e&units=metric`
      );
      const forecastPromise = axios.get(
         `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=29501213cfe466764c7b2b83e1e9506e`
      );

      Promise.all([weatherPromise, forecastPromise]).then((response: any) => {
         setData(response[0].data);
         setForecast(response[1].data);
         setPressedCity(city);
         setPressedSearch(!pressedSearch);
      });
   };

   return (
      <Context.Provider
         value={{
            data,
            forecast,
            pressedCity,
            pressedSearch,
            handlePressedCity,
            pressHandler,
         }}>
         {children}
      </Context.Provider>
   );
};
export default ContextProvider;
