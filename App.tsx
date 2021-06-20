import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
   StyleSheet,
   Button,
   Text,
   View,
   SafeAreaView,
   Platform,
   Dimensions
} from 'react-native';
import Constants from 'expo-constants';
const height = Dimensions.get('window').height;

import MainScreen from './src/Screens/MainScreen'; 
// import Panel from './src/Components/MainScreen/Panel'; 
import Panel from './src/Components/SearchScreen/Panel'; 

export default function App() {
   return (
      <View style={styles.container}>
         <MainScreen/>
         <Panel />

      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      height: height,

      marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
   },

});
