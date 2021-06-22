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
function ItemMainValue(props: Props) {
   let [fontsLoaded] = useFonts({
      Barlow_500Medium,
      Barlow_300Light,
   });

   if (!fontsLoaded) {
      return  <></>;
    } else return (
      <View style={styles.container}>
         <Text style={styles.value}>35</Text>
         <Text style={styles.celsius}>&deg;C</Text>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   celsius: {
      fontSize: 24,
      fontFamily: 'Barlow_500Medium',
      alignSelf: 'flex-start',
      marginTop:15
   },
   value: {
      fontSize: 64,
      fontFamily: 'Barlow_300Light',
   },
   arrow: {},
   c: {},
});
export default ItemMainValue;
