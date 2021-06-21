import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
   useFonts,
   Barlow_500Medium,
} from '@expo-google-fonts/barlow';
interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function ItemToday(props: Props) {
   return (
      <View style={styles.container}>
         <Text style={styles.icon}>icon</Text>
         <Text style={styles.weather}>Sunny</Text>
         
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
   },
   weather: {
      fontFamily: 'Barlow_500Medium',
      fontSize:18,
   },
   icon: {},

});
export default ItemToday;
