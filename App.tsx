import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
   StyleSheet,
   Button,
   Text,
   View,
   SafeAreaView,
   Platform,
   Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import IosStatusBar from './src/Components/IosStatusBar';

import MainScreen from './src/Screens/MainScreen';
import Panel from './src/Components/MainScreen/Panel';
import SearchPanel from './src/Components/SearchScreen/Panel';
import { createContext } from 'react';
const axios = require('axios').default;

const height = Dimensions.get('window').height;

export default function App() {
   const [pressedSearch, setPressedSearch] = useState(true);
   const pressHandler = () => {
      setPressedSearch(!pressedSearch);
   };
   const pressedCity = (city: any) => {
      console.log(city);
      axios
         .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29501213cfe466764c7b2b83e1e9506e`
         )
         .then(function (response: any) {
            console.log(response.data.coord);
            console.log('axios uspesny');
            setPressedSearch(!pressedSearch);

         })
         .catch(function (error: any) {
            console.log('clg err:', error);
         });
   };

   return (
      <View style={styles.container}>
         <IosStatusBar backgroundColor='#000000' textColor='light' />
         <SafeAreaView>
            <MainScreen />
            {pressedSearch ? (
               <SearchPanel pressedCity={pressedCity} />
            ) : (
               <Panel pressHandler={pressHandler} />
            )}
         </SafeAreaView>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      height: height,

      marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
   },
});
