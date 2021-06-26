import React from 'react';
import {
   StyleSheet,
   View,
   SafeAreaView,
   Platform,
   Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import IosStatusBar from './src/Components/Utils/IosStatusBar';
import MainScreen from './src/Screens/MainScreen';
import ContextProvider from './src/Components/Utils/Context';
import { LinearGradient } from 'expo-linear-gradient';

const height = Dimensions.get('window').height;

export default function App() {
   return (
      <ContextProvider>
         <View style={styles.container}>
            <IosStatusBar backgroundColor='#000000' textColor='light' />
            <SafeAreaView>
               <LinearGradient
                  colors={['#d3d3d3cc', 'transparent']}
                  style={styles.background}
               />
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
   background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: height,
   },
});
