import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
const axios = require('axios').default;

// type ThemeContextType = {
//    data: { name: string };
// };
// React.createContext<any>(defaultValue: any): React.Context<any>
// export const TodosContext = React.createContext();
export const CityPressed = React.createContext<any | undefined>(undefined);
export const WeatherData = React.createContext<any | undefined>(undefined);

// export function useCont() {
//    return useContext(TodosContext);
// }

const ContextProvider = ({ children }: any) => {
   const [data, setData] = useState({ a: 'teraz' });

   const pressedCity = () => {
      axios
         .get(
            `https://api.openweathermap.org/data/2.5/weather?q=Bratislava&appid=29501213cfe466764c7b2b83e1e9506e&units=metric`
         )
         .then(function (response: any) {
            console.log('som v kontexte!!!');
            console.log('malo by vypisat data', response.data);
            setData(response.data);
         });
      // setPressedSearch(!pressedSearch);
   };
   // pressedCity('Bratislava');
   return (
      <WeatherData.Provider value={data}>
         <CityPressed.Provider value={pressedCity}>
            {children}
         </CityPressed.Provider>
      </WeatherData.Provider>
   );
};

export default ContextProvider;
