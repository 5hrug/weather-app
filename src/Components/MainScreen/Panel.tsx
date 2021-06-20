import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import DaysList from './DaysList';
import DetailsList from './DetailsList';
import MainRow from './MainRow';
import Header from './Header';
const axios = require('axios').default;

const height = Dimensions.get('window').height;

function Panel() {
   //dat do zvlast subora
   useEffect(() => {
      axios
         .get(
            'https://api.openweathermap.org/data/2.5/weather?q=bratislava&appid=29501213cfe466764c7b2b83e1e9506e'
         )
         .then(function (response: any) {
            console.log(response.data.coord);
         })
         .catch(function (error: any) {
            console.log('mojeror');
            console.log(error);
         });
   }, []);

   return (
      <View style={styles.container}>


         {/* <Header/> */}
         {/* <MainRow /> */}
         {/* <DetailsList />
         <DetailsList /> */}
         {/* <DaysList /> */}

         {/* <DaysList /> */}
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff2f2',
      width: '100%',
      position: 'absolute',
      top: 309,
      height: height - 333,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      justifyContent: 'flex-end',
   },
   panel: {},
});
export default Panel;
