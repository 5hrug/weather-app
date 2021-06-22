import React, { useContext,useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
   useFonts,
   Barlow_400Regular,
   Barlow_300Light,
} from '@expo-google-fonts/barlow';
// import {ToggleF} from '../context';
import { CityPressed} from '../Context';

function City({ city }:any) {
   let [fontsLoaded] = useFonts({
      Barlow_400Regular, 
      Barlow_300Light,
   });

   // const pressed = useCont();
   // const pressed = useContext(CityPressed);
   const {pressedCity,data,pressedSearch}= useContext(CityPressed);
   // console.log('city:',data.main.temp);

   // const weather = useContext(WeatherData);
   // console.log('city:',weather.main.temp);
   console.log(pressedSearch);

   if (!fontsLoaded) return <View></View>;
   else
      return (
         <TouchableOpacity style={styles.container} onPress={() => pressedCity(city)}>
            <>
               <Text style={styles.city}>{city}</Text>
               <Text style={styles.temperature}>35&deg;C</Text>
            </>
         </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
   },
   city: {
      marginLeft: 35,
      fontSize: 18,
      fontFamily: 'Barlow_400Regular',
   },
   temperature: {
      marginLeft: 'auto',
      marginRight: 35,
      fontSize: 16,
      color: '#666666',
      fontFamily: 'Barlow_300Light',
   },
});

export default City;
