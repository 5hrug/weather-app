import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
   useFonts,
   Barlow_500Medium,
   Barlow_500Medium_Italic,
} from '@expo-google-fonts/barlow';
import CitiesList from './CitiesList';
import City from './City';
import { useState } from 'react';

const axios = require('axios').default;

const height = Dimensions.get('window').height;

function Panel() {
   const [searchedCity, setSearchedCity] = useState('');
   let [fontsLoaded] = useFonts({
      Barlow_500Medium,
      Barlow_500Medium_Italic,
   });
   const cities = [
      'Bratislava',
      'Humenné',
      'Koromľa',
      'Košice',
      'Michalovce',
      'Sobrance',
   ];
   const lowCaseCities = cities.map((city) => {
     return  city.toLowerCase();
   })

   return (
      <>
         {fontsLoaded && (
            <View style={styles.container}>
               <Text style={styles.title}>Location</Text>
               <View style={styles.wrapper}>
                  <Ionicons
                     style={styles.icon}
                     name='location-sharp'
                     size={19}
                     color='black'
                  />
                  <TextInput
                     style={styles.input}
                     placeholder='Search city ...'
                     underlineColorAndroid='transparent'
                     onChangeText={(value) => {
                        setSearchedCity(value);
                     }}
                  />
               </View>
               {cities
                  .filter((city) => city.toLowerCase().startsWith(searchedCity.toLowerCase()))
                  .map((city, i) => {
                     return <City key={city} city={city} />;
                  })}
            </View>
         )}
      </>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#ffffff',
      width: '100%',
      position: 'absolute',
      top: 29,
      height: height,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
   },
   wrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      marginVertical: 20,
   },
   title: {
      alignSelf: 'center',
      marginTop: 20,
      color: '#999999',
      fontSize: 16,
      fontFamily: 'Barlow_500Medium',
   },
   input: {
      flex: 1,
      height: 40,
      margin: 20,
      backgroundColor: '#F3F3F3',
      paddingLeft: 15,
      fontSize: 18,
      fontFamily: 'Barlow_500Medium_Italic',
   },

   icon: {
      position: 'absolute',
      right: 33,
      zIndex: 10,
      alignSelf: 'center',
   },
});
export default Panel;
