import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts, Barlow_500Medium } from '@expo-google-fonts/barlow';
interface Props {
   day?: string;
   WeatherIcon?: 'sunny' | 'windy';
}
function Day({ icon, day, top, bot }: any) {
   let [fontsLoaded] = useFonts({
      Barlow_500Medium,
   });
   return (
      <>
         {fontsLoaded && (
            <View style={styles.container}>
               <Image source={icon} />
               <Text style={styles.day}>{day}</Text>
               <View style={styles.group}>
                  <Text style={styles.peaks}>{top}&deg;C</Text>
                  <Image source={require('../../../../assets/arrowup.png')} />
                  <View style={styles.gap}></View>
                  <Text style={styles.peaks}>{bot}&deg;C</Text>
                  <Image source={require('../../../../assets/arrowdown.png')} />
               </View>
            </View>
         )}
      </>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 95,
      height: 101,
      borderRadius: 16,
      margin: '3%',

      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.1,
      shadowRadius: 24, 
      elevation: 10,
   },
   day: {
      fontSize: 16,
   },
   gap: {
      width: 6,
   },
   group: {
      flexDirection: 'row',
      fontFamily: 'Barlow_500Medium',
      alignItems: 'center',
   },
   peaks: {
      fontSize: 10,
      fontFamily: 'Barlow_500Medium',
      color: '#999999',
   },
});
export default Day;
