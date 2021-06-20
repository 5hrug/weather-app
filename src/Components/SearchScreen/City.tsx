import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
   useFonts,
   Barlow_400Regular,
   Barlow_300Light,
} from '@expo-google-fonts/barlow';

function City() {
   return (
      <View style={styles.container}>
         <Text style={styles.city}>asd</Text>
         <Text style={styles.temperature}>35&deg;C</Text>
      </View>
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
