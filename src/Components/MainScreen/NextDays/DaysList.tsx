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
  },

})

export default DaysList;
