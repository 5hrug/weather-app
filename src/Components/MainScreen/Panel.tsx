import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions,ScrollView } from 'react-native';
import DetailsList from './DetailItems/DetailsList'; 
import MainRow from './MainRow/MainRow';
import Header from './Header/Header';
import NextDays from './NextDays/DaysList';
const axios = require('axios').default;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

function Panel({pressHandler}:any) {
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
      <ScrollView style={styles.container}>
         <Header pressHandler={pressHandler}/> 
         <MainRow />
         <DetailsList />
         <DetailsList /> 
         <NextDays/>


      </ScrollView>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f8dcdc',
      width: '100%',
      position: 'absolute',
      // top: 309,
      top: width * 0.8 * 0.93,
      height: height - width * 0.8,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
   },
   panel: {},
});
export default Panel;
