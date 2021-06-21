import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PeakOfTheDay from './PeakOfTheDay';

function PeakList() {
   return (
      <View style={styles.container}>
         <PeakOfTheDay arrow={require('../../../../assets/arrowup.png')} />
         <View style={{height:12}}></View>
         <PeakOfTheDay arrow={require('../../../../assets/arrowdown.png')} />
      </View>
   );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
     justifyContent:'center',
  },

})

export default PeakList;
