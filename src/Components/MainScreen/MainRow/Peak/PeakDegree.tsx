import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts, Barlow_300Light } from '@expo-google-fonts/barlow';
interface Props {
   arrow: any;
   degree: number;
}

function PeakOfTheDay({ arrow,degree }: Props) {
   let [fontsLoaded] = useFonts({
      Barlow_300Light,
   });

   return (
      <>
         {fontsLoaded && (
            <View style={styles.container}>
               <Text style={styles.value}>{degree}&deg;C</Text>
               <Image style={styles.arrow} source={arrow} />
            </View>
         )}
      </>
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
