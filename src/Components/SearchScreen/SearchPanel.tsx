import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput,ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Context} from '../Utils/Context';
import {cities} from '../Utils/Helpers';
import {
   useFonts,
   Barlow_500Medium,
   Barlow_500Medium_Italic,
   Barlow_300Light,
} from '@expo-google-fonts/barlow';
import City from './City';
import { useState } from 'react';

const axios = require('axios').default;

const height = Dimensions.get('window').height;

function Panel() {
   const { loading } = useContext(Context);
   const [searchedCity, setSearchedCity] = useState('');
   let [fontsLoaded] = useFonts({
      Barlow_500Medium,
      Barlow_500Medium_Italic,
   });

   return (
      <>
         {fontsLoaded && (
            <View style={styles.container}>
                  { loading && <ActivityIndicator style={styles.activityIndicator} size="large" color="#000000" />}

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
   activityIndicator: {
      position: 'absolute',
      alignSelf: 'center',
      top: 300,
   }
});
export default Panel;
