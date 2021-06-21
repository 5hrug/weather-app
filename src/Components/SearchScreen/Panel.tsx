import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
   useFonts,
   Barlow_500Medium,
} from '@expo-google-fonts/barlow';
import CitiesList from './CitiesList';

const axios = require('axios').default;

const height = Dimensions.get('window').height;

function Panel({pressedCity}:any) {
   let [fontsLoaded] = useFonts({
      Barlow_500Medium,
   });
   //dat do zvlast subora
   useEffect(() => {
      axios
         .get(
            'https://api.openweathermap.org/data/2.5/weather?q=bratislava&appid=29501213cfe466764c7b2b83e1e9506e'
         )
         .then(function (response: any) {
            // console.log(response.data.coord);
         })
         .catch(function (error: any) {
            console.log('mojeror');
            console.log(error);
         });
   }, []);
   if (!fontsLoaded) {
      return <Text>LOADING</Text>;
    } else return (
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
            />
         </View>
         <CitiesList pressedCity={pressedCity}/>
      </View>
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
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      
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
      fontFamily:'Barlow_500Medium',

   },
   input: {
      flex: 1,
      height: 40,
      margin: 20,
      backgroundColor: '#F3F3F3',
      paddingLeft:15,
   },

   icon: {
      position: 'absolute',
      right: 33,
      zIndex: 10,
      alignSelf: 'center',
   },
});
export default Panel;
