import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
   useFonts,
   Barlow_500Medium,
   Barlow_300Light,
} from '@expo-google-fonts/barlow';
interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function DetailItem(props: Props) {
   return (
      <View style={styles.container}>
         <Text style={styles.icon}>icon</Text>
         <Text style={styles.value}>Day</Text>
         <Text style={styles.name}>pressure</Text>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 95,
      height: 101,
   },
   value: {
      fontSize: 16,
      fontFamily:'Barlow_500Medium',
   },
   name: {
      color: '#999999',
      fontSize: 8,
      fontFamily: 'Barlow_500Medium',
      
   },
   icon: {},
});
export default DetailItem;
