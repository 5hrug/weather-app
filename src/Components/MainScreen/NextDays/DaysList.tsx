import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Day from './Day';

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
   //  flex: 1,
   //  height: 101,
   //  width: '100%',
   //   marginBottom:-200,

    flexDirection: 'row',
   //  justifyContent: 'space-around',
   //    alignSelf: 'center',
   //  marginLeft:100,
    // alignItems:'flex-end'
  },

})

export default DaysList;
