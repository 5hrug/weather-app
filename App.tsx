import React, { useState, useEffect, useContext } from 'react';
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
import ContextProvider from './src/Components/Context';

const height = Dimensions.get('window').height;

export default function App() {
   return (
      <ContextProvider>
         <View style={styles.container}>
            <IosStatusBar backgroundColor='#000000' textColor='light' />
            <SafeAreaView>
               <MainScreen />
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
