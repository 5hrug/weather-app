import React, { useContext, useState, useRef } from 'react';
import { Context } from '../Utils/Context';
import { Ionicons } from '@expo/vector-icons';
import DetailsList from './DetailItems/DetailsList';
import MainRow from './MainRow/MainRow';
import Header from './Header/Header';
import NextDays from './NextDays/DaysList';
import { cities } from '../Utils/Helpers';
import City from '../SearchScreen/City';
import {
   View,
   Text,
   StyleSheet,
   Dimensions,
   ScrollView,
   ImageBackground,
   ActivityIndicator,
   TextInput,
   Animated,
   Button,
   Image,
} from 'react-native';
import {
   useFonts,
   Barlow_500Medium,
   Barlow_500Medium_Italic,
   Barlow_300Light,
} from '@expo-google-fonts/barlow';

const axios = require('axios').default;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

function Panel({ pressHandler }: any) {
   const { changePanel } = useContext(Context);
   const { loading } = useContext(Context);
   const [searchedCity, setSearchedCity] = useState('');

   const fadeAnim = useRef(new Animated.Value(0.5)).current;

   let [fontsLoaded] = useFonts({
      Barlow_500Medium,
      Barlow_500Medium_Italic,
   });

   const fadeIn = () => {
      Animated.timing(fadeAnim, {
         toValue: 1,
         duration: 300,
         useNativeDriver: true,
      }).start();
   };

   if (!changePanel) fadeIn();

   return (
      <>
         <ImageBackground
            source={require('../../../assets/graphic.jpg')}
            style={styles.graphic}
            imageStyle={{}}></ImageBackground>
         

         {changePanel ? (
            <>
               {fontsLoaded && (
                  <View style={styles.SearchContainer}>
                     {loading && (
                        <ActivityIndicator
                           style={styles.activityIndicator}
                           size='large'
                           color='#000000'
                        />
                     )}

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
                        .filter((city) =>
                           city
                              .toLowerCase()
                              .startsWith(searchedCity.toLowerCase())
                        )
                        .map((city, i) => {
                           return <City key={city} city={city} />;
                        })}
                  </View>
               )}
            </>
         ) : (
            <>
               <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                  <ScrollView>
                     <Header />
                     <MainRow />
                     <DetailsList />
                     <NextDays />
                  </ScrollView>
               </Animated.View>
            </>
         )}
      </>
   );
}
// {/* <Animated.View style={[styles.container, { opacity:fadeAnim }]}> */}
{
   /* </Animated.View> */
}
//
const styles = StyleSheet.create({
   container: {
      backgroundColor: '#ffffff',
      width: '100%',
      position: 'absolute',
      top: width * 0.8 * 0.93,
      height: height - width * 0.8,
      // height: height,
      // transform: [{ scaleY: 1 }],
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
   },
   SearchContainer: {
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
   graphic: {
      height: width * 0.8,
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
   },
});
export default Panel;
