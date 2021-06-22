import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Day from './NextDay';

function DaysList() {
   return (
      <View style={styles.container}>
         <Day />
         <Day />
         <Day />
      </View>
   );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      marginBottom: 30,
     marginHorizontal:'3%',
   //   justifyContent:'space-around'
  },

})

export default DaysList;
