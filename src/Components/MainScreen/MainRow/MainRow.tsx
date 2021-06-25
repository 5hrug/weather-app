import React from 'react';
import { View, StyleSheet } from 'react-native';
import PeakList from './Peak/PeakList';
import ItemMainValue from './Degree';
import ItemToday from './Description';

function MainRow() {
   return (
      <View style={styles.container}>
         <ItemToday />
         <ItemMainValue />
         <PeakList />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 70,
      marginVertical: 20,
      marginHorizontal: '3%',
   },
});

export default MainRow;
