import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts, Barlow_300Light } from '@expo-google-fonts/barlow';
interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}

function PeakOfTheDay({ arrow }: any) {
   let [fontsLoaded] = useFonts({
      Barlow_300Light,
   });

   if (!fontsLoaded) {
      return  <></>;
   } else
      return (
         <View style={styles.container}>
            <Text style={styles.value}>35&deg;C</Text>
            <Image style={styles.arrow} source={arrow} />
         </View>
      );
}
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   celsius: {},
   value: {
      color: '#666666',
      fontSize: 16,
      fontFamily: 'Barlow_300Light',
   },
   arrow: {},
});

export default PeakOfTheDay;
