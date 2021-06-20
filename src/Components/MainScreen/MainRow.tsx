import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PeakList from './PeakList';
import ItemMainValue from './ItemMainValue';
import ItemToday from './ItemToday';

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
   },
});

export default MainRow;
