import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
const axios = require('axios').default;

export const Context = React.createContext<any | undefined>(undefined);
// export const Context = React.createContext();

export function useTodoContext() {
   const {data} = useContext(Context)
   if (data === undefined) {
     throw new Error("useTodoContext must be within TodoProvider")
   }
   return data
}
 

const ContextProvider = ({ children }:any) => {
   const [data, setData] = useState<any | undefined>(undefined);
   const [pressedSearch, setPressedSearch] = useState(true);

   const pressHandler = () => {
      setPressedSearch(!pressedSearch);
   };

   const pressedCity = (city:any) => { 
      console.log(city);
      const town = city ?? 'Bratislava';
      axios
         .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=29501213cfe466764c7b2b83e1e9506e&units=metric`
         )
         .then(function (response:any) {
            setData(response.data);
            console.log('dalo set data');
         });
      setPressedSearch(!pressedSearch);
   };
   return (
      <Context.Provider value={{data, pressedCity, pressHandler,pressedSearch}}>
            {children}
         </Context.Provider>
   );
};
//  value={{pressedSearch, data, pressedCity, pressHandler}}
export default ContextProvider;
