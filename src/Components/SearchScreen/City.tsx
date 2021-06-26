import React, { useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
   useFonts,
   Barlow_400Regular,
   Barlow_300Light,
} from '@expo-google-fonts/barlow';
import { Context } from '../Utils/Context';
import { useNetInfo } from '@react-native-community/netinfo';

interface Props {
   city: string;
   temp?: number;
}

function City({ city, temp }: Props) {
   const netInfo = useNetInfo();
   const { handlePressedCity } = useContext(Context);

   let [fontsLoaded] = useFonts({
      Barlow_400Regular,
      Barlow_300Light,
   });

   return (
      <>
         {fontsLoaded && (
            <TouchableOpacity
               style={styles.container}
               onPress={() => handlePressedCity(city)}>
               <>
                  <Text style={styles.city}>{city}</Text>
                  {netInfo.isConnected && <Text style={styles.temperature}>
                     {temp && Math.round(temp)}
                     &deg;C
                  </Text>}
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
