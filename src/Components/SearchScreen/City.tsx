import React, { useContext, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
   useFonts,
   Barlow_400Regular,
   Barlow_300Light,
} from '@expo-google-fonts/barlow';
import { Context } from '../Context';

function City({ city }: any) {
   let [fontsLoaded] = useFonts({
      Barlow_400Regular,
      Barlow_300Light,
   });

   const { handlePressedCity } = useContext(Context);

   return (
      <>
         {fontsLoaded && (
            <TouchableOpacity
               style={styles.container}
               onPress={() => handlePressedCity(city)}>
               <>
                  <Text style={styles.city}>{city}</Text>
                  <Text style={styles.temperature}>35&deg;C</Text>
               </>
            </TouchableOpacity>
         )}
      </>
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
