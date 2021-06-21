import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
   useFonts,
   Barlow_300Light,
} from '@expo-google-fonts/barlow';
interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function PeakOfTheDay(props: any) {
   return (
      <View style={styles.container}>
         <Text style={styles.value}>35&deg;C</Text>
         <Text style={styles.arrow}>ar</Text>
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
