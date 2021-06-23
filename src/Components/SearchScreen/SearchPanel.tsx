import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Barlow_500Medium } from '@expo-google-fonts/barlow';
import CitiesList from './CitiesList';

const axios = require('axios').default;

const height = Dimensions.get('window').height;

function Panel({ pressedCity }: any) {
   let [fontsLoaded] = useFonts({
      Barlow_500Medium,
   });
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
                  />
               </View>
               <CitiesList />
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
   },

   icon: {
      position: 'absolute',
      right: 33,
      zIndex: 10,
      alignSelf: 'center',
   },
});
export default Panel;
