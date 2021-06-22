import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
   StyleSheet,
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
import ContextProvider from './src/Components/Context';
const axios = require('axios').default;

const height = Dimensions.get('window').height;

export default function App() {
   const [pressedSearch, setPressedSearch] = useState(true);

   const pressHandler = () => {
      setPressedSearch(!pressedSearch);
   };
// pressedCity={pressedCity}

   return (
      <ContextProvider >
         <View style={styles.container}>
            <IosStatusBar backgroundColor='#000000' textColor='light' />
            <SafeAreaView>
               <MainScreen />
               {pressedSearch ? (
                  <SearchPanel  />
               ) : (
                  <Panel pressHandler={pressHandler} />
               )}
            </SafeAreaView>
         </View>
      </ContextProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      height: height,
      marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
   },
});
