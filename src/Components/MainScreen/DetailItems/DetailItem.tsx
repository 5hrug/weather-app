import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
   useFonts,
   Barlow_500Medium,
   Barlow_300Light,
} from '@expo-google-fonts/barlow';
interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function DetailItem({icon,term,value}: any) {
   return (
      <View style={styles.container}>
         <Image style={styles.icon} source={icon} />
         <Text style={styles.value}>Day{value}</Text>
         <Text style={styles.name}>{term}</Text>
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
      fontFamily: 'Barlow_500Medium',
   },
   name: {
      color: '#999999',
      fontSize: 8,
      fontFamily: 'Barlow_500Medium',
   },
   icon: {},
});
export default DetailItem;
