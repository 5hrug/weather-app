import React, { useState, useContext, useEffect } from 'react';
import returnLatLon from './LatLonHelper';
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

      // It didnt work with Promise.all because of error ->
      // "Can't perform a React state update on an unmounted component."
      // I was not sure if fixing it was necessary and how much time i should have take for it.

      // Promise.all([weatherPromise, forecastPromise]).then(
      //    (response: any) => {
      //       setData(response[0].data);
      //       setForecast(response[1].data);
      //    }
      // );
      axios
         .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=29501213cfe466764c7b2b83e1e9506e&units=metric`
         )
         .then((res: any) => {
            setData(res.data);
            console.log(res.data);
         });
      axios
         .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=29501213cfe466764c7b2b83e1e9506e`
         )
         .then((res: any) => {
            setForecast(res.data);
         });

      setPressedCity(city);
      setPressedSearch(!pressedSearch);
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
